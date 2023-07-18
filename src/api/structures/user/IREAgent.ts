import { Mutable } from "@APP/api/types";
import { IExpertise } from "../IExpertise";
import { IAddress, IPage, IPaginatedResponse } from "../common";
import { IBIZUser } from "./IBIZUser";
import { IUser } from "./IUser";

export interface IREAgent extends IUser.IBase<"real estate agent"> {
    /** 사업자 승인 여부 */
    readonly is_verified: boolean;
    /**
     * 사업자 소개
     */
    readonly introduction: IBIZUser.IIntroduction;
    /**
     * 사업자 전화번호
     *
     * - `+`로 시작하고 `공백`으로 국가코드를 구분한다.
     * - 전화번호는 `숫자`와 `-`로만 이루어진다.
     *
     * e.g) +82 10-1234-5678
     *
     * @pattern ^\+\d+\s\d+(?:-\d+)*$
     */
    readonly phone: string;
    /**
     * 프로필 이미지
     *
     * - 사업자는 반드시 본인 인물 사진을 프로필 이미지로 등록해야 한다.
     *
     * @format url
     */
    readonly profile_image_url: string;
    /**
     * 개업/소속 분류
     *
     * true인 경우, 개업 공인중개사에 해당한다.
     */
    readonly is_licensed: boolean;
    /** 부동산 정보 */
    readonly real_estate: IREAgent.IRealEstate;
    /**
     * 전문분야
     *
     * - 공인중개사는 하나의 전문 분야만 등록 가능하다.
     */
    readonly expertise: IExpertise;
}

export namespace IREAgent {
    export interface IRealEstate {
        /** 중개 등록번호 */
        readonly number: string;
        /** 상호명 */
        readonly name: string;
        /**
         * 부동산 전화번호
         *
         * - 없을 경우, 대표자 연락처
         */
        readonly phone: string;
        /** 대표자명 */
        readonly licensed_agent_name: string;
        /** 부동산 소재지 */
        readonly address: IAddress;
        /**
         * 부동산 등록일자
         *
         * YYYY-MM-DD
         *
         * @format date
         */
        readonly open_date: string;
    }

    export interface ICreate
        extends Pick<
            Mutable<IREAgent>,
            | "name"
            | "profile_image_url"
            | "introduction"
            | "email"
            | "phone"
            | "is_licensed"
            | "real_estate"
        > {
        /**
         * 전문 분야 id
         */
        expertise_id: string;
    }

    export interface ICreateRequest
        extends Pick<
            ICreate,
            | "name"
            | "profile_image_url"
            | "introduction"
            | "is_licensed"
            | "expertise_id"
            | "real_estate"
        > {
        type: "real estate agent";
        /**
         * 동의 약관 id 목록
         */
        agreed_terms_ids: string[];
        /**
         * 전화번호 인증 정보 id
         *
         * - 전화번호 인증을 통해 얻은 id를 입력한다.
         * - null 입력시 소셜 계정에 저장된 전화번호를 자동 저장한다.
         * - 소셜 계정에 전화번호 정보가 없으면 null이 저장된다.
         * - 사용자는 정상적인 서비스를 이용하기 위해선 전화번호 입력까지 완료해야 한다.
         */
        phone_verification_id: null | string;
        /**
         * 이메일 인증 정보 id
         *
         * - 아직 미구현, null 입력할 것
         */
        email_verification_id: null | string;
        /** 사업자 증명 서류 사진 목록 */
        biz_certification_images: IBIZUser.ICertificationImageCreate[];
    }

    /**
     * 목록 조회 등의 상황에서 사용되는 요약 정보
     */
    export type ISummary = Pick<
        IREAgent,
        | "type"
        | "id"
        | "name"
        | "profile_image_url"
        | "introduction"
        | "is_licensed"
        | "expertise"
        | "real_estate"
    >;

    /**
     * 타인에게 보여지는 정보
     */
    export type IPublic = Pick<
        IREAgent,
        | "type"
        | "id"
        | "name"
        | "profile_image_url"
        | "introduction"
        | "is_licensed"
        | "expertise"
        | "real_estate"
    >;

    export type IPrivate = IREAgent;
    export type IProfile = IPrivate;
    `
    export interface IPrivate
        extends Pick<
            IREAgent,
            | "type"
            | "id"
            | "name"
            | "profile_image_url"
            | "introduction"
            | "expertise"
            | "is_verified"
            | "is_licensed"
            | "real_estate"
            | "created_at"
            | "updated_at"
        > {
        /** 마킹된 전화전번호 */
        readonly marked_phone: string;
        /** 마킹된 이메일  */
        readonly marked_email: string | null;
    }
`;
    export interface IContact extends Pick<IREAgent, "phone" | "email"> {
        /**
         * 부동산 연락처
         */
        readonly real_estate_phone: string;
        /**
         * 부동산 주소
         */
        readonly real_estate_address: IAddress;
    }

    export interface ISearch extends IPage {
        /** 공인중개사 전문분야명(필터링 기준) */
        expertise_name?: string;
    }

    export type IPaginatedSummary = IPaginatedResponse<ISummary>;

    export namespace FailureCode {
        export type Authorize = IUser.FailureCode.Authorize;
        export type GetPublic = IUser.FailureCode.GetPublic;
        export type GetPrivate = IUser.FailureCode.GetPrivate;
        export type GetProfile = IUser.FailureCode.GetProfile;
        export type GetContact = Authorize | GetPublic;
        export type GetCertificationList = GetProfile;
        export type CreateCertification = GetProfile;
    }
}
