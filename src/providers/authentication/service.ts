import { isNull, isString, negate, pipe } from "@fxts/core";
import { IAuthentication } from "@APP/api/structures/IAuthentication";
import { Oauth } from "@APP/externals/oauth";
import {
    DateMapper,
    Failure,
    Result,
    isActive,
    pick,
    skip,
    throwError,
} from "@APP/utils";
import { HttpStatus } from "@nestjs/common";
import { prisma } from "@APP/infrastructure/DB";
import { IUser } from "@APP/api/structures/user/IUser";
import { Token } from "./token";
import { randomUUID } from "crypto";

export namespace Service {
    const idMapper: Record<IUser.Type, "client_id" | "biz_user_id"> = {
        client: "client_id",
        "real estate agent": "biz_user_id",
        "home service provider": "biz_user_id",
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

            skip(Result.Ok.is, () =>
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

            skip(negate(isNull), () =>
                Failure.throwFailure<IAuthentication.FailureCode.SignIn>({
                    cause: "ACCOUNT_NOT_FOUND",
                    message:
                        "가입하지 않은 계정입니다. 회원가입을 진행해주세요.",
                    statusCode: HttpStatus.FORBIDDEN,
                }),
            ),

            skip(isActive, () =>
                Failure.throwFailure<IAuthentication.FailureCode.SignIn>({
                    cause: "ACCOUNT_INACTIVE",
                    message: "비활성화된 계정입니다.",
                    statusCode: HttpStatus.FORBIDDEN,
                }),
            ),

            pick(idMapper[input.user]),

            skip(
                negate(isNull),
                throwError(() =>
                    Failure.create<IAuthentication.FailureCode.SignIn>({
                        cause: "USER_NOT_FOUND",
                        message: "사용자 정보가 존재하지 않습니다.",
                        statusCode: HttpStatus.FORBIDDEN,
                    }),
                ),
            ),

            (user_id) => {
                const access_token = Token.Access.generate({
                    user_id,
                    user_type: input.user,
                });
                const refresh_token = Token.Refresh.generate({
                    user_id,
                    user_type: input.user,
                });

                if (
                    Result.Error.is(access_token) ||
                    Result.Error.is(refresh_token)
                )
                    throw Error("로그인 토큰 발급 실패");

                return {
                    access_token: Result.Ok.flatten(access_token),
                    refresh_token: Result.Ok.flatten(refresh_token),
                };
            },
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

            skip(Result.Ok.is, () =>
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

            skip(isActive, () =>
                Failure.throwFailure<IAuthentication.FailureCode.SignUp>({
                    cause: "ACCOUNT_INACTIVE",
                    message: "비활성화된 계정입니다.",
                    statusCode: HttpStatus.FORBIDDEN,
                }),
            ),

            (model) => Token.Account.generate({ account_id: model.id }),

            skip(
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
        token: string,
    ): Promise<IAuthentication.IAccountProfile> =>
        pipe(
            token,

            Token.Account.verify,

            skip(Result.Ok.is, (error) => {
                const code = Result.Error.flatten(error);
                if (code === "Token Expired")
                    Failure.throwFailure<IAuthentication.FailureCode.GetProfile>(
                        {
                            cause: "TOKEN_EXPIRED",
                            message: "토큰이 만료되었습니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        },
                    );
                if (code === "Token Invalid")
                    Failure.throwFailure<IAuthentication.FailureCode.GetProfile>(
                        {
                            cause: "TOKEN_INVALID",
                            message: "유효하지 않은 토큰입니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        },
                    );

                throw Error("계정 토큰 검증 실패");
            }),

            Result.Ok.flatten,

            pick("account_id"),

            async (id) => prisma.oauthAccountModel.findFirst({ where: { id } }),

            skip(negate(isNull), () =>
                Failure.throwFailure<IAuthentication.FailureCode.GetProfile>({
                    cause: "ACCOUNT_NOT_FOUND",
                    message: "존재하지 않는 계정입니다.",
                    statusCode: HttpStatus.NOT_FOUND,
                }),
            ),

            skip(isActive, () =>
                Failure.throwFailure<IAuthentication.FailureCode.GetProfile>({
                    cause: "ACCOUNT_INACTIVE",
                    message: "비활성화된 계정입니다.",
                    statusCode: HttpStatus.FORBIDDEN,
                }),
            ),

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
}
