import { IClient } from "@APP/api/structures/user/IClient";
import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Authorization } from "../decorators/authorization";
import { Client } from "@APP/providers/user/client";

const route = "users/clients";

@Controller(route)
export class UsersClientsController {
    /**
     * 일반 고객 내 정보 보기 요청
     *
     * {@link IClient.FailureCode.GetMe 에러 코드}
     * - `TOKEN_EXPIRED` : 액세스 토큰이 만료된 경우
     * - `TOKEN_INVALID` : 액세스 토큰이 유효하지 않은 경우
     * - `PERMISSION_INSUFFICIENT` : 액세스 토큰의 권한이 부족한 경우
     * - `USER_INACTIVE` : 비활성화된 사용자인 경우
     * - `USER_NOT_FOUND` : 사용자가 존재하지 않는 경우
     *
     * @summary 일반 고객 내 정보 요청
     *
     * @tag clients
     *
     * @param access_token 일반 고객 권한을 가진 액세스 토큰
     *
     * @return 내 정보
     */
    @TypedRoute.Get("me")
    get(
        @Authorization("access") access_token: string,
    ): Promise<IClient.IPrivate> {
        return Client.Service.Private.get()(access_token);
    }
}
