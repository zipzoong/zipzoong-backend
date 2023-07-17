import { IClient } from "@APP/api/structures/user/IClient";
import { prisma } from "@APP/infrastructure/DB";
import { Prisma } from "@PRISMA";
import { isNull, negate, pipe, throwError, unless } from "@fxts/core";
import { PrismaJson, PrismaMapper } from "./prisma";
import { Failure, Result, isUnDeleted, pick } from "@APP/utils";
import { HttpStatus } from "@nestjs/common";
import { Authentication } from "@APP/providers/authentication";

export namespace Service {
    export namespace Private {
        /**
         * @throw 403 TOKEN_EXPIRED
         * @throw 403 TOKEN_INVALID
         * @throw 403 PERMISSION_INSUFFICIENT
         * @throw 403 USER_INACTIVE
         * @throw 404 USER_NOT_FOUND
         */
        export const get =
            (tx: Prisma.TransactionClient = prisma) =>
            (access_token: string): Promise<IClient.IPrivate> =>
                pipe(
                    access_token,

                    Authentication.Service.tokenVerify(
                        Authentication.Token.Access.verify,
                    ),

                    unless(
                        (payload) => payload.user_type === "client",
                        Failure.throwFailure<IClient.FailureCode.GetMe>({
                            cause: "PERMISSION_INSUFFICIENT",
                            message: "해당 요청에 대한 권한이 없습니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        }),
                    ),

                    pick("user_id"),

                    async (id) =>
                        tx.clientModel.findFirst({
                            where: { id },
                            select: PrismaJson.privateSelect(),
                        }),

                    unless(
                        negate(isNull),
                        Failure.throwFailure<IClient.FailureCode.GetMe>({
                            cause: "USER_NOT_FOUND",
                            message: "존재하지 않는 사용자입니다.",
                            statusCode: HttpStatus.NOT_FOUND,
                        }),
                    ),

                    unless(
                        (client) => isUnDeleted(client.base),
                        Failure.throwFailure<IClient.FailureCode.GetMe>({
                            cause: "USER_INACTIVE",
                            message: "비활성화된 사용자입니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        }),
                    ),

                    PrismaMapper.toPrivate,

                    unless(
                        Result.Ok.is,
                        throwError((failure) =>
                            Error(
                                `Invalid Client. Please Check DB. user id is | ${Result.Error.flatten(
                                    failure,
                                )} |`,
                            ),
                        ),
                    ),

                    Result.Ok.flatten,
                );
    }
}
