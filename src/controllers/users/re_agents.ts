import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { TypedBody, TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Authorization } from "../decorators/authorization";
import { IREPortfolio } from "@APP/api/structures/IREPortfolio";

const route = "users/re-agents";

@Controller(route)
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
}

@Controller(route + "/me")
export class UsersREAgentsMeController {
    /**
     * 공인중개사 개인정보를 요청한다.
     *
     * 이메일, 휴대전화 등의 개인 정보는 마킹처리되어 전달된다.
     *
     * @summary 공인중개사 내 정보 조회
     *
     * @tag re-agents
     *
     * @param access_token 공인중개사 권한을 갖는 액세스 토큰
     *
     * @return 공인중개사 상세 정보
     */
    @TypedRoute.Get()
    get(
        @Authorization("access") access_token: string,
    ): Promise<IREAgent.IPrivate> {
        throw Error();
    }

    /**
     * 공인중개사 포트폴리오 추가
     *
     * @summary 공인중개사 포트폴리오 추가
     *
     * @tag re-agents
     *
     * @param body 포트폴리오 정보
     */
    @TypedRoute.Post("portfolios")
    create(@TypedBody() body: IREPortfolio.ICreateRequest): Promise<void> {
        throw Error();
    }

    /**
     * 내 포트폴리오 목록 검색
     *
     * @summary 내 포트폴리오 목록 조회
     *
     * @tag re-agents
     *
     * @param query 페이지 정보
     *
     * @return 포트폴리오 상세 정보 목록
     */
    @TypedRoute.Get("portfolios")
    getList(
        @TypedQuery() query: IREPortfolio.ISearch,
    ): Promise<IREPortfolio.IPaginatedPrivate> {
        throw Error();
    }
}

@Controller(route + "/:agent_id")
export class UsersREAgentsSomeoneController {
    /**
     * 공인 중개사의 공개 정보를 요청한다.
     *
     * @summary 공인 중개사 공개 프로필 정보 조회
     *
     * @tag re-agents
     *
     * @param agent_id 공인 중개사 id
     *
     * @return 공인 중개사 공개정보
     */
    @TypedRoute.Get()
    getOne(
        @TypedParam("agent_id") agent_id: string,
    ): Promise<IREAgent.IPublic> {
        throw Error();
    }

    /**
     * 공인 중개사 연락처 정보를 요청한다.
     *
     * @summary 공인 중개사 연락처 정보 조회
     *
     * @tag re-agents
     *
     * @param agent_id 공인 중개사 id
     *
     * @return 공인 중개사 연락처 정보
     */
    @TypedRoute.Get("contact")
    get(@TypedParam("agent_id") agent_id: string): Promise<IREAgent.IContact> {
        throw Error();
    }

    /**
     * 공인 중개사 포트폴리오 목록 검색
     *
     * @summary 공인 중개사 포트폴리오 목록 검색
     *
     * @tag re-agents
     *
     * @param agent_id 공인 중개사 id
     *
     * @param query 페이지 정보
     *
     * @return 포트폴리오 공개 정보 목록
     */
    @TypedRoute.Get("portfolios")
    getList(
        @TypedParam("agent_id") agent_id: string,
        @TypedQuery() query: IREPortfolio.ISearch,
    ): Promise<IREPortfolio.IPaginatedPublic> {
        throw Error();
    }
}
