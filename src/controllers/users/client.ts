import { IClient } from "@APP/api/structures/user/IClient";
import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Authorization } from "../decorators/authorization";

const route = "users/clients";

@Controller(route)
export class UsersClientsController {
    /**
     * 일반 고객 내 정보 보기 요청
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
        throw Error();
    }
}
