import { IAuthentication } from "../IAuthentication";
import { IUpload } from "../IUpload";
import { IUser } from "./IUser";

export namespace IBIZUser {
    export interface IIntroduction {
        /**
         * 사업자 소개 제목
         *
         * @maxLength 20
         */
        readonly title: string;
        /**
         * 사업자 소개 내용
         *
         * @maxLength 500
         */
        readonly content: string;
    }

    export interface ICertificationImageCreate {
        /**
         * url 리소스의 접근 형식이다.
         *
         * - public: 외부 리소스 혹은 public 리소스
         * - zipzoong_s3: zipzoong_s3 private 리소스
         */
        access_type: IUpload.AccessType;
        /**
         * url 주소
         *
         * @format url
         */
        url: string;
    }

    export namespace FailureCode {
        export type GetCertificationList =
            | IUser.FailureCode.Validate
            | IAuthentication.FailureCode.PermissionInSufficient;
        export type CreateCertification =
            | IUser.FailureCode.Validate
            | IAuthentication.FailureCode.PermissionInSufficient;
    }
}
