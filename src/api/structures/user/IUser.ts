export namespace IUser {
    export type Type = "client" | "real estate agent" | "home service provider";
    export type GenderType = "female" | "male";
    export interface IBase<T extends Type> {
        /**
         * 사용자 분류
         * - client: 일반 회원
         * - real estate: 공인중개사
         * - home service: 생활서비스 전문가
         */
        readonly type: T;
        /** 사용자 고유 id */
        readonly id: string;
        /**
         * 사용자명
         * - 사용자가 home service provider인 경우, 업체 상호명이다.
         */
        readonly name: string;
        /**
         * 사용자 이메일
         *
         * 조회시 마킹된 형태로 표기됩니다.
         *
         * e.g) b****@naver.com
         * @format email
         */
        readonly email: null | string;
        /**
         * 사용자 정보 생성일
         * @format date-time
         */
        readonly created_at: string;
        /**
         * 최근 수정일
         * @format date-time
         */
        readonly updated_at: string;
    }
}
