import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Authorization } from "../decorators/authorization";

@Controller("users/re-agents")
export class UsersREAgentsController {
    /**
     * 검색기준에 맞는 인증된 공인중개사 간단 정보 목록을 확안할 수 있다.
     *
     * @summary 공인중개사 목록 검색
     *
     * @tag re-agents
     *
     * @param query 필터링, 정렬 기준
     *
     * @return 공인중개사 간단 정보 목록
     */
    @TypedRoute.Get()
    getList(
        @TypedQuery() query: IREAgent.ISearch,
    ): Promise<IREAgent.IPaginatedSummary> {
        throw Error("");
    }

    /**
     * 공인중개사 개인정보를 요청한다.
     *
     * 이메일, 휴대전화 등의 개인 정보는 마킹처리되어 전달된다.
     *
     * @summary 공인중개사 내정보 조회
     *
     * @tag re-agents
     *
     * @param access_token 공인중개사 권한을 갖은 액세스 토큰
     *
     * @return 공인중개사 프로필 정보
     */
    @TypedRoute.Get("me")
    get(
        @Authorization("access") access_token: string,
    ): Promise<IREAgent.IPrivate> {
        throw Error();
    }

    /**
     * 공인중개사의 공개 정보를 요청한다.
     *
     * @summary 공인중개사 공개 프로필 정보 조회
     *
     * @tag re-agents
     *
     * @param agent_id 공인중개사 id
     *
     * @return 공인중개사 공개정보
     */
    @TypedRoute.Get(":agent_id")
    getOne(
        @TypedParam("agent_id") agent_id: string,
    ): Promise<IREAgent.IPublic> {
        throw Error();
    }

    /**
     * 공인중개사 연락처 정보를 요청한다.
     *
     * @summary 공인중개사 연락처 정보 조회
     *
     * @tag re-agents
     *
     * @param agent_id 공인중개사 id
     *
     * @return 공인중개사 연락처 정보
     */
    @TypedRoute.Get(":agent_id/contact")
    getContact(
        @TypedParam("agent_id") agent_id: string,
    ): Promise<IREAgent.IContact> {
        throw Error();
    }
}
