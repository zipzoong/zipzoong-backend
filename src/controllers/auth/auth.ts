import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller, HttpCode, HttpStatus } from "@nestjs/common";
import { IAuthentication } from "@APP/api/structures/IAuthentication";
import { IUser } from "@APP/api/structures/user/IUser";
import { Authentication } from "@APP/providers/authentication";
import { Authorization } from "../decorators/authorization";
import { httpResponse } from "../internal";

@Controller("auth")
export class AuthController {
    /**
     * 전달된 정보에 대응하는 특정 회원에 대한 권한이 부여된 인증 토큰을 발급한다.
     *
     * {@link IAuthentication.FailureCode.SignIn 에러 코드}
     *
     * @summary 로그인
     *
     * @tag authentication
     *
     * @param body oauth code, oauth type, user type
     *
     * @return 사용자 권한이 부여된 토큰
     */
    @HttpCode(HttpStatus.OK)
    @TypedRoute.Post("sign-in")
    async execute(
        @TypedBody() body: IAuthentication.ISignIn,
    ): Promise<IAuthentication.IResponse.ISignIn> {
        const result = await Authentication.Service.signIn(body);
        return httpResponse(result);
    }

    /**
     * 회원을 생성하거나 계정 프로필 정보 요청을 위한 인증 토큰을 발급한다.
     *
     * account에 포함된 정보는 회원 정보에 기본값으로 사용할 수 있다.
     *
     * {@link IAuthentication.FailureCode.SignUp 에러 코드}
     *
     * @summary 계정 생성(회원가입)
     *
     * @tag authentication
     *
     * @param body oauth code, oauth type
     *
     * @return 계정 권한이 부여된 토큰
     */
    @TypedRoute.Post("sign-up")
    async create(
        @TypedBody() body: IAuthentication.ISignUp,
    ): Promise<IAuthentication.IResponse.ISignUp> {
        const result = await Authentication.Service.signUp(body);
        return httpResponse(result);
    }

    /**
     * 계정 프로필 정보를 불러옵니다. 소셜 계정을 통해 얻은 정보입니다.
     *
     * 사용자 정보를 생성할 때, 기본값으로 사용될 수 있습니다.
     *
     * {@link IAuthentication.FailureCode.GetProfile 에러 코드}
     *
     * @summary 계정 프로필 조회
     *
     * @tag authentication
     *
     * @param account_token 계정 토큰
     *
     * @return 계정 프로필 정보
     */
    @TypedRoute.Get("profile")
    async get(
        @Authorization("account") account_token: string,
    ): Promise<IAuthentication.IAccountProfile> {
        const result = await Authentication.Service.getProfile()(account_token);
        return httpResponse(result);
    }
}

@Controller("auth/token/access")
export class AuthAccessTokenController {
    /**
     * 액세스 토큰 재발급 요청
     *
     * {@link IAuthentication.FailureCode.RefreshAccessToken 에러 코드}
     *
     * @summary 액세스 토큰 재발급
     *
     * @tag authentication
     *
     * @param refresh_token 액세스 토큰 재발급 토큰
     *
     * @return 액세스 토큰
     */
    @TypedRoute.Post()
    async create(
        @Authorization("refresh") refresh_token: string,
    ): Promise<IAuthentication.IResponse.IRefresh> {
        const result = await Authentication.Service.refreshAccessToken()(
            refresh_token,
        );
        return httpResponse(result);
    }
}

@Controller("auth/user")
export class AUthUserController {
    /**
     * 계정 토큰을 사용하여 사용자 정보를 생성한다.
     *
     * 이메일, 휴대전화는 verification_id를 null로 하면 계정 프로필에 저장된 정보가 기본으로 적용된다.
     *
     * 그 외 정보는 null을 전송할 경우, null을 저장한다.
     *
     * {@link IAuthentication.FailureCode.CreateUser 에러 코드}
     * - `TOKEN_EXPIRED` : 계정 토큰이 만료된 경우
     * - `TOKEN_INVALID` : 계정 토큰이 유효하지 않은 경우
     * - `ACCOUNT_NOT_FOUND` : 집중 서버에 계정 정보가 없는 경우
     * - `ACCOUNT_INACTIVE` : 비활성화된 계정인 경우
     * - `USER_ALREADY_EXIST` : 이미 연동된 해당 유형의 사용자 정보가 있는 경우
     * - `PHONE_REQUIRED` : 사용가능한 휴대전화 정보가 없는 경우 (사업자 유형은 전화번호가 필수)
     * - `EXPERTISE_INVALID` : 사업자 전문분야 정보가 유효하지 않은 경우
     * - `TERMS_INSUFFICIENT` : 필수 약관 동의가 불충분한 경우
     * - `TERMS_INVALID` : 약관 정보가 유효하지 않은 경우
     *
     * @summary 사용자 정보 생성
     *
     * @tag authentication
     *
     * @param account_token 계정 토큰
     *
     * @param body 사용자 정보
     *
     * @return 사용자 토큰(access token)
     */
    @TypedRoute.Post()
    async create(
        @Authorization("account") account_token: string,
        @TypedBody() body: IUser.ICreateRequest,
    ): Promise<IAuthentication.IResponse.ISignIn> {
        const result = await Authentication.Service.createUser()(account_token)(
            body,
        );
        return httpResponse(result);
    }
}
