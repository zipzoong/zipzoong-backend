import { Mutable } from "@APP/api/types";
import { IExpertise } from "../IExpertise";
import { IVerification } from "../IVerification";
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

    export namespace IUpdate {
        export interface IRealEstate extends Mutable<IREAgent.IRealEstate> {}
        export interface IExpertise {
            /**
             * 개업/소속 공인중개사 구분
             */
            is_licensed: boolean;
            /**
             * 전문분야 id
             */
            expertise_id: string;
        }
    }

    export namespace FailureCode {
        export type GetPublic = IUser.FailureCode.GetPublic;
        export type GetContact =
            | IUser.FailureCode.Validate
            | IUser.FailureCode.Verify
            | GetPublic;
        export type GetPrivate = IUser.FailureCode.ValidateType;
    }
}
