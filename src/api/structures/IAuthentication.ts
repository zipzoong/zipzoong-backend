import { IVerification } from "@APP/api/structures/IVerification";
import { IAddress } from "./common";
import { IUser } from "./user/IUser";

export namespace IAuthentication {
    export type OauthType = "kakao";

    export interface IAccountProfile {
        /**
         * 본명
         */
        readonly name: null | string;
        /** @format email */
        readonly email: null | string;
        /**
         * 전화번호
         *
         * - `+`로 시작하고 `공백`으로 국가코드를 구분한다.
         * - 전화번호는 `숫자`와 `-`로만 이루어진다.
         *
         * e.g) +82 10-1234-5678
         * @pattern ^\+\d+\s\d+(?:-\d+)*$
         */
        readonly phone: null | string;
        readonly profile_image_url: null | string;
        /**
         * 생일(양력)
         *
         * YYYY-MM-DD
         *
         * @format date
         */
        readonly birth: null | string;
        /**
         * 성별
         */
        readonly gender: null | IUser.GenderType;
        /**
         * 사용자 주소
         */
        readonly address: null | IAddress;
    }

    export interface ISignUp {
        /**
         * oauth 인증을 통해 얻은 code를 입력한다.
         */
        code: string;
        /**
         * 인증에 사용한 oauth 서비스 유형을 입력한다.
         */
        oauth: OauthType;
    }

    export interface ISignIn extends ISignUp {
        /**
         * 권한을 얻고자 하는 사용자 유형을 입력한다.
         *
         * 해당 소셜 계정에 존재하는 사용자 유형인 경우만 인증이 완료된다.
         */
        user: IUser.Type;
    }

    export interface IToken {
        /**
         * 특정 권한이 부여된 토큰
         */
        readonly token: string;
        /**
         * 토큰 만료일자
         *
         * @format date-time
         */
        readonly expired_at: string;
    }

    export namespace IResponse {
        export interface ISignUp {
            /**
             * 회원 가입시 발급된다.
             *
             * 다음과 같은 작업을 할 수 있다.
             * - 사용자 정보 생성
             * - 소셜 계정 프로필 조회
             */
            readonly account_token: IToken;
        }

        export interface ISignIn {
            /**
             * 사용자 권한이 부여된 토큰, 실제 서비스 이용에 사용된다.
             *
             * 로그인 혹은 사용자 정보 생성을 통해 얻을 수 있다.
             */
            readonly access_token: IToken;
            /**
             * access_token 재발급용 토큰
             */
            readonly refresh_token: IToken;
        }

        export interface IRefresh {
            /**
             * 사용자 권한이 부여된 토큰, 실제 서비스 이용에 사용된다.
             *
             * 로그인 혹은 사용자 정보 생성을 통해 얻을 수 있다.
             */
            readonly access_token: IToken;
        }
    }

    export namespace FailureCode {
        export type PermissionInSufficient = "PERMISSION_INSUFFICIENT";
        export type TokenVerify = "TOKEN_EXPIRED" | "TOKEN_INVALID";
        export type AccountVerify = "ACCOUNT_NOT_FOUND" | "ACCOUNT_INACTIVE";
        export type SignIn = AccountVerify | IUser.FailureCode.GetOne;
        export type SignUp = "ACCOUNT_INACTIVE";
        export type GetProfile = TokenVerify | AccountVerify;
        export type CreateUser =
            | TokenVerify
            | AccountVerify
            | IVerification.FailureCode.IsVerifiedPhone
            | "VERIFICATION_INVALID"
            | "USER_ALREADY_EXIST"
            | "EXPERTISE_INVALID"
            | "TERMS_INSUFFICIENT"
            | "TERMS_INVALID";
        export type RefreshAccessToken = IUser.FailureCode.Validate;
    }
}
