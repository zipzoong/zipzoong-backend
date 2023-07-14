import { Mutable } from "@APP/api/types";
import { IAddress } from "../common";
import { IUser } from "./IUser";

export interface IClient extends IUser.IBase<"client"> {
    /**
     * 생일(양력)
     *
     * YYYY-MM-DD 형식
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
     * - 조회시 `마킹`된 형태로 표기된다.
     *
     * e.g) +82 10-1234-5678, +82 10-1***-5***
     * @pattern ^\+\d+\s\d+(?:-\d+)*$
     */
    readonly phone: null | string;
    /**
     * 사용자 현재 주소
     */
    readonly address: null | IAddress;
    /**
     * 사용자 프로필 이미지
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
         * 전화번호 인증 정보 id
         * - 전화번호 인증을 통해 얻은 id를 입력한다.
         * - null 입력시 소셜 계정에 저장된 전화번호를 자동 저장한다.
         * - 소셜 계정에 전화번호 정보가 없으면 null이 저장된다.
         * - 사용자는 정상적인 서비스를 이용하기 위해선 전화번호 입력까지 완료해야 한다.
         */
        phone_verification_id: null | string;
        /**
         * 이메일 인증 정보 id
         * - 아직 미구현, null 입력할 것
         */
        email_verification_id: null | string;
    }

    /**
    export type ISummary = Pick<
        IClient,
        "id" | "name" | "profile_image_url" | "created_at" | "updated_at"
    >;
    */
}
