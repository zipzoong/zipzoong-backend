import { Prisma } from "@PRISMA";
import { isNull, pipe, unless } from "@fxts/core";
import { randomInt, randomUUID } from "crypto";
import { IVerification } from "@APP/api/structures/IVerification";
import { SMS } from "@APP/externals/sms";
import { prisma } from "@APP/infrastructure/DB";
import {
    DateMapper,
    ExternalFailure,
    InternalFailure,
    Result,
    isDeleted,
} from "@APP/utils";

export namespace Service {
    /** 5min */
    const duration = 1000 * 60 * 5;

    export const createPhone = (
        input: IVerification.IRequest.ICreatePhone,
    ): Promise<
        Result<
            IVerification.IResponse.ICreate,
            | ExternalFailure<"SMS.send">
            | InternalFailure<
                  | IVerification.FailureCode.CountryCodeUnsupported
                  | IVerification.FailureCode.PhoneInvalid
              >
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
        );
    };

    export const verifyPhone = async ({
        phone,
        code,
    }: IVerification.IRequest.IVerifyPhone): Promise<
        Result<
            IVerification.IResponse.IVerify,
            InternalFailure<
                | IVerification.FailureCode.NotFound
                | IVerification.FailureCode.Expired
            >
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
                new InternalFailure("VERIFICATION_NOT_FOUND"),
            );

        if (deadline > verification.created_at)
            return Result.Error.map(
                new InternalFailure("VERIFICATION_EXPIRED"),
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
            Result<
                string,
                InternalFailure<
                    | IVerification.FailureCode.NotFound
                    | IVerification.FailureCode.Uncompleted
                >
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
                              new InternalFailure("VERIFICATION_NOT_FOUND"),
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
                                      new InternalFailure(
                                          "VERIFICATION_UNCOMPLETED",
                                      ),
                                  );
                        },
                    ),
                ),
            );
}
