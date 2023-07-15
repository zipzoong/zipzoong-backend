export namespace IVerification {
    export namespace IRequest {
        export interface ICreatePhone {
            /**
             * 대표자(계정 관리자) 전화번호
             *
             * 계정 담당자의 연락처로서 사용자 고유 식별과 마케팅, 주요 약관 변경 등의 고지에 사용한다.
             * - `+`로 시작하고 `공백`으로 국가코드를 구분한다.
             * - 전화번호는 `숫자`와 `-`로만 이루어진다.
             * - 조회시 `마킹`된 형태로 표기된다.
             *
             * e.g) +82 10-1234-5678, +82 10-1***-5***
             * @pattern ^\+\d+\s\d+(?:-\d+)*$
             */
            phone: string;
        }
        export interface IVerifyPhone extends ICreatePhone {
            /**
             * 인증 코드
             *
             * 문자로 전달된 6자리 인증코드
             */
            code: string;
        }
    }
    export namespace IResponse {
        export interface ICreate {
            /**
             * 인증 요청 만료 일시
             *
             * @format date-time
             */
            readonly expired_at: string;
        }
        export interface IVerify {
            /**
             * 인증 정보 id
             *
             * 회원가입/회원정보 수정시 해당 정보를 전달하면 인증 정보에 저장된 정보가 사용자 정보에게 적용됩니다.
             */
            readonly verification_id: string;
        }
    }
}
