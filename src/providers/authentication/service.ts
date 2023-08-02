import { OauthAccountModel, Prisma } from "@PRISMA";
import { isNull, isString, negate, pipe, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { randomUUID } from "crypto";
import { IAuthentication } from "@APP/api/structures/IAuthentication";
import { IVerification } from "@APP/api/structures/IVerification";
import { IUser } from "@APP/api/structures/user/IUser";
import { IResult } from "@APP/api/types";
import { Oauth } from "@APP/externals/oauth";
import { Kakao } from "@APP/externals/oauth/kakao/sdk";
import { prisma } from "@APP/infrastructure/DB";
import {
    DateMapper,
    Failure,
    InternalError,
    Result,
    isDeleted,
    pick,
} from "@APP/utils";
import { Terms } from "../terms";
import { BIZUser } from "../user/biz_user";
import { Client } from "../user/client";
import { HSProvider } from "../user/hs_provider";
import { REAgent } from "../user/re_agent";
import { Verification } from "../verification";
import { IToken } from "./interface";
import { Token } from "./token";

export namespace Service {
    const idMapper: Record<IUser.Type, "client" | "biz_user"> = {
        client: "client",
        "real estate agent": "biz_user",
        "home service provider": "biz_user",
    };

    export const getKakaoLoginUrl = () => Kakao.LoginUri;

    export const verifyToken =
        <T extends IToken.IBase>(
            verify: (
                token: string,
            ) => IResult<
                T,
                IAuthentication.FailureCode.TokenVerify | InternalError
            >,
        ) =>
        (
            token: string,
        ): IResult<
            T,
            Failure<IAuthentication.FailureCode.TokenVerify> | InternalError
        > =>
            pipe(
                token,

                verify,

                unless(
                    Result.Ok.is,
                    Result.Error.lift((cause) =>
                        cause === "TOKEN_EXPIRED"
                            ? Failure.create({
                                  cause,
                                  message: "토큰이 만료되었습니다.",
                                  statusCode: HttpStatus.FORBIDDEN,
                              })
                            : cause === "TOKEN_INVALID"
                            ? Failure.create({
                                  cause: "TOKEN_INVALID",
                                  message: "유효하지 않은 토큰입니다.",
                                  statusCode: HttpStatus.FORBIDDEN,
                              })
                            : cause,
                    ),
                ),
            );

    const getAccount =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            account_token: string,
        ): Promise<
            IResult<
                OauthAccountModel,
                | Failure<
                      | IAuthentication.FailureCode.TokenVerify
                      | IAuthentication.FailureCode.AccountVerify
                  >
                | InternalError
            >
        > =>
            pipe(
                account_token,

                verifyToken(Token.Account.verify),

                unless(Result.Error.is, (payload) =>
                    pipe(
                        payload,

                        Result.Ok.flatten,

                        pick("account_id"),

                        async (id) =>
                            tx.oauthAccountModel.findFirst({ where: { id } }),

                        (model) =>
                            isNull(model)
                                ? Result.Error.map(
                                      Failure.create<IAuthentication.FailureCode.AccountVerify>(
                                          {
                                              cause: "ACCOUNT_NOT_FOUND",
                                              message:
                                                  "존재하지 않는 계정입니다.",
                                              statusCode: HttpStatus.NOT_FOUND,
                                          },
                                      ),
                                  )
                                : isDeleted(model)
                                ? Result.Error.map(
                                      Failure.create<IAuthentication.FailureCode.AccountVerify>(
                                          {
                                              cause: "ACCOUNT_INACTIVE",
                                              message: "비활성화된 계정입니다.",
                                              statusCode: HttpStatus.FORBIDDEN,
                                          },
                                      ),
                                  )
                                : Result.Ok.map(model),
                    ),
                ),
            );

    const SignInResponse =
        (user_type: IUser.Type) =>
        (
            user_id: string,
        ): IResult<IAuthentication.IResponse.ISignIn, InternalError> => {
            const access_token = Token.Access.generate({
                user_id,
                user_type,
            });
            const refresh_token = Token.Refresh.generate({
                user_id,
                user_type,
            });

            if (Result.Error.is(access_token)) return access_token;
            if (Result.Error.is(refresh_token)) return refresh_token;

            return Result.Ok.map({
                access_token: Result.Ok.flatten(access_token),
                refresh_token: Result.Ok.flatten(refresh_token),
            });
        };

    export const signIn = async (
        input: IAuthentication.ISignIn,
    ): Promise<
        IResult<
            IAuthentication.IResponse.ISignIn,
            Failure<IAuthentication.FailureCode.SignIn> | InternalError
        >
    > =>
        pipe(
            input.code,

            Oauth[input.oauth],

            unless(Result.Error.is, (ok) =>
                pipe(
                    ok,

                    Result.Ok.flatten,

                    pick("oauth_sub"),

                    async (oauth_sub) =>
                        prisma.oauthAccountModel.findFirst({
                            where: { oauth_sub, oauth_type: input.oauth },
                            include: {
                                client: {
                                    select: {
                                        id: true,
                                        base: {
                                            select: {
                                                is_deleted: true,
                                                deleted_at: true,
                                            },
                                        },
                                    },
                                },
                                biz_user: {
                                    select: {
                                        id: true,
                                        base: {
                                            select: {
                                                is_deleted: true,
                                                deleted_at: true,
                                            },
                                        },
                                    },
                                },
                            },
                        }),

                    (model) =>
                        isNull(model)
                            ? Result.Error.map(
                                  Failure.create<IAuthentication.FailureCode.AccountVerify>(
                                      {
                                          cause: "ACCOUNT_NOT_FOUND",
                                          message: "존재하지 않는 계정입니다.",
                                          statusCode: HttpStatus.NOT_FOUND,
                                      },
                                  ),
                              )
                            : isDeleted(model)
                            ? Result.Error.map(
                                  Failure.create<IAuthentication.FailureCode.AccountVerify>(
                                      {
                                          cause: "ACCOUNT_INACTIVE",
                                          message: "비활성화된 계정입니다.",
                                          statusCode: HttpStatus.FORBIDDEN,
                                      },
                                  ),
                              )
                            : pipe(
                                  model[idMapper[input.user]],

                                  (account) =>
                                      isNull(account)
                                          ? Result.Error.map(
                                                Failure.create<IUser.FailureCode.GetOne>(
                                                    {
                                                        cause: "USER_NOT_FOUND",
                                                        message:
                                                            "사용자 정보가 존재하지 않습니다.",
                                                        statusCode:
                                                            HttpStatus.FORBIDDEN,
                                                    },
                                                ),
                                            )
                                          : isDeleted(account.base)
                                          ? Result.Error.map(
                                                Failure.create<IAuthentication.FailureCode.SignIn>(
                                                    {
                                                        cause: "USER_INACTIVE",
                                                        message:
                                                            "비활성화된 사용자입니다.",
                                                        statusCode:
                                                            HttpStatus.FORBIDDEN,
                                                    },
                                                ),
                                            )
                                          : SignInResponse(input.user)(
                                                account.id,
                                            ),
                              ),
                ),
            ),
        );

    export const signUp = (
        input: IAuthentication.ISignUp,
    ): Promise<
        IResult<
            IAuthentication.IResponse.ISignUp,
            InternalError | Failure<IAuthentication.FailureCode.SignUp>
        >
    > =>
        pipe(
            input.code,

            Oauth[input.oauth],

            unless(Result.Error.is, (ok) =>
                pipe(
                    ok,

                    Result.Ok.flatten,

                    async ({ oauth_sub, profile }) =>
                        (await prisma.oauthAccountModel.findFirst({
                            where: { oauth_sub, oauth_type: input.oauth },
                        })) ??
                        prisma.oauthAccountModel.create({
                            data: {
                                id: randomUUID(),
                                oauth_sub,
                                oauth_type: input.oauth,
                                name: profile.name,
                                email: profile.email,
                                phone: profile.phone,
                                profile_image_url: profile.profile_image_url,
                                birth: profile.birth,
                                gender: profile.gender,
                                address_zone_code:
                                    profile.address?.zone_code ?? null,
                                address_road: profile.address?.road ?? null,
                                address_detail: profile.address?.detail ?? null,
                                address_extra: profile.address?.extra ?? null,
                                created_at: DateMapper.toISO(),
                                updated_at: DateMapper.toISO(),
                                is_deleted: false,
                                deleted_at: null,
                            },
                        }),

                    (account) =>
                        isDeleted(account)
                            ? Result.Error.map(
                                  Failure.create({
                                      cause: "ACCOUNT_INACTIVE",
                                      message: "비활성화된 계정입니다.",
                                      statusCode: HttpStatus.FORBIDDEN,
                                  }),
                              )
                            : Token.Account.generate({
                                  account_id: account.id,
                              }),
                ),
            ),

            unless(
                Result.Error.is<
                    IAuthentication.IToken,
                    InternalError | Failure<"ACCOUNT_INACTIVE">
                >,
                Result.Ok.lift((account_token) => ({ account_token })),
            ),
        );

    export const getProfile =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            account_token: string,
        ): Promise<
            IResult<
                IAuthentication.IAccountProfile,
                Failure<IAuthentication.FailureCode.GetProfile> | InternalError
            >
        > =>
            pipe(
                account_token,

                getAccount(tx),

                unless(
                    Result.Error.is,
                    Result.Ok.lift(
                        ({
                            name,
                            email,
                            phone,
                            profile_image_url,
                            birth,
                            gender,
                            address_zone_code,
                            address_road,
                            address_detail,
                            address_extra,
                        }) => ({
                            name,
                            email,
                            phone,
                            profile_image_url,
                            birth,
                            gender,
                            address:
                                isString(address_road) &&
                                isString(address_zone_code)
                                    ? {
                                          road: address_road,
                                          zone_code: address_zone_code,
                                          detail: address_detail,
                                          extra: address_extra,
                                      }
                                    : null,
                        }),
                    ),
                ),
            );

    export const isVerifiedPhone =
        (tx: Prisma.TransactionClient = prisma) =>
        (account: OauthAccountModel) =>
        async (
            input: IVerification.IVerifiedPhone,
        ): Promise<
            IResult<
                string,
                Failure<
                    | IVerification.FailureCode.IsVerifiedPhone
                    | "VERIFICATION_INVALID"
                >
            >
        > =>
            input.type === "verification"
                ? Verification.Service.assertVerifiedPhone(tx)(input)
                : account.phone === input.phone
                ? Result.Ok.map(input.phone)
                : Result.Error.map(
                      Failure.create({
                          cause: "VERIFICATION_INVALID",
                          message:
                              "전화번호가 계정 연락처와 일치하지 않습니다.",
                          statusCode: HttpStatus.FORBIDDEN,
                      }),
                  );

    export const createUser =
        (tx: Prisma.TransactionClient = prisma) =>
        (account_token: string) =>
        async (
            input: IUser.ICreateRequest,
        ): Promise<
            IResult<
                IAuthentication.IResponse.ISignIn,
                InternalError | Failure<IAuthentication.FailureCode.CreateUser>
            >
        > => {
            const account_result = await getAccount(tx)(account_token);
            if (Result.Error.is(account_result)) return account_result;
            const account = Result.Ok.flatten(account_result);

            const connect = async (
                input:
                    | Pick<OauthAccountModel, "biz_user_id">
                    | Pick<OauthAccountModel, "client_id">,
            ) =>
                tx.oauthAccountModel.update({
                    where: { id: account.id },
                    data: {
                        ...input,
                        updated_at: DateMapper.toISO(),
                    },
                });

            const Response = SignInResponse(input.type);
            // 약관 유효성 검사
            const agreement_result = await Terms.Service.verify(tx)(input.type)(
                input.agreed_terms_ids,
            );
            if (Result.Error.is(agreement_result)) return agreement_result;

            const agreement_ids = Result.Ok.flatten(agreement_result);

            switch (input.type) {
                case "client":
                    if (negate(isNull)(account.client_id))
                        return Result.Error.map(
                            Failure.create({
                                cause: "USER_ALREADY_EXIST",
                                message: "이미 연동된 사용자 정보가 있습니다.",
                                statusCode: HttpStatus.FORBIDDEN,
                            }),
                        );

                    const client_phone_result = isNull(input.phone)
                        ? Result.Ok.map(null)
                        : await isVerifiedPhone(tx)(account)(input.phone);

                    if (Result.Error.is(client_phone_result))
                        return client_phone_result;

                    const client_id = await Client.Service.create(tx)({
                        ...input,
                        email: null,
                        phone: Result.Ok.flatten(client_phone_result),
                    });

                    await Terms.Service.agree(tx)({
                        user_id: client_id,
                        agreed_terms_ids: agreement_ids,
                    });
                    await connect({ client_id });
                    return Response(client_id);
                case "real estate agent":
                    if (negate(isNull)(account.biz_user_id))
                        return Result.Error.map(
                            Failure.create({
                                cause: "USER_ALREADY_EXIST",
                                message: "이미 연동된 사용자 정보가 있습니다.",
                                statusCode: HttpStatus.FORBIDDEN,
                            }),
                        );
                    const agent_phone_result = await isVerifiedPhone(tx)(
                        account,
                    )(input.phone);
                    if (Result.Error.is(agent_phone_result))
                        return agent_phone_result;
                    const re_agent_result = await REAgent.Service.create(tx)({
                        ...input,
                        email: null,
                        phone: Result.Ok.flatten(agent_phone_result),
                    });
                    if (Result.Error.is(re_agent_result))
                        return re_agent_result;
                    const re_agent_id = Result.Ok.flatten(re_agent_result);
                    await BIZUser.Service.createCertificationList(tx)({
                        biz_user_id: re_agent_id,
                        images: input.biz_certification_images,
                    });
                    await Terms.Service.agree(tx)({
                        user_id: re_agent_id,
                        agreed_terms_ids: agreement_ids,
                    });
                    await connect({ biz_user_id: re_agent_id });
                    return Response(re_agent_id);
                case "home service provider":
                    if (negate(isNull)(account.biz_user_id))
                        return Result.Error.map(
                            Failure.create({
                                cause: "USER_ALREADY_EXIST",
                                message: "이미 연동된 사용자 정보가 있습니다.",
                                statusCode: HttpStatus.FORBIDDEN,
                            }),
                        );
                    const provider_phone_result = await isVerifiedPhone(tx)(
                        account,
                    )(input.phone);
                    if (Result.Error.is(provider_phone_result))
                        return provider_phone_result;
                    const hs_provider_result = await HSProvider.Service.create(
                        tx,
                    )({
                        ...input,
                        email: null,
                        phone: Result.Ok.flatten(provider_phone_result),
                    });
                    if (Result.Error.is(hs_provider_result))
                        return hs_provider_result;
                    const hs_provider_id =
                        Result.Ok.flatten(hs_provider_result);
                    await BIZUser.Service.createCertificationList(tx)({
                        biz_user_id: hs_provider_id,
                        images: input.biz_certification_images,
                    });
                    await Terms.Service.agree(tx)({
                        user_id: hs_provider_id,
                        agreed_terms_ids: agreement_ids,
                    });
                    await connect({
                        biz_user_id: hs_provider_id,
                    });
                    return Response(hs_provider_id);
            }
        };

    export const refreshAccessToken =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            refresh_token: string,
        ): Promise<
            IResult<
                IAuthentication.IResponse.IRefresh,
                | Failure<IAuthentication.FailureCode.RefreshAccessToken>
                | InternalError
            >
        > => {
            const permission = verifyToken(Token.Refresh.verify)(refresh_token);
            if (Result.Error.is(permission)) return permission;
            return pipe(
                permission,

                Result.Ok.flatten,

                (payload) =>
                    ({
                        client: Client.Service.getOne,
                        "real estate agent": REAgent.Service.getOne,
                        "home service provider": HSProvider.Service.getOne,
                    }[payload.user_type](tx)(payload.user_id)),

                unless(
                    Result.Ok.is<
                        IUser,
                        InternalError | Failure<IUser.FailureCode.GetOne>
                    >,
                    Result.Error.lift((error) =>
                        error.name === "InternalError"
                            ? error
                            : Failure.create({
                                  cause: "USER_INVALID",
                                  message: "유효하지 않은 사용자입니다.",
                                  statusCode: HttpStatus.FORBIDDEN,
                              }),
                    ),
                ),

                unless(Result.Error.is, (input) =>
                    pipe(
                        input,

                        Result.Ok.flatten,

                        ({ type, id }) =>
                            Token.Access.generate({
                                user_id: id,
                                user_type: type,
                            }),
                    ),
                ),

                unless(
                    Result.Error.is,
                    Result.Ok.lift((access_token) => ({
                        access_token,
                    })),
                ),
            );
        };
}
