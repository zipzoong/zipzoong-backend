import { IUser } from "@APP/api/structures/user/IUser";
import { IClient } from "@APP/api/structures/user/IClient";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { prisma } from "@APP/infrastructure/DB";
import { Authentication } from "@APP/providers/authentication";
import { Prisma } from "@PRISMA";
import { isNull, negate, pipe, unless } from "@fxts/core";
import { Client } from "../client";
import { Failure, InternalError, Result, pick } from "@APP/utils";
import { HttpStatus } from "@nestjs/common";
import { IResult } from "@APP/api/types";
import { IToken } from "@APP/providers/authentication/interface";
import { HSProvider } from "../hs_provider";
import { REAgent } from "../re_agent";

export namespace Service {
    export const isVerified = <
        T extends IClient.IPrivate | IREAgent.IPrivate | IHSProvider.IPrivate,
    >(
        user: T,
    ): boolean => {
        switch (user.type) {
            case "client":
                return negate(isNull)(user.phone);
            case "real estate agent":
                return user.is_verified;
            case "home service provider":
                return user.is_verified;
        }
    };

    export const authorize =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            access_token: string,
        ): Promise<
            IResult<
                IClient.IPrivate | IREAgent.IPrivate | IHSProvider.IPrivate,
                Failure<IUser.FailureCode.Authorize> | InternalError
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
                            ({
                                client: Client.Service.getPrivate(tx),
                                "real estate agent":
                                    REAgent.Service.getPrivate(tx),
                                "home service provider":
                                    HSProvider.Service.getPrivate(tx),
                            })[payload.user_type](payload.user_id),

                        unless(
                            Result.Ok.is<
                                | IClient.IPrivate
                                | IREAgent.IPrivate
                                | IHSProvider.IPrivate,
                                | Failure<IUser.FailureCode.GetPrivate>
                                | InternalError
                            >,
                            Result.Error.lift((error) =>
                                error.name === "InternalError"
                                    ? error
                                    : Failure.create<IUser.FailureCode.Authorize>(
                                          {
                                              cause: "USER_UNVERIFIED",
                                              message:
                                                  "승인되지 않은 사용자입니다.",
                                              statusCode: HttpStatus.FORBIDDEN,
                                          },
                                      ),
                            ),
                        ),
                    ),
                ),

                unless(
                    Result.Error.is<
                        | IClient.IPrivate
                        | IREAgent.IPrivate
                        | IHSProvider.IPrivate,
                        Failure<IUser.FailureCode.Authorize> | InternalError
                    >,
                    (ok) =>
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
        <T>({
            user_type,
            getPrivate,
        }: {
            user_type: IUser.Type;
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
