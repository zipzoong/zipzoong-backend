import { IAuthentication } from "@APP/api/structures/IAuthentication";
import { Authentication } from "@APP/providers/authentication";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller, HttpCode, HttpStatus } from "@nestjs/common";

@Controller("auth")
export class AuthController {
    /**
     * 전달된 정보에 대응하는 특정 회원에 대한 권한이 부여된 인증 토큰을 발급한다.
     *
     * 에러 코드
     * - OAUTH_FAIL : oauth 인증에 실패한 경우
     * - ACCOUNT_NOT_FOUND : 집중 서버에 계정 정보가 없는 경우
     * - ACCOUNT_INACTIVE : 비활성화된 계정인 경우
     * - USER_NOT_FOUND : 사용자 정보가 없는 경우
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
    execute(
        @TypedBody() body: IAuthentication.ISignIn,
    ): Promise<IAuthentication.IResponse.ISignIn> {
        return Authentication.Service.signIn(body);
    }

    /**
     * 회원을 생성하거나 계정 프로필 정보 요청을 위한 인증 토큰을 발급한다.
     *
     * account에 포함된 정보는 회원 정보에 기본값으로 사용할 수 있다.
     *
     * 에러 코드
     * - OAUTH_FAIL : oauth 인증에 실패한 경우
     * - ACCOUNT_INACTIVE : 비활성화된 계정인 경우
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
    create(
        @TypedBody() body: IAuthentication.ISignUp,
    ): Promise<IAuthentication.IResponse.ISignUp> {
        return Authentication.Service.signUp(body);
    }
}
