import { IHSProvider } from "../module";
import { IPage, IPaginatedResponse } from "./common/IPagination";

export interface IHSPortfolio {
    /** 생활서비스 포트폴리오 고유 id */
    readonly id: string;
    /** 생활서비스 포트폴리오 제목 */
    readonly title: string;
    /**
     * 생활서비스 포트폴리오 메인 이미지 url
     *
     * @format url
     */
    readonly main_url: string;
    /**
     * 공개 설정
     *
     * 비공개 포트폴리오는 자신만 볼 수 있다.
     */
    readonly is_visible: boolean;
    /**
     * 포트폴리오 정보 생성일
     *
     * @format date-time
     */
    readonly created_at: string;
    /**
     * 포트폴리오 정보 최근 수정일
     *
     * @format date-time
     */
    readonly updated_at: string;
}

export namespace IHSPortfolio {
    export type IPublic = Pick<
        IHSPortfolio,
        "id" | "title" | "main_url" | "created_at" | "updated_at"
    >;

    export type IPrivate = IHSPortfolio;

    export interface ISearch extends IPage {}

    export type IPaginatedPublic = IPaginatedResponse<IPublic>;
    export type IPaginatedPrivate = IPaginatedResponse<IPrivate>;

    export type ICreate = Pick<IHSPortfolio, "title" | "main_url">;
    export type ICreateRequest = ICreate;

    export namespace FailureCode {
        export type GetPublicList = IHSProvider.FailureCode.GetPublic;
        export type GetPrivateList = IHSProvider.FailureCode.Authorize;
        export type Create = IHSProvider.FailureCode.Authorize;
    }
}
