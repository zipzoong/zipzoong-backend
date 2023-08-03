import { Mutable } from "@APP/api/types";
import { IAuthentication } from "../IAuthentication";
import { IUpload } from "../IUpload";
import { IHSProvider } from "./IHSProvider";
import { IREAgent } from "./IREAgent";
import { IUser } from "./IUser";
import { IVerification } from "../IVerification";

export type IBIZUser = IHSProvider | IREAgent;

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

    export namespace IUpdate {
        export interface IIntroduction
            extends Mutable<IBIZUser.IIntroduction> {}
        export interface IName extends Pick<Mutable<IBIZUser>, "name"> {}
        export interface IProfileImage {
            /**
             * 변경할 프로필 이미지
             *
             * 사업자는 반드시 본인 혹은 대표의 얼굴을 프로필 이미지로 지정해야 한다.
             *
             * @format url
             */
            profile_image_url: string;
        }
    }

    export namespace FailureCode {
        export type GetCertificationList =
            | IUser.FailureCode.Validate
            | IAuthentication.FailureCode.PermissionInSufficient;
        export type CreateCertification =
            | IUser.FailureCode.Validate
            | IAuthentication.FailureCode.PermissionInSufficient;
        export type UpdateIntroduction =
            | IUser.FailureCode.Validate
            | IAuthentication.FailureCode.PermissionInSufficient;
        export type UpdatePhone =
            | IUser.FailureCode.Validate
            | IAuthentication.FailureCode.PermissionInSufficient
            | IVerification.FailureCode.assertVerifiedPhone;
    }
}
