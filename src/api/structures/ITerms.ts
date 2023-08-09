export interface ITerms {
    /** 약관 고유 id */
    readonly id: string;
    /**
     * 약관 본문 url
     *
     * @format url
     */
    readonly url: string;
    /** 약관 제목 */
    readonly title: string;
    /** 약관 버전 */
    readonly version: string;
    /** 필수 약관 여부 */
    readonly is_required: boolean;
    /** 약관 대상 유형 */
    readonly type: ITerms.Type;
}

export namespace ITerms {
    export type Type = "all" | "CL" | "BIZ" | "RE" | "HS";

    export interface ISearch {
        /**
         * 검색결과에 포함시킬 타입 유형들(필터링 기준)
         *
         * @minItems 1
         */
        type: Type[];
    }

    export namespace FailureCode {
        export type Insufficient = "TERMS_INSUFFICIENT";
        export type Invalid = "TERMS_INVALID";
    }
}
