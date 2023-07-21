import { Prisma } from "@PRISMA";
import { pipe, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { IAuthentication } from "@APP/api";
import { IUser } from "@APP/api/structures/user/IUser";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import { Authentication } from "@APP/providers/authentication";
import { IToken } from "@APP/providers/authentication/interface";
import { Failure, InternalError, Result, pick } from "@APP/utils";
import { BIZUser } from "../biz_user";
import { Client } from "../client";
import { HSProvider } from "../hs_provider";
import { REAgent } from "../re_agent";

export namespace Service {
    /**
     * 타입 연산이 재대로 이루어지지 않아서 any를 사용했음.
     *
     * 함수 수정시 주의할 것
     */
    const getOne =
        <T extends IUser.Type>(user_type: T) =>
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            user_id: string,
        ): Promise<
            IResult<
                IUser & { type: T },
                InternalError | Failure<IUser.FailureCode.GetOne>
            >
        > =>
            user_type === "client"
                ? (Client.Service.getOne(tx)(user_id) as any)
                : user_type === "home service provider"
                ? (HSProvider.Service.getOne(tx)(user_id) as any)
                : user_type === "real estate agent"
                ? (REAgent.Service.getOne(tx)(user_id) as any)
                : Result.Error.map(
                      InternalError.create(
                          Error("사용자 유형이 올바르지 않습니다."),
                      ),
                  );

    /**
     * access_token으로부터 유효한 사용자를 불러옵니다.
     *
     * 승인되지 않은 사용자도 불러올 수 있습니다.
     */
    export const validate =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            access_token: string,
        ): Promise<
            IResult<IUser, InternalError | Failure<IUser.FailureCode.Validate>>
        > =>
            pipe(
                access_token,

                Authentication.Service.verifyToken(
                    Authentication.Token.Access.verify,
                ),

                unless(Result.Error.is, (ok) =>
                    pipe(
                        ok,

                        Result.Ok.flatten,

                        (payload) =>
                            getOne(payload.user_type)(tx)(payload.user_id),

                        unless(
                            Result.Ok.is,
                            Result.Error.lift((error) =>
                                error.name === "InternalError"
                                    ? error
                                    : Failure.create({
                                          cause: "USER_INVALID",
                                          message:
                                              "유효하지 않은 사용자입니다.",
                                          statusCode: HttpStatus.FORBIDDEN,
                                      }),
                            ),
                        ),
                    ),
                ),
            );

    /**
     * access_token으로부터 유효한 사용자를 불러옵니다.
     *
     * 승인되지 않은 사용자도 불러올 수 있습니다.
     *
     * 사용자 유형도 일치해야 합니다.
     */
    export const validateType =
        <T extends IUser.Type>(user_type: T) =>
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            access_token: string,
        ): Promise<
            IResult<
                IUser & { type: T },
                InternalError | Failure<IUser.FailureCode.ValidateType>
            >
        > =>
            pipe(
                access_token,

                Authentication.Service.verifyToken(
                    Authentication.Token.Access.verify,
                ),

                unless(Result.Error.is, (ok) =>
                    pipe(
                        ok,

                        Result.Ok.flatten,

                        (payload) =>
                            payload.user_type !== user_type
                                ? Result.Error.map(
                                      Failure.create({
                                          cause: "PERMISSION_INSUFFICIENT",
                                          message:
                                              "해당 요청에 대한 권한이 없습니다.",
                                          statusCode: HttpStatus.FORBIDDEN,
                                      }),
                                  )
                                : Result.Ok.map(payload),
                    ),
                ),

                unless(
                    Result.Error.is<
                        IToken.IAccess,
                        | InternalError
                        | Failure<
                              | IAuthentication.FailureCode.TokenVerify
                              | IAuthentication.FailureCode.PermissionInSufficient
                          >
                    >,
                    (ok) =>
                        pipe(
                            ok,

                            Result.Ok.flatten,

                            pick("user_id"),

                            getOne(user_type)(tx),

                            unless(
                                Result.Ok.is,
                                Result.Error.lift((error) =>
                                    error.name === "InternalError"
                                        ? error
                                        : Failure.create({
                                              cause: "USER_INVALID",
                                              message:
                                                  "유효하지 않은 사용자입니다.",
                                              statusCode: HttpStatus.FORBIDDEN,
                                          }),
                                ),
                            ),
                        ),
                ),
            );

    /**
     * `validate`나 `getOne`을 통해 얻은 사용자가 승인받은 사용자인지 검증한다.
     */
    export const verify = <T extends IUser>(
        user: T,
    ): IResult<T, Failure<IUser.FailureCode.Verify>> => {
        const is_verified =
            user.type === "client"
                ? Client.Service.isVerified(user)
                : BIZUser.Service.isVerified(user);
        return is_verified
            ? Result.Ok.map(user)
            : Result.Error.map(
                  Failure.create({
                      cause: "USER_UNVERIFIED",
                      message: "승인되지 않은 사용자입니다.",
                      statusCode: HttpStatus.FORBIDDEN,
                  }),
              );
    };
}
