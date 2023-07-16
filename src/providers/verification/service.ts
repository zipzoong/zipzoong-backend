import { IVerification } from "@APP/api/structures/IVerification";
import { IResult } from "@APP/api/types";
import { SMS } from "@APP/externals/sms";
import { prisma } from "@APP/infrastructure/DB";
import { DateMapper, Failure, Result, isDeleted } from "@APP/utils";
import { isNull, pipe, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { randomInt, randomUUID } from "crypto";

export namespace Service {
    /** 5min */
    const duration = 1000 * 60 * 5;

    /**
     * @throw 404 PHONE_INVALID
     * @throw 404 COUNTRY_CODE_UNSUPPORTED
     */
    export const createPhone = (
        input: IVerification.IRequest.ICreatePhone,
    ): Promise<IVerification.IResponse.ICreate> => {
        const phone = input.phone;
        const code = randomInt(1_00_000, 9_00_000).toString();
        return pipe(
            SMS.sendMessage({
                message: {
                    to: phone,
                    content: `[집중 서비스] 인증번호 [${code}]를 입력해주세요.`,
                },
            }),

            unless(Result.Ok.is, (failure) => {
                const cause = Result.Error.flatten(failure);
                if (cause === "COUNTRY_CODE_UNSUPPORTED")
                    throw Failure.create<IVerification.FailureCode.CreatePhone>(
                        {
                            cause: "COUNTRY_CODE_UNSUPPORTED",
                            message: "지원하지 않는 국가코드입니다.",
                            statusCode: HttpStatus.BAD_REQUEST,
                        },
                    );
                throw Failure.create<IVerification.FailureCode.CreatePhone>({
                    cause: "PHONE_INVALID",
                    message: "전화번호 형식이 올바르지 않습니다.",
                    statusCode: HttpStatus.BAD_REQUEST,
                });
            }),

            Result.Ok.flatten,

            async (transaction_id) => {
                const now = Date.now();
                const now_iso = DateMapper.toISO(new Date(now));
                await prisma.phoneVerificationModel.create({
                    data: {
                        id: randomUUID(),
                        phone,
                        code,
                        transaction_id,
                        is_verified: false,
                        created_at: now_iso,
                        updated_at: now_iso,
                        is_deleted: false,
                        deleted_at: null,
                    },
                });
                return now;
            },

            (time) => ({
                expired_at: DateMapper.toISO(new Date(time + duration)),
            }),
        );
    };

    /**
     * @throw 403 VERIFICATION_EXPIRED
     * @throw 404 VERIFICATION_NOT_FOUND
     */
    export const verifyPhone = async ({
        phone,
        code,
    }: IVerification.IRequest.IVerifyPhone): Promise<IVerification.IResponse.IVerify> => {
        const deadline = new Date(Date.now() - duration);

        const verification = await prisma.phoneVerificationModel.findFirst({
            where: { code, phone, is_deleted: false, is_verified: false },
        });

        if (isNull(verification))
            throw Failure.create<IVerification.FailureCode.VerifyPhone>({
                cause: "VERIFICATION_NOT_FOUND",
                message: "알맞는 인증 정보를 찾을 수 없습니다.",
                statusCode: HttpStatus.NOT_FOUND,
            });

        if (deadline > verification.created_at)
            throw Failure.create<IVerification.FailureCode.VerifyPhone>({
                cause: "VERIFICATION_EXPIRED",
                message: "인증이 만료되었습니다.",
                statusCode: HttpStatus.FORBIDDEN,
            });

        await prisma.phoneVerificationModel.updateMany({
            where: { id: verification.id },
            data: { is_verified: true, updated_at: DateMapper.toISO() },
        });

        return { verification_id: verification.id };
    };

    export const getVerifiedPhone = (
        verification_id: string,
    ): Promise<IResult<string, "NOT_FOUND" | "UNVERIFIED">> =>
        pipe(
            verification_id,

            async (id) =>
                prisma.phoneVerificationModel.findFirst({ where: { id } }),

            (verification) =>
                isNull(verification)
                    ? Result.Error.map("NOT_FOUND" as const)
                    : isDeleted(verification)
                    ? Result.Error.map("NOT_FOUND" as const)
                    : !verification.is_verified
                    ? Result.Error.map("UNVERIFIED" as const)
                    : Result.Ok.map(verification.phone),
        );
}
