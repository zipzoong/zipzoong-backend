export interface IAddress {
    /**
     * 도로명 주소
     */
    readonly road: string;
    /**
     * 우편 번호
     */
    readonly zone_code: string;
    /**
     * 상세 주소
     */
    readonly detail: null | string;
    /**
     * 참고 사항
     */
    readonly extra: null | string;
}
