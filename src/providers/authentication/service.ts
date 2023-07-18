import { OauthAccountModel, Prisma } from "@PRISMA";
import { identity, isNull, isString, negate, pipe, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { randomUUID } from "crypto";
import { IAuthentication } from "@APP/api/structures/IAuthentication";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { IUser } from "@APP/api/structures/user/IUser";
import { IResult } from "@APP/api/types";
import { Oauth } from "@APP/externals/oauth";
import { prisma } from "@APP/infrastructure/DB";
import {
    DateMapper,
    Failure,
    InternalError,
    Result,
    isDeleted,
    isUnDeleted,
    pick,
} from "@APP/utils";
import { Terms } from "../terms";
import { BIZUser } from "../user/biz_user";
import { Client } from "../user/client";
import { HSProvider } from "../user/hs_provider";
import { REAgent } from "../user/re_agent";
import { IToken } from "./interface";
import { Token } from "./token";

export namespace Service {
    const idMapper: Record<IUser.Type, "client" | "biz_user"> = {
        client: "client",
        "real estate agent": "biz_user",
        "home service provider": "biz_user",
    };

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
                                  Failure.create<IAuthentication.FailureCode.SignIn>(
                                      {
                                          cause: "ACCOUNT_NOT_FOUND",
                                          message: "존재하지 않는 계정입니다.",
                                          statusCode: HttpStatus.NOT_FOUND,
                                      },
                                  ),
                              )
                            : isDeleted(model)
                            ? Result.Error.map(
                                  Failure.create<IAuthentication.FailureCode.SignIn>(
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
                                                Failure.create<IAuthentication.FailureCode.SignIn>(
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

    export const signUp = async (
        input: IAuthentication.ISignUp,
    ): Promise<
        IResult<
            IAuthentication.IResponse.ISignUp,
            Failure<IAuthentication.FailureCode.SignUp> | InternalError
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
                                  Failure.create<IAuthentication.FailureCode.SignUp>(
                                      {
                                          cause: "ACCOUNT_INACTIVE",
                                          message: "비활성화된 계정입니다.",
                                          statusCode: HttpStatus.FORBIDDEN,
                                      },
                                  ),
                              )
                            : Token.Account.generate({
                                  account_id: account.id,
                              }),
                ),
            ),

            Result.lift({
                ok: (account_token) => ({ account_token }),
                error: identity<
                    Failure<IAuthentication.FailureCode.SignUp> | InternalError
                >,
            }),
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

    const verify = async ({
        default_value,
    }: {
        verification_id: string | null;
        default_value: string | null;
        tx?: Prisma.TransactionClient;
    }) => default_value;

    const createREAgent =
        (tx: Prisma.TransactionClient) =>
        async ({
            email,
            phone,
            createInput,
        }: {
            createInput: IREAgent.ICreateRequest;
            email: string | null;
            phone: string | null;
        }): Promise<
            IResult<string, Failure<"EXPERTISE_INVALID" | "PHONE_REQUIRED">>
        > => {
            const re_expertise = await tx.rEExpertiseModel.findFirst({
                where: { id: createInput.expertise_id },
            });

            if (isNull(re_expertise) || isDeleted(re_expertise))
                return Result.Error.map(
                    Failure.create({
                        cause: "EXPERTISE_INVALID",
                        message: "유효하지 않은 전문분야입니다.",
                        statusCode: HttpStatus.BAD_REQUEST,
                    }),
                );

            if (isNull(phone))
                return Result.Error.map(
                    Failure.create({
                        cause: "PHONE_REQUIRED",
                        message: "휴대전화 인증이 필요합니다.",
                        statusCode: HttpStatus.BAD_REQUEST,
                    }),
                );

            const re_agent = REAgent.Json.createData({
                ...createInput,
                email,
                phone,
            });
            await tx.rEAgentModel.create({ data: re_agent });
            await tx.bIZCertificationImageModel.createMany({
                data: BIZUser.Json.createCertificationImageListData(
                    re_agent.base.create.base.create.id,
                )(createInput.biz_certification_images),
            });
            return Result.Ok.map(re_agent.base.create.base.create.id);
        };

    const createHSProvider =
        (tx: Prisma.TransactionClient) =>
        async ({
            email,
            phone,
            createInput,
        }: {
            createInput: IHSProvider.ICreateRequest;
            email: string | null;
            phone: string | null;
        }): Promise<
            IResult<string, Failure<"EXPERTISE_INVALID" | "PHONE_REQUIRED">>
        > => {
            const hs_expertises = (
                await tx.hSSubExpertiseModel.findMany({
                    where: { id: { in: createInput.sub_expertise_ids } },
                })
            ).filter(isUnDeleted);

            if (hs_expertises.length === 0)
                return Result.Error.map(
                    Failure.create({
                        cause: "EXPERTISE_INVALID",
                        message: "전문분야가 최소 한 개 이상이어야 합니다.",
                        statusCode: HttpStatus.BAD_REQUEST,
                    }),
                );

            if (
                !hs_expertises.every(
                    // 모든 요소의 상위 전문 분야가 같아야 한다.
                    (val, _, arr) =>
                        val.super_expertise_id === arr[0]?.super_expertise_id,
                )
            )
                return Result.Error.map(
                    Failure.create({
                        cause: "EXPERTISE_INVALID",
                        message:
                            "선택된 모든 하위 전문분야의 상위 분야는 같아야 합니다.",
                        statusCode: HttpStatus.BAD_REQUEST,
                    }),
                );

            if (isNull(phone))
                return Result.Error.map(
                    Failure.create({
                        cause: "PHONE_REQUIRED",
                        message: "휴대전화 인증이 필요합니다.",
                        statusCode: HttpStatus.BAD_REQUEST,
                    }),
                );

            const hs_provider = HSProvider.Json.createData({
                ...createInput,
                sub_expertise_ids: hs_expertises.map(pick("id")),
                email,
                phone,
            });
            await tx.hSProviderModel.create({ data: hs_provider });
            await tx.bIZCertificationImageModel.createMany({
                data: BIZUser.Json.createCertificationImageListData(
                    hs_provider.base.create.base.create.id,
                )(createInput.biz_certification_images),
            });
            return Result.Ok.map(hs_provider.base.create.base.create.id);
        };

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

            const email = await verify({
                verification_id: input.email_verification_id,
                default_value: account.email,
                tx,
            });
            const phone = await verify({
                verification_id: input.phone_verification_id,
                default_value: account.phone,
                tx,
            });

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
                            Failure.create<IAuthentication.FailureCode.CreateUser>(
                                {
                                    cause: "USER_ALREADY_EXIST",
                                    message:
                                        "이미 연동된 사용자 정보가 있습니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            ),
                        );

                    const client = Client.Json.createData({
                        ...input,
                        email,
                        phone,
                    });
                    await tx.clientModel.create({ data: client });

                    await Terms.Service.agree(tx)({
                        user_id: client.base.create.id,
                        agreed_terms_ids: agreement_ids,
                    });
                    await connect({ client_id: client.base.create.id });
                    return Response(client.base.create.id);
                case "real estate agent":
                    if (negate(isNull)(account.biz_user_id))
                        return Result.Error.map(
                            Failure.create<IAuthentication.FailureCode.CreateUser>(
                                {
                                    cause: "USER_ALREADY_EXIST",
                                    message:
                                        "이미 연동된 사용자 정보가 있습니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            ),
                        );

                    const re_agent = await createREAgent(tx)({
                        createInput: input,
                        email,
                        phone,
                    });
                    if (Result.Error.is(re_agent)) return re_agent;
                    const re_agent_id = Result.Ok.flatten(re_agent);

                    await Terms.Service.agree(tx)({
                        user_id: re_agent_id,
                        agreed_terms_ids: agreement_ids,
                    });
                    await connect({ biz_user_id: re_agent_id });
                    return Response(re_agent_id);
                case "home service provider":
                    if (negate(isNull)(account.biz_user_id))
                        return Result.Error.map(
                            Failure.create<IAuthentication.FailureCode.CreateUser>(
                                {
                                    cause: "USER_ALREADY_EXIST",
                                    message:
                                        "이미 연동된 사용자 정보가 있습니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            ),
                        );

                    const hs_provider = await createHSProvider(tx)({
                        email,
                        phone,
                        createInput: input,
                    });
                    if (Result.Error.is(hs_provider)) return hs_provider;
                    const hs_provider_id = Result.Ok.flatten(hs_provider);
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
        > =>
            pipe(
                refresh_token,

                verifyToken(Token.Refresh.verify),

                unless(Result.Error.is, (ok) =>
                    pipe(
                        ok,

                        Result.Ok.flatten,

                        async (payload) => {
                            switch (payload.user_type) {
                                case "client":
                                    const client =
                                        await tx.clientModel.findFirst({
                                            where: { id: payload.user_id },
                                            include: { base: true },
                                        });
                                    if (isNull(client))
                                        return Result.Error.map(
                                            Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                                {
                                                    cause: "USER_NOT_FOUND",
                                                    message:
                                                        "사용자 정보가 존재하지 않습니다.",
                                                    statusCode:
                                                        HttpStatus.FORBIDDEN,
                                                },
                                            ),
                                        );

                                    if (isDeleted(client.base))
                                        return Result.Error.map(
                                            Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                                {
                                                    cause: "USER_INACTIVE",
                                                    message:
                                                        "비활성화된 사용자입니다.",
                                                    statusCode:
                                                        HttpStatus.FORBIDDEN,
                                                },
                                            ),
                                        );
                                    return Result.Ok.map(payload);
                                case "real estate agent":
                                    const re_agent =
                                        await tx.rEAgentModel.findFirst({
                                            where: { id: payload.user_id },
                                            select: {
                                                base: {
                                                    select: { base: true },
                                                },
                                            },
                                        });
                                    if (isNull(re_agent))
                                        return Result.Error.map(
                                            Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                                {
                                                    cause: "USER_NOT_FOUND",
                                                    message:
                                                        "사용자 정보가 존재하지 않습니다.",
                                                    statusCode:
                                                        HttpStatus.FORBIDDEN,
                                                },
                                            ),
                                        );
                                    if (isDeleted(re_agent.base.base))
                                        return Result.Error.map(
                                            Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                                {
                                                    cause: "USER_INACTIVE",
                                                    message:
                                                        "비활성화된 사용자입니다.",
                                                    statusCode:
                                                        HttpStatus.FORBIDDEN,
                                                },
                                            ),
                                        );

                                    return Result.Ok.map(payload);
                                case "home service provider":
                                    const hs_provider =
                                        await tx.hSProviderModel.findFirst({
                                            where: { id: payload.user_id },
                                            select: {
                                                base: {
                                                    select: { base: true },
                                                },
                                            },
                                        });
                                    if (isNull(hs_provider))
                                        return Result.Error.map(
                                            Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                                {
                                                    cause: "USER_NOT_FOUND",
                                                    message:
                                                        "사용자 정보가 존재하지 않습니다.",
                                                    statusCode:
                                                        HttpStatus.FORBIDDEN,
                                                },
                                            ),
                                        );
                                    if (isDeleted(hs_provider.base.base))
                                        return Result.Error.map(
                                            Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                                {
                                                    cause: "USER_INACTIVE",
                                                    message:
                                                        "비활성화된 사용자입니다.",
                                                    statusCode:
                                                        HttpStatus.FORBIDDEN,
                                                },
                                            ),
                                        );
                                    return Result.Ok.map(payload);
                            }
                        },

                        unless(Result.Error.is, (input) =>
                            pipe(
                                input,

                                Result.Ok.flatten,

                                Token.Access.generate,

                                (result) =>
                                    Result.Error.is(result)
                                        ? result
                                        : Result.Ok.lift(
                                              (
                                                  access_token: IAuthentication.IToken,
                                              ) => ({
                                                  access_token,
                                              }),
                                          )(result),
                            ),
                        ),
                    ),
                ),
            );
}
