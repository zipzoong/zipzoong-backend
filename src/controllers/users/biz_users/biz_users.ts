import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IBIZUser } from "@APP/api";
import { Authorization } from "@APP/controllers/decorators/authorization";
import { httpResponse } from "@APP/controllers/internal";
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
