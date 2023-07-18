import { IUser } from "@APP/api/structures/user/IUser";
import { IClient } from "@APP/api/structures/user/IClient";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { prisma } from "@APP/infrastructure/DB";
import { Authentication } from "@APP/providers/authentication";
import { Prisma } from "@PRISMA";
import { isString, pipe, unless } from "@fxts/core";
import { Failure, InternalError, Result, pick } from "@APP/utils";
import { HttpStatus } from "@nestjs/common";
import { IResult } from "@APP/api/types";
import { IToken } from "@APP/providers/authentication/interface";
import { IAuthentication } from "@APP/api/structures/IAuthentication";

export namespace Service {
    export const isVerified = <
        T extends IClient.IPrivate | IREAgent.IPrivate | IHSProvider.IPrivate,
    >(
        user: T,
    ): boolean => {
        switch (user.type) {
            case "client":
                return isString(user.phone);
            case "real estate agent":
                return user.is_verified;
            case "home service provider":
                return user.is_verified;
        }
    };

    export const authorize =
        <T extends IClient.IPrivate | IHSProvider.IPrivate | IREAgent.IPrivate>(
            user_type: T["type"],
            getPrivate: (
                user_id: string,
            ) => Promise<
                IResult<
                    T,
                    Failure<IUser.FailureCode.GetPrivate> | InternalError
                >
            >,
        ) =>
        async (
            access_token: string,
        ): Promise<
            IResult<T, Failure<IUser.FailureCode.Authorize> | InternalError>
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
                                      Failure.create<IAuthentication.FailureCode.PermissionInSufficient>(
                                          {
                                              cause: "PERMISSION_INSUFFICIENT",
                                              message:
                                                  "해당 요청에 권한이 없습니다.",
                                              statusCode: HttpStatus.FORBIDDEN,
                                          },
                                      ),
                                  )
                                : pipe(
                                      payload,

                                      pick("user_id"),

                                      getPrivate,

                                      unless(
                                          Result.Ok.is,
                                          Result.Error.lift((error) =>
                                              error.name === "InternalError"
                                                  ? error
                                                  : Failure.create<IUser.FailureCode.Authorize>(
                                                        {
                                                            cause: "USER_UNVERIFIED",
                                                            message:
                                                                "승인되지 않은 사용자입니다.",
                                                            statusCode:
                                                                HttpStatus.FORBIDDEN,
                                                        },
                                                    ),
                                          ),
                                      ),
                                  ),
                    ),
                ),

                unless(Result.Error.is, (ok) =>
                    isVerified(Result.Ok.flatten(ok))
                        ? ok
                        : Result.Error.map(
                              Failure.create<IUser.FailureCode.Authorize>({
                                  cause: "USER_UNVERIFIED",
                                  message: "승인되지 않은 사용자입니다.",
                                  statusCode: HttpStatus.FORBIDDEN,
                              }),
                          ),
                ),
            );

    export const getProfile =
        <
            T extends
                | IClient.IPrivate
                | IHSProvider.IPrivate
                | IREAgent.IPrivate,
        >({
            user_type,
            getPrivate,
        }: {
            user_type: T["type"];
            getPrivate: (
                tx?: Prisma.TransactionClient,
            ) => (
                user_id: string,
            ) => Promise<
                IResult<
                    T,
                    Failure<IUser.FailureCode.GetPrivate> | InternalError
                >
            >;
        }) =>
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            access_token: string,
        ): Promise<
            IResult<T, Failure<IUser.FailureCode.GetProfile> | InternalError>
        > =>
            pipe(
                access_token,

                Authentication.Service.verifyToken(
                    Authentication.Token.Access.verify,
                ),

                unless(Result.Error.is, (ok) =>
                    Result.Ok.flatten(ok).user_type !== user_type
                        ? Result.Error.map(
                              Failure.create({
                                  cause: "PERMISSION_INSUFFICIENT",
                                  message: "해당 요청에 대한 권한이 없습니다.",
                                  statusCode: HttpStatus.FORBIDDEN,
                              }),
                          )
                        : pipe(
                              ok,

                              Result.Ok.flatten<IToken.IAccess>,

                              pick("user_id"),

                              getPrivate(tx),
                          ),
                ),
            );
}
