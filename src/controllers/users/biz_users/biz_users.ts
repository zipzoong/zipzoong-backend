import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IBIZUser, IVerification } from "@APP/api";
import { Authorization } from "@APP/controllers/decorators/authorization";
import { httpResponse } from "@APP/controllers/internal";
import { prisma } from "@APP/infrastructure/DB";
import { BIZUser } from "@APP/providers/user/biz_user";

@Controller("users/biz-users/me/certifications")
export class UsersBIZCertificationsController {
    /**
     * 제출한 사업자 인증 서류 이미지 목록 조회
     *
     * {@link IBIZUser.FailureCode.GetCertificationList 에러 코드}
     *
     * @summary 사업자 인증 서류 이미지 목록 조회
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @return 사업자 인증 서류 이미지 url 목록
     */
    @TypedRoute.Get()
    async getList(
        @Authorization("access") access_token: string,
    ): Promise<string[]> {
        const result = await BIZUser.Service.getCertificationList()(
            access_token,
        );
        return httpResponse(result);
    }

    /**
     * 사업자 인증 서류 이미지 추가
     *
     * {@link IBIZUser.FailureCode.CreateCertification 에러 코드}
     *
     * @summary 사업자 인증 서류 이미지 추가
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @param body 업로드할 이미지 정보
     */
    @TypedRoute.Post()
    async create(
        @Authorization("access") access_token: string,
        @TypedBody() body: IBIZUser.ICertificationImageCreate,
    ): Promise<void> {
        const result = await BIZUser.Service.createCertification()(
            access_token,
        )(body);
        httpResponse(result);
    }
}

@Controller("users/biz-users/me/introduction")
export class UsersBIZUsersIntroductionUpdateController {
    /**
     * 사업자 자기소개 수정
     *
     * {@link IBIZUser.FailureCode.UpdateIntroduction 에러 코드}
     *
     * @summary 사업자 자기소개 수정
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @param body 자기 소개 정보
     */
    @TypedRoute.Put()
    update(
        @Authorization("access") access_token: string,
        @TypedBody() body: IBIZUser.IUpdate.IIntroduction,
    ): Promise<void> {
        return prisma.$transaction(async (tx) => {
            const result = await BIZUser.Service.updateIntroduction(tx)(
                access_token,
            )(body);
            httpResponse(result);
        });
    }
}

@Controller("users/biz-users/me/phone")
export class UsersBIZUsersPhoneUpdateController {
    /**
     * 사업자 개인 전화번호 수정
     *
     * {@link IBIZUser.FailureCode.UpdatePhone 에러 코드}
     *
     * @summary 사업자 개인 전화번호 수정
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @param body 인증된 전화번호 접근 방식
     */
    @TypedRoute.Put()
    update(
        @Authorization("access") access_token: string,
        @TypedBody() body: IVerification.IVerifiedPhone.IVerification,
    ): Promise<void> {
        return prisma.$transaction(async (tx) => {
            const result = await BIZUser.Service.updatePhone(tx)(access_token)(
                body,
            );
            httpResponse(result);
        });
    }
}

@Controller("users/biz-users/me/name")
export class UsersBIZUsersNameUpdateController {
    /**
     * 사업자 이름 수정
     *
     * {@link IBIZUser.FailureCode.UpdateName 에러 코드}
     *
     * @summary 사업자 이름 수정
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @param body 이름 정보
     */
    @TypedRoute.Put()
    update(
        @Authorization("access") access_token: string,
        @TypedBody() body: IBIZUser.IUpdate.IName,
    ): Promise<void> {
        return prisma.$transaction(async (tx) => {
            const result = await BIZUser.Service.updateName(tx)(access_token)(
                body,
            );
            httpResponse(result);
        });
    }
}

@Controller("users/biz-users/me/profile-image")
export class UsersBIZUsersProfileImageUpdateController {
    /**
     * 사업자 프로필 이미지 수정
     *
     * {@link IBIZUser.FailureCode.UpdateProfileImageUrl 에러 코드}
     *
     * @summary 사업자 프로필 이미지 수정
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @param body 프로필 이미지 정보
     */
    @TypedRoute.Put()
    update(
        @Authorization("access") access_token: string,
        @TypedBody() body: IBIZUser.IUpdate.IProfileImageUrl,
    ): Promise<void> {
        return prisma.$transaction(async (tx) => {
            const result = await BIZUser.Service.updateProfileImageUrl(tx)(
                access_token,
            )(body);
            httpResponse(result);
        });
    }
}
