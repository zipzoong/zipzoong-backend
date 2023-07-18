import { IBIZUser } from "@APP/api/structures/user/IBIZUser";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Authorization } from "../decorators/authorization";
import { BIZUser } from "@APP/providers/user/biz_user";
import { httpResponse } from "../internal";

@Controller("users/biz-users/certifications")
export class UsersBIZUsersCertificationsController {
    /**
     * 제출한 사업자 인증 서류 이미지 목록 조회
     *
     * {@link IBIZUser.FailureCode.GetBIZCertificationList 에러 코드}
     *
     * @summary 사업자 인증 서류 이미지 목록 조회
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token 사업자 권한을 가진 액세스 토큰
     *
     * @return 사업자 인증 서류 이미지 url 목록
     */
    @TypedRoute.Get()
    async getList(
        @Authorization("access") access_token: string,
    ): Promise<string[]> {
        const result = await BIZUser.Service.getBIZCertificationList()(
            access_token,
        );
        return httpResponse(result);
    }

    /**
     * 사업자 인증 서류 이미지 추가
     *
     * {@link IBIZUser.FailureCode.CreateBIZCertification 에러 코드}
     *
     * @summary 사업자 인증 서류 이미지 추가
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token 사업자 권한을 가진 액세스 토큰
     *
     * @param body 업로드할 이미지 정보
     */
    @TypedRoute.Post()
    async create(
        @Authorization("access") access_token: string,
        @TypedBody() body: IBIZUser.ICertificationImageCreate,
    ): Promise<void> {
        const result = await BIZUser.Service.createBIZCertificationImage()(
            access_token,
        )(body);
        httpResponse(result);
    }
}
