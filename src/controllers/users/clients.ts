import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IClient } from "@APP/api/structures/user/IClient";
import { Client } from "@APP/providers/user/client";
import { Authorization } from "../decorators/authorization";
import { httpResponse } from "../internal";

const route = "users/clients";

@Controller(route)
export class UsersClientsController {
    /**
     * 일반 고객 내 정보 보기 요청
     *
     * {@link IClient.FailureCode.GetPrivate 에러 코드}
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
    async get(
        @Authorization("access") access_token: string,
    ): Promise<IClient.IPrivate> {
        const result = await Client.Service.getPrivate()(access_token);
        return httpResponse(result);
    }
}
