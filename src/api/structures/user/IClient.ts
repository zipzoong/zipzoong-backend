import { IVerification } from "@APP/api/structures/IVerification";
import { Mutable } from "@APP/api/types";
import { IAddress } from "../common";
import { IUser } from "./IUser";

export interface IClient extends IUser.IBase<"client"> {
    /**
     * 생일(양력)
     *
     * YYYY-MM-DD 형식
     *
     * @format date
     */
    readonly birth: null | string;
    /** 성별 */
    readonly gender: null | IUser.GenderType;
    /**
     * 전화번호
     *
     * - `+`로 시작하고 `공백`으로 국가코드를 구분한다.
     * - 전화번호는 `숫자`와 `-`로만 이루어진다.
     *
     * e.g) +82 10-1234-5678
     *
     * @pattern ^\+\d+\s\d+(?:-\d+)*$
     */
    readonly phone: null | string;
    /**
     * 사용자 현재 주소
     */
    readonly address: null | IAddress;
    /**
     * 사용자 프로필 이미지
     *
     * @format url
     */
    readonly profile_image_url: null | string;
}

export namespace IClient {
    /**
     * Client Entity를 생성하기 위한 Input DTO
     */
    export interface ICreate
        extends Pick<
            Mutable<IClient>,
            | "name"
            | "profile_image_url"
            | "address"
            | "email"
            | "phone"
            | "gender"
            | "birth"
        > {}

    export interface ICreateRequest
        extends Pick<
            ICreate,
            "name" | "profile_image_url" | "gender" | "birth" | "address"
        > {
        type: "client";
        /**
         * 동의 약관 id 목록
         */
        agreed_terms_ids: string[];
        /**
         * 전화번호 인증 정보
         *
         * null 입력시 저장하지 않는다.
         *
         * type이 verification일 때, 인증을 진행한 전화번호를 입력한다.
         *
         * type이 account일 때, 계정에 존재하는 전화번호를 입력한다.
         */
        phone: null | IVerification.IVerifiedPhone;
        /**
         * 이메일 인증 정보
         *
         * null 입력시 저장하지 않는다.
         *
         * type이 verification일 때, 인증을 진행한 이메일을 입력한다.
         *
         * type이 account일 때, 계정에 존재하는 이메일을 입력한다.
         */
        email: null | IVerification.IVerifiedEmail;
    }
    export type IPrivate = IClient;
    export type IProfile = IPrivate;
    `
    export interface IPrivate
        extends Pick<
            IClient,
            | "type"
            | "id"
            | "name"
            | "profile_image_url"
            | "address"
            | "birth"
            | "gender"
            | "created_at"
            | "updated_at"
        > {
        /** 마킹된 전화전번호 */
        readonly marked_phone: string | null;
        /** 마킹된 이메일  */
        readonly marked_email: string | null;
    }
    `;

    export namespace FailureCode {
        export type Authorize = IUser.FailureCode.Authorize;
        export type GetProfile = IUser.FailureCode.GetProfile;
    }
}
