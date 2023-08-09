import { Prisma } from "@PRISMA";
import { pipe, unless } from "@fxts/core";
import { IAuthentication } from "@APP/api";
import { IUser } from "@APP/api/structures/user/IUser";
import { prisma } from "@APP/infrastructure/DB";
import { Authentication } from "@APP/providers/authentication";
import { IToken } from "@APP/providers/authentication/interface";
import { ExternalFailure, InternalFailure, Result } from "@APP/utils";
import { BIZUser } from "../biz_user";
import { Client } from "../client";
import { HSProvider } from "../hs_provider";
import { REAgent } from "../re_agent";

export namespace Service {
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
            Result<
                IUser,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenInvalid
                      | IAuthentication.FailureCode.TokenExpired
                      | IUser.FailureCode.Invalid
                  >
            >
        > =>
            pipe(
                access_token,

                Authentication.Token.Access.verify,

                unless(Result.Error.is, (ok) =>
                    pipe(
                        ok,

                        Result.Ok.flatten,

                        (payload) =>
                            payload.user_type === "client"
                                ? Client.Service.getOne(tx)(payload.user_id)
                                : payload.user_type === "home service provider"
                                ? HSProvider.Service.getOne(tx)(payload.user_id)
                                : REAgent.Service.getOne(tx)(payload.user_id),

                        unless(
                            Result.Ok.is<
                                IUser,
                                InternalFailure<
                                    | IUser.FailureCode.NotFound
                                    | IUser.FailureCode.Inactive
                                    | IUser.FailureCode.Invalid
                                >
                            >,
                            Result.Error.lift(
                                () => new InternalFailure("USER_INVALID"),
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
            Result<
                IUser & { type: T },
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenInvalid
                      | IAuthentication.FailureCode.TokenExpired
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > =>
            pipe(
                access_token,

                Authentication.Token.Access.verify,

                unless(Result.Error.is, (ok) =>
                    pipe(
                        ok,

                        Result.Ok.flatten,

                        (payload) =>
                            payload.user_type !== user_type
                                ? Result.Error.map(
                                      new InternalFailure("USER_TYPE_MISMATCH"),
                                  )
                                : Result.Ok.map(payload),
                    ),
                ),

                unless(
                    Result.Error.is<
                        IToken.IAccess,
                        | ExternalFailure<"Crypto.decrypt">
                        | InternalFailure<
                              | IAuthentication.FailureCode.TokenInvalid
                              | IAuthentication.FailureCode.TokenExpired
                              | IUser.FailureCode.TypeMismatch
                          >
                    >,
                    (ok) =>
                        pipe(
                            ok,

                            Result.Ok.flatten,

                            (payload) =>
                                payload.user_type === "client"
                                    ? Client.Service.getOne(tx)(payload.user_id)
                                    : payload.user_type ===
                                      "home service provider"
                                    ? HSProvider.Service.getOne(tx)(
                                          payload.user_id,
                                      )
                                    : REAgent.Service.getOne(tx)(
                                          payload.user_id,
                                      ),

                            // type narrowing by `assertion`
                            (
                                input: Result<
                                    IUser,
                                    | ExternalFailure<"Crypto.decrypt">
                                    | InternalFailure<
                                          | IAuthentication.FailureCode.TokenInvalid
                                          | IAuthentication.FailureCode.TokenExpired
                                          | IUser.FailureCode.TypeMismatch
                                          | IUser.FailureCode.NotFound
                                          | IUser.FailureCode.Inactive
                                          | IUser.FailureCode.Invalid
                                      >
                                >,
                            ) =>
                                input as Result<
                                    IUser & { type: T },
                                    | ExternalFailure<"Crypto.decrypt">
                                    | InternalFailure<
                                          | IAuthentication.FailureCode.TokenInvalid
                                          | IAuthentication.FailureCode.TokenExpired
                                          | IUser.FailureCode.TypeMismatch
                                          | IUser.FailureCode.NotFound
                                          | IUser.FailureCode.Inactive
                                      >
                                >,

                            unless(
                                Result.Ok.is,
                                Result.Error.lift(
                                    () => new InternalFailure("USER_INVALID"),
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
    ): Result<T, InternalFailure<IUser.FailureCode.Unverified>> => {
        const is_verified =
            user.type === "client"
                ? Client.Service.isVerified(user)
                : BIZUser.Service.isVerified(user);
        return is_verified
            ? Result.Ok.map(user)
            : Result.Error.map(new InternalFailure("USER_UNVERIFIED"));
    };
}
