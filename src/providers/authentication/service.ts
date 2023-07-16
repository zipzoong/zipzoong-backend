import {
    isNull,
    isString,
    negate,
    pipe,
    tap,
    throwError,
    unless,
} from "@fxts/core";
import { IAuthentication } from "@APP/api/structures/IAuthentication";
import { Oauth } from "@APP/externals/oauth";
import {
    DateMapper,
    Failure,
    Result,
    isDeleted,
    isUnDeleted,
    pick,
} from "@APP/utils";
import { HttpStatus } from "@nestjs/common";
import { prisma } from "@APP/infrastructure/DB";
import { IUser } from "@APP/api/structures/user/IUser";
import { Token } from "./token";
import { randomUUID } from "crypto";
import { OauthAccountModel, Prisma } from "@PRISMA";
import { Client } from "../user/client";
import { REAgent } from "../user/re_agent";
import { HSProvider } from "../user/hs_provider";
import { BIZUser } from "../user/biz_user";
import { Terms } from "../terms";
import { IClient } from "@APP/api/structures/user/IClient";
import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { IResult } from "@APP/api/types";
import { IToken } from "./interface";

export namespace Service {
    const idMapper: Record<IUser.Type, "client_id" | "biz_user_id"> = {
        client: "client_id",
        "real estate agent": "biz_user_id",
        "home service provider": "biz_user_id",
    };
    /**
     * @throw 403 TOKEN_EXPIRED
     * @throw 403 TOKEN_INVALID
     * @return token payload
     */
    export const tokenVerify =
        <T extends IToken.IBase>(
            verify: (token: string) => IResult<T, Token.FailureCode>,
        ) =>
        (token: string) =>
            pipe(
                token,
                verify,
                unless(Result.Ok.is, (error) =>
                    pipe(
                        error,

                        Result.Error.flatten,

                        unless(
                            (
                                code,
                            ): code is Exclude<typeof code, "Token Expired"> =>
                                code === "Token Expired",
                            Failure.throwFailure<IAuthentication.FailureCode.TokenVerify>(
                                {
                                    cause: "TOKEN_EXPIRED",
                                    message: "토큰이 만료되었습니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            ),
                        ),

                        unless(
                            (
                                code,
                            ): code is Exclude<typeof code, "Token Invalid"> =>
                                code === "Token Invalid",
                            Failure.throwFailure<IAuthentication.FailureCode.TokenVerify>(
                                {
                                    cause: "TOKEN_INVALID",
                                    message: "유효하지 않은 토큰입니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            ),
                        ),

                        throwError(() => Error("토큰 검증 실패")),
                    ),
                ),
                Result.Ok.flatten,
            );

    /**
     * @throw 403 TOKEN_EXPIRED
     * @throw 403 TOKEN_INVALID
     * @throw 403 ACCOUNT_INACTIVE
     * @throw 404 ACCOUNT_NOT_FOUND
     */
    const getAccount =
        (tx: Prisma.TransactionClient = prisma) =>
        (account_token: string): Promise<OauthAccountModel> =>
            pipe(
                account_token,

                tokenVerify(Token.Account.verify),

                pick("account_id"),

                async (id) => tx.oauthAccountModel.findFirst({ where: { id } }),

                unless(
                    negate(isNull),
                    Failure.throwFailure<IAuthentication.FailureCode.AccountVerify>(
                        {
                            cause: "ACCOUNT_NOT_FOUND",
                            message: "존재하지 않는 계정입니다.",
                            statusCode: HttpStatus.NOT_FOUND,
                        },
                    ),
                ),

                unless(
                    isUnDeleted,
                    Failure.throwFailure<IAuthentication.FailureCode.AccountVerify>(
                        {
                            cause: "ACCOUNT_INACTIVE",
                            message: "비활성화된 계정입니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        },
                    ),
                ),
            );

    const SignInResponse =
        (user_type: IUser.Type) =>
        (user_id: string): IAuthentication.IResponse.ISignIn => {
            const access_token = Token.Access.generate({
                user_id,
                user_type,
            });
            const refresh_token = Token.Refresh.generate({
                user_id,
                user_type,
            });

            if (Result.Error.is(access_token) || Result.Error.is(refresh_token))
                throw Error("액세스 토큰 발급 실패");

            return {
                access_token: Result.Ok.flatten(access_token),
                refresh_token: Result.Ok.flatten(refresh_token),
            };
        };

    /**
     * @throw 401 OAUTH_FAIL
     * @throw 403 ACCOUNT_NOT_FOUND
     * @throw 403 ACCOUNT_INACTIVE
     * @throw 403 USER_NOT_FOUND
     */
    export const signIn = (
        input: IAuthentication.ISignIn,
    ): Promise<IAuthentication.IResponse.ISignIn> =>
        pipe(
            input.code,

            Oauth[input.oauth],

            unless(
                Result.Ok.is,
                Failure.throwFailure<IAuthentication.FailureCode.SignIn>({
                    cause: "OAUTH_FAIL",
                    message: `${input.oauth} 인증에 실패했습니다.`,
                    statusCode: HttpStatus.UNAUTHORIZED,
                }),
            ),

            Result.Ok.flatten,

            async ({ oauth_sub }) =>
                prisma.oauthAccountModel.findFirst({
                    where: { oauth_sub, oauth_type: input.oauth },
                }),

            unless(
                negate(isNull),
                Failure.throwFailure<IAuthentication.FailureCode.SignIn>({
                    cause: "ACCOUNT_NOT_FOUND",
                    message:
                        "가입하지 않은 계정입니다. 회원가입을 진행해주세요.",
                    statusCode: HttpStatus.FORBIDDEN,
                }),
            ),

            unless(
                isUnDeleted,
                Failure.throwFailure<IAuthentication.FailureCode.SignIn>({
                    cause: "ACCOUNT_INACTIVE",
                    message: "비활성화된 계정입니다.",
                    statusCode: HttpStatus.FORBIDDEN,
                }),
            ),

            pick(idMapper[input.user]),

            unless(
                negate(isNull),
                Failure.throwFailure<IAuthentication.FailureCode.SignIn>({
                    cause: "USER_NOT_FOUND",
                    message: "사용자 정보가 존재하지 않습니다.",
                    statusCode: HttpStatus.FORBIDDEN,
                }),
            ),

            SignInResponse(input.user),
        );

    /**
     * @throw 401 OAUTH_FAIL
     * @throw 403 ACCOUNT_INACTIVE
     */
    export const signUp = (
        input: IAuthentication.ISignUp,
    ): Promise<IAuthentication.IResponse.ISignUp> =>
        pipe(
            input.code,

            Oauth[input.oauth],

            unless(
                Result.Ok.is,
                Failure.throwFailure<IAuthentication.FailureCode.SignUp>({
                    cause: "OAUTH_FAIL",
                    message: `${input.oauth} 인증에 실패했습니다.`,
                    statusCode: HttpStatus.UNAUTHORIZED,
                }),
            ),

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
                        address_zone_code: profile.address?.zone_code ?? null,
                        address_road: profile.address?.road ?? null,
                        address_detail: profile.address?.detail ?? null,
                        address_extra: profile.address?.extra ?? null,
                        created_at: DateMapper.toISO(),
                        updated_at: DateMapper.toISO(),
                        is_deleted: false,
                        deleted_at: null,
                    },
                }),

            unless(
                isUnDeleted,
                Failure.throwFailure<IAuthentication.FailureCode.SignUp>({
                    cause: "ACCOUNT_INACTIVE",
                    message: "비활성화된 계정입니다.",
                    statusCode: HttpStatus.FORBIDDEN,
                }),
            ),

            (model) => Token.Account.generate({ account_id: model.id }),

            unless(
                Result.Ok.is,
                throwError(() => Error("계정 토큰 발급 실패")),
            ),

            Result.Ok.flatten,

            (account_token) => ({
                account_token,
            }),
        );

    /**
     * @throw 403 TOKEN_EXPIRED
     * @throw 403 TOKEN_INVALID
     * @throw 403 ACCOUNT_INACTIVE
     * @throw 404 ACCOUNT_NOT_FOUND
     */
    export const getProfile = (
        account_token: string,
    ): Promise<IAuthentication.IAccountProfile> =>
        pipe(
            account_token,

            getAccount(),

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
                    isString(address_road) && isString(address_zone_code)
                        ? {
                              road: address_road,
                              zone_code: address_zone_code,
                              detail: address_detail,
                              extra: address_extra,
                          }
                        : null,
            }),
        );

    const verify = async ({
        default_value,
    }: {
        verification_id: string | null;
        default_value: string | null;
        tx?: Prisma.TransactionClient;
    }) => default_value;

    const createClient =
        (tx: Prisma.TransactionClient) =>
        async ({
            createInput,
            email,
            phone,
        }: {
            createInput: IClient.ICreateRequest;
            email: string | null;
            phone: string | null;
        }): Promise<string> => {
            const client = Client.Json.createData({
                ...createInput,
                email,
                phone,
            });
            await tx.clientModel.create({ data: client });
            return client.base.create.id;
        };

    /**
     * @throw 400 EXPERTISE_INVALID
     * @throw 400 PHONE_REQUIRED
     */
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
        }): Promise<string> => {
            const re_expertise = await tx.rEExpertiseModel.findFirst({
                where: { id: createInput.expertise_id },
            });

            if (isNull(re_expertise) || isDeleted(re_expertise))
                throw Failure.create<IAuthentication.FailureCode.CreateUser>({
                    cause: "EXPERTISE_INVALID",
                    message: "유효하지 않은 전문분야입니다.",
                    statusCode: HttpStatus.BAD_REQUEST,
                });

            if (isNull(phone))
                throw Failure.create<IAuthentication.FailureCode.CreateUser>({
                    cause: "PHONE_REQUIRED",
                    message: "휴대전화 인증이 필요합니다.",
                    statusCode: HttpStatus.BAD_REQUEST,
                });

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
            return re_agent.base.create.base.create.id;
        };

    /**
     * @throw 400 EXPERTISE_INVALID
     * @throw 400 PHONE_REQUIRED
     */
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
        }): Promise<string> => {
            const hs_expertises = (
                await tx.hSSubExpertiseModel.findMany({
                    where: { id: { in: createInput.sub_expertise_ids } },
                })
            ).filter(isUnDeleted);

            if (hs_expertises.length === 0)
                throw Failure.create<IAuthentication.FailureCode.CreateUser>({
                    cause: "EXPERTISE_INVALID",
                    message: "전문분야가 최소 한 개 이상이어야 합니다.",
                    statusCode: HttpStatus.BAD_REQUEST,
                });

            if (
                !hs_expertises.every(
                    // 모든 요소의 상위 전문 분야가 같아야 한다.
                    (val, _, arr) =>
                        val.super_expertise_id === arr[0]?.super_expertise_id,
                )
            )
                throw Failure.create<IAuthentication.FailureCode.CreateUser>({
                    cause: "EXPERTISE_INVALID",
                    message:
                        "선택된 모든 하위 전문분야의 상위 분야는 같아야 합니다.",
                    statusCode: HttpStatus.BAD_REQUEST,
                });

            if (isNull(phone))
                throw Failure.create<IAuthentication.FailureCode.CreateUser>({
                    cause: "PHONE_REQUIRED",
                    message: "휴대전화 인증이 필요합니다.",
                    statusCode: HttpStatus.BAD_REQUEST,
                });

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
            return hs_provider.base.create.base.create.id;
        };

    /**
     * @throw 400 EXPERTISE_INVALID
     * @throw 400 TERMS_INSUFFICIENT
     * @throw 400 TERMS_INVALID
     * @throw 400 PHONE_REQUIRED
     * @throw 403 USER_ALREADY_EXIST
     * @throw 403 TOKEN_EXPIRED
     * @throw 403 TOKEN_INVALID
     * @throw 403 ACCOUNT_INACTIVE
     * @throw 404 ACCOUNT_NOT_FOUND
     */
    export const createUser = ({
        account_token,
        input,
    }: {
        account_token: string;
        input: IUser.ICreateRequest;
    }): Promise<IAuthentication.IResponse.ISignIn> =>
        prisma.$transaction(async (tx) => {
            const account = await getAccount(tx)(account_token);
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
            if (Result.Error.is(agreement_result)) {
                if (
                    Result.Error.flatten(agreement_result) ===
                    "TERMS_INSUFFICIENT"
                ) {
                    throw Failure.create<IAuthentication.FailureCode.CreateUser>(
                        {
                            cause: "TERMS_INSUFFICIENT",
                            message: "필수 약관에 동의하지 않았습니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        },
                    );
                } else {
                    throw Failure.create<IAuthentication.FailureCode.CreateUser>(
                        {
                            cause: "TERMS_INVALID",
                            message: "유효하지 않은 약관을 포함하고 있습니다.",
                            statusCode: HttpStatus.BAD_REQUEST,
                        },
                    );
                }
            }
            const agreement_ids = Result.Ok.flatten(agreement_result);

            switch (input.type) {
                case "client":
                    if (negate(isNull)(account.client_id)) {
                        throw Failure.create<IAuthentication.FailureCode.CreateUser>(
                            {
                                cause: "USER_ALREADY_EXIST",
                                message: "이미 연동된 사용자 정보가 있습니다.",
                                statusCode: HttpStatus.FORBIDDEN,
                            },
                        );
                    }
                    const client_id = await createClient(tx)({
                        createInput: input,
                        email,
                        phone,
                    });
                    await Terms.Service.agree({
                        tx,
                        user_id: client_id,
                        agreed_terms_ids: agreement_ids,
                    });
                    await connect({ client_id });
                    return Response(client_id);
                case "real estate agent":
                    if (negate(isNull)(account.biz_user_id)) {
                        throw Failure.create<IAuthentication.FailureCode.CreateUser>(
                            {
                                cause: "USER_ALREADY_EXIST",
                                message: "이미 연동된 사용자 정보가 있습니다.",
                                statusCode: HttpStatus.FORBIDDEN,
                            },
                        );
                    }
                    const re_agent_id = await createREAgent(tx)({
                        createInput: input,
                        email,
                        phone,
                    });
                    await Terms.Service.agree({
                        tx,
                        user_id: re_agent_id,
                        agreed_terms_ids: agreement_ids,
                    });
                    await connect({ biz_user_id: re_agent_id });
                    return Response(re_agent_id);
                case "home service provider":
                    if (negate(isNull)(account.biz_user_id)) {
                        throw Failure.create<IAuthentication.FailureCode.CreateUser>(
                            {
                                cause: "USER_ALREADY_EXIST",
                                message: "이미 연동된 사용자 정보가 있습니다.",
                                statusCode: HttpStatus.FORBIDDEN,
                            },
                        );
                    }
                    const hs_provider_id = await createHSProvider(tx)({
                        email,
                        phone,
                        createInput: input,
                    });
                    await Terms.Service.agree({
                        tx,
                        user_id: hs_provider_id,
                        agreed_terms_ids: agreement_ids,
                    });
                    await connect({
                        biz_user_id: hs_provider_id,
                    });
                    return Response(hs_provider_id);
            }
        });

    /**
     * @throw 403 TOKEN_EXPIRED
     * @throw 403 TOKEN_INVALID
     * @throw 403 USER_NOT_FOUND
     * @throw 403 USER_INACTIVE
     */
    export const refreshAccessToken = (
        refresh_token: string,
    ): Promise<IAuthentication.IResponse.IRefresh> =>
        pipe(
            refresh_token,

            tokenVerify(Token.Refresh.verify),

            tap(async (payload) => {
                switch (payload.user_type) {
                    case "client":
                        const client = await prisma.clientModel.findFirst({
                            where: { id: payload.user_id },
                            include: { base: true },
                        });
                        if (isNull(client))
                            throw Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                {
                                    cause: "USER_NOT_FOUND",
                                    message: "사용자 정보가 존재하지 않습니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            );

                        if (isDeleted(client.base))
                            throw Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                {
                                    cause: "USER_INACTIVE",
                                    message: "비활성화된 사용자입니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            );
                        break;
                    case "real estate agent":
                        const re_agent = await prisma.rEAgentModel.findFirst({
                            where: { id: payload.user_id },
                            select: { base: { select: { base: true } } },
                        });
                        if (isNull(re_agent))
                            throw Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                {
                                    cause: "USER_NOT_FOUND",
                                    message: "사용자 정보가 존재하지 않습니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            );
                        if (isDeleted(re_agent.base.base))
                            throw Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                {
                                    cause: "USER_INACTIVE",
                                    message: "비활성화된 사용자입니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            );

                        break;
                    case "home service provider":
                        const hs_provider =
                            await prisma.hSProviderModel.findFirst({
                                where: { id: payload.user_id },
                                select: { base: { select: { base: true } } },
                            });
                        if (isNull(hs_provider))
                            throw Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                {
                                    cause: "USER_NOT_FOUND",
                                    message: "사용자 정보가 존재하지 않습니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            );
                        if (isDeleted(hs_provider.base.base))
                            throw Failure.create<IAuthentication.FailureCode.RefreshAccessToken>(
                                {
                                    cause: "USER_INACTIVE",
                                    message: "비활성화된 사용자입니다.",
                                    statusCode: HttpStatus.FORBIDDEN,
                                },
                            );
                        break;
                }
            }),

            Token.Access.generate,

            unless(
                Result.Ok.is,
                throwError(() => Error("액세스 토큰 발급 실패")),
            ),

            Result.Ok.flatten,

            (access_token) => ({ access_token }),
        );
}
