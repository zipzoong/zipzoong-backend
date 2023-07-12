export namespace IBIZUser {
    export interface IIntroduction {
        /**
         * 사업자 소개 제목
         * @maxLength 20
         */
        readonly title: string;
        /**
         * 사업자 소개 내용
         * @maxLength 500
         */
        readonly content: string;
    }

    export interface ICertificationImageCreate {
        /**
         * url 리소스의 접근 형식이다.
         * - public: 외부 리소스 혹은 public 리소스
         * - zipzoong_s3: zipzoong_s3 private 리소스
         */
        access_type: "public" | "zipzoong_s3";
        /**
         * url 주소
         * @format url
         */
        url: string;
    }

    export interface IContact {
        /**
         * 사업자 전화번호
         *
         * - `+`로 시작하고 `공백`으로 국가코드를 구분한다.
         * - 전화번호는 `숫자`와 `-`로만 이루어진다.
         *
         * e.g) +82 10-1234-5678
         * @pattern ^\+\d+\s\d+(?:-\d+)*$
         */
        readonly phone: string;
        /**
         * 담당자 이메일
         *
         * e.g) b****@naver.com
         * @format email
         */
        readonly email: null | string;
    }
}
