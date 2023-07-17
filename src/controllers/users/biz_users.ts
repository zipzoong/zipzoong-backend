import { IBIZUser } from "@APP/api/structures/user/IBIZUser";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Authorization } from "../decorators/authorization";
import { BIZUser } from "@APP/providers/user/biz_user";

@Controller("users/biz-users/certifications")
export class UsersBIZUsersCertificationsController {
    /**
     * 제출한 사업자 인증 서류 이미지 목록 조회
     *
     * {@link IBIZUser.FailureCode.GetBIZCertificationList 에러 코드}
     * - `TOKEN_EXPIRED` : 액세스 토큰이 만료된 경우
     * - `TOKEN_INVALID` : 액세스 토큰이 유효하지 않은 경우
     * - `PERMISSION_INSUFFICIENT` : 액세스 토큰 권한이 부족한 경우
     * - `USER_INACTIVE` : 비활성화된 사용자인 경우
     * - `USER_NOT_FOUND` : 사용자 정보를 찾을 수 없는 경우
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
    getList(@Authorization("access") access_token: string): Promise<string[]> {
        return BIZUser.Service.getBIZCertificationList()(access_token);
    }

    /**
     * 사업자 인증 서류 이미지 추가
     *
     * {@link IBIZUser.FailureCode.CreateBIZCertification 에러 코드}
     * - `TOKEN_EXPIRED` : 액세스 토큰이 만료된 경우
     * - `TOKEN_INVALID` : 액세스 토큰이 유효하지 않은 경우
     * - `PERMISSION_INSUFFICIENT` : 액세스 토큰 권한이 부족한 경우
     * - `USER_INACTIVE` : 비활성화된 사용자인 경우
     * - `USER_NOT_FOUND` : 사용자 정보를 찾을 수 없는 경우
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
    create(
        @Authorization("access") access_token: string,
        @TypedBody() body: IBIZUser.ICertificationImageCreate,
    ): Promise<void> {
        return BIZUser.Service.createBIZCertificationImage()({
            access_token,
            data: body,
        });
    }
}
