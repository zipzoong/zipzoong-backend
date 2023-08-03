import { Prisma } from "@PRISMA";
import { isNull, pipe, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { randomInt, randomUUID } from "crypto";
import { IVerification } from "@APP/api/structures/IVerification";
import { IResult } from "@APP/api/types";
import { SMS } from "@APP/externals/sms";
import { prisma } from "@APP/infrastructure/DB";
import {
    DateMapper,
    Failure,
    InternalError,
    Result,
    isDeleted,
} from "@APP/utils";

export namespace Service {
    /** 5min */
    const duration = 1000 * 60 * 5;

    export const createPhone = (
        input: IVerification.IRequest.ICreatePhone,
    ): Promise<
        IResult<
            IVerification.IResponse.ICreate,
            Failure<IVerification.FailureCode.CreatePhone> | InternalError
        >
    > => {
        const phone = input.phone;
        const code = randomInt(1_00_000, 9_00_000).toString();
        return pipe(
            SMS.send({
                message: {
                    to: phone,
                    content: `[집중 서비스] 인증번호 [${code}]를 입력해주세요.`,
                },
            }),

            unless(
                Result.Error.is,
                Result.Ok.asyncLift(async (transaction_id) => {
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
                    return {
                        expired_at: DateMapper.toISO(new Date(now + duration)),
                    };
                }),
            ),
            unless(
                Result.Ok.is,
                Result.Error.lift((cause) => {
                    if (cause === "COUNTRY_CODE_UNSUPPORTED")
                        return Failure.create<IVerification.FailureCode.CreatePhone>(
                            {
                                cause: "COUNTRY_CODE_UNSUPPORTED",
                                message: "지원하지 않는 국가코드입니다.",
                                statusCode: HttpStatus.BAD_REQUEST,
                            },
                        );
                    if (cause === "PHONE_INVALID")
                        return Failure.create<IVerification.FailureCode.CreatePhone>(
                            {
                                cause: "PHONE_INVALID",
                                message: "전화번호 형식이 올바르지 않습니다.",
                                statusCode: HttpStatus.BAD_REQUEST,
                            },
                        );
                    return cause;
                }),
            ),
        );
    };

    export const verifyPhone = async ({
        phone,
        code,
    }: IVerification.IRequest.IVerifyPhone): Promise<
        IResult<
            IVerification.IResponse.IVerify,
            Failure<IVerification.FailureCode.VerifyPhone>
        >
    > => {
        const deadline = new Date(Date.now() - duration);

        const verification = await prisma.phoneVerificationModel.findFirst({
            where: { code, phone },
        });

        if (
            isNull(verification) ||
            isDeleted(verification) ||
            verification.is_verified
        )
            return Result.Error.map(
                Failure.create<IVerification.FailureCode.VerifyPhone>({
                    cause: "VERIFICATION_NOT_FOUND",
                    message: "알맞는 인증 정보를 찾을 수 없습니다.",
                    statusCode: HttpStatus.NOT_FOUND,
                }),
            );

        if (deadline > verification.created_at)
            return Result.Error.map(
                Failure.create<IVerification.FailureCode.VerifyPhone>({
                    cause: "VERIFICATION_EXPIRED",
                    message: "인증이 만료되었습니다.",
                    statusCode: HttpStatus.FORBIDDEN,
                }),
            );

        await prisma.phoneVerificationModel.updateMany({
            where: { id: verification.id },
            data: { is_verified: true, updated_at: DateMapper.toISO() },
        });

        return Result.Ok.map({ verification_id: verification.id });
    };

    export const assertVerifiedPhone =
        (tx: Prisma.TransactionClient = prisma) =>
        async ({
            phone,
            verification_id,
        }: IVerification.IVerifiedPhone.IVerification): Promise<
            IResult<
                string,
                Failure<IVerification.FailureCode.assertVerifiedPhone>
            >
        > =>
            pipe(
                verification_id,

                async (id) =>
                    tx.phoneVerificationModel.findFirst({ where: { id } }),

                (verification) =>
                    isNull(verification) ||
                    isDeleted(verification) ||
                    verification.phone !== phone
                        ? Result.Error.map(
                              Failure.create({
                                  cause: "VERIFICATION_NOT_FOUND",
                                  message:
                                      "전화번호 인증 정보가 존재하지 않습니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          )
                        : Result.Ok.map(verification),

                unless(Result.Error.is, (ok) =>
                    pipe(
                        ok,

                        Result.Ok.flatten,

                        async (verification) => {
                            const now = DateMapper.toISO();
                            await tx.phoneVerificationModel.updateMany({
                                where: { id: verification.id },
                                data: { is_deleted: true, deleted_at: now },
                            });
                            return verification.is_verified
                                ? Result.Ok.map(phone)
                                : Result.Error.map(
                                      Failure.create({
                                          cause: "VERIFICATION_UNCOMPLETED",
                                          message:
                                              "인증이 완료되지 않았습니다.",
                                          statusCode: HttpStatus.NOT_FOUND,
                                      }),
                                  );
                        },
                    ),
                ),
            );
}
