import { Mutable } from "@APP/api/types";
import { IExpertise } from "../IExpertise";
import { IVerification } from "../IVerification";
import { IAddress, IPage, IPaginatedResponse } from "../common";
import { IBIZUser } from "./IBIZUser";
import { IUser } from "./IUser";

export interface IHSProvider extends IUser.IBase<"home service provider"> {
    /** 업체 승인 여부 */
    readonly is_verified: boolean;
    /** 업체 소개 */
    readonly introduction: IBIZUser.IIntroduction;
    /**
     * 프로필 이미지
     *
     * - 업체 대표의 얼굴 이미지를 등록해야 한다.
     *
     * @format url
     */
    readonly profile_image_url: string;
    /** 사업자 등록번호 */
    readonly registration_number: string;
    /** 업체 소재지 */
    readonly address: IAddress;
    /**
     * 대표자(계정 관리자) 전화번호
     *
     * 계정 담당자의 연락처로서 사용자 고유 식별과 마케팅, 주요 약관 변경 등의 고지에 사용한다.
     * - `+`로 시작하고 `공백`으로 국가코드를 구분한다.
     * - 전화번호는 `숫자`와 `-`로만 이루어진다.
     *
     * e.g) +82 10-1234-5678
     *
     * @pattern ^\+\d+\s\d+(?:-\d+)*$
     */
    readonly phone: string;
    /** 업체 대표 전화번호 */
    readonly biz_phone: string;
    /**
     * 개업일(신고일자)
     *
     * YYYY-MM-DD
     *
     * @format date
     */
    readonly open_date: string;
    /**
     * 전문 분야
     *
     * - 자신이 속한 상위 전문 분야와 하위 전문 분야 정보
     * - 하위 전문 분야는 복수 정보다.
     */
    readonly expertise: IExpertise.ISuper;
}

export namespace IHSProvider {
    export interface ISubExpertise {
        /** 하위 전문 분야 고유 id */
        readonly id: string;
        /** 하위 전문 분야 이름 */
        readonly name: string;
    }

    export interface ICreate
        extends Pick<
            Mutable<IHSProvider>,
            | "name"
            | "profile_image_url"
            | "introduction"
            | "email"
            | "phone"
            | "biz_phone"
            | "registration_number"
            | "address"
            | "open_date"
        > {
        /**
         * 하위 전문 분야 id 목록
         *
         * - 최소 하나 이상의 전문 분야 id가 존재해야 한다.
         * - 목록 안에 모든 id는 동일한 상위 전문 분야에 속해야 한다.
         *
         * @minItems 1
         */
        sub_expertise_ids: string[];
    }

    export interface ICreateRequest
        extends Pick<
            ICreate,
            | "name"
            | "profile_image_url"
            | "introduction"
            | "address"
            | "open_date"
            | "biz_phone"
            | "registration_number"
            | "sub_expertise_ids"
        > {
        type: "home service provider";
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
        phone: IVerification.IVerifiedPhone;
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
        /** 사업자 증명 서류 사진 목록 */
        biz_certification_images: IBIZUser.ICertificationImageCreate[];
    }

    export type ISummary = Pick<
        IHSProvider,
        | "type"
        | "id"
        | "name"
        | "profile_image_url"
        | "introduction"
        | "expertise"
    >;

    export type IPublic = Pick<
        IHSProvider,
        | "type"
        | "id"
        | "name"
        | "profile_image_url"
        | "introduction"
        | "expertise"
        | "registration_number"
        | "biz_phone"
        | "open_date"
        | "address"
    >;
    export type IPrivate = IHSProvider;

    export type IContact = Pick<
        IHSProvider,
        "phone" | "email" | "address" | "biz_phone"
    >;

    export interface ISearch extends IPage {
        /** 상위 전문 분야명(필터링 기준) */
        super_expertise_name?: string;
        /**
         * 하위 전문 분야명
         *
         * - 상위 전문분야가 적용되어야 하위 전문분야를 적용할 수 있다.
         */
        sub_expertise_name?: string;
    }

    export type IPaginatedSummary = IPaginatedResponse<ISummary>;

    export namespace FailureCode {
        export type GetPublic = IUser.FailureCode.GetPublic;
        export type GetContact =
            | IUser.FailureCode.Validate
            | IUser.FailureCode.Verify
            | GetPublic;
        export type GetPrivate = IUser.FailureCode.ValidateType;
    }
}
