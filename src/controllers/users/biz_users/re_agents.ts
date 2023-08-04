import { TypedBody, TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IREPortfolio } from "@APP/api/structures/IREPortfolio";
import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { REPortfolio } from "@APP/providers/re_portfolio";
import { REAgent } from "@APP/providers/user/re_agent";
import { Authorization } from "../../decorators/authorization";
import { httpResponse } from "../../internal";
import { prisma } from "@APP/infrastructure/DB";

const route = "users/biz-users/re-agents";

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
        return REAgent.Service.getList(query);
    }
}

@Controller(route + "/me")
export class UsersREAgentsMeController {
    /**
     * 공인중개사 개인정보를 요청한다.
     *
     * 이메일, 휴대전화 등의 개인 정보는 마킹처리되어 전달된다.
     *
     * {@link IREAgent.FailureCode.GetPrivate 에러 코드}
     *
     * @summary 공인중개사 내 정보 조회
     *
     * @tag re-agents
     *
     * @param access_token Authorization access access_token
     *
     * @return 공인중개사 상세 정보
     */
    @TypedRoute.Get()
    async get(
        @Authorization("access") access_token: string,
    ): Promise<IREAgent.IPrivate> {
        const result = await REAgent.Service.getPrivate()(access_token);
        return httpResponse(result);
    }

    /**
     * 공인중개사 포트폴리오 추가
     *
     * {@link IREPortfolio.FailureCode.Create 에러 코드}
     *
     * @summary 공인중개사 포트폴리오 추가
     *
     * @tag re-agents
     *
     * @param access_token Authorization access access_token
     *
     * @param body 포트폴리오 정보
     */
    @TypedRoute.Post("portfolios")
    async create(
        @Authorization("access") access_token: string,
        @TypedBody() body: IREPortfolio.ICreateRequest,
    ): Promise<void> {
        const result = await REPortfolio.Service.create()(access_token)(body);
        httpResponse(result);
    }

    /**
     * 내 포트폴리오 목록 검색
     *
     * {@link IREPortfolio.FailureCode.GetPrivateList 에러 코드}
     *
     * @summary 내 포트폴리오 목록 조회
     *
     * @tag re-agents
     *
     * @param access_token Authorization access access_token
     *
     * @param query 페이지 정보
     *
     * @return 포트폴리오 상세 정보 목록
     */
    @TypedRoute.Get("portfolios")
    async getList(
        @Authorization("access") access_token: string,
        @TypedQuery() query: IREPortfolio.ISearch,
    ): Promise<IREPortfolio.IPaginatedPrivate> {
        const result = await REPortfolio.Service.getPrivateList(access_token)(
            query,
        );
        return httpResponse(result);
    }
}

@Controller(route + "/me/real-estate")
export class UsersREAgentsBIZInfoUpdateController {
    /**
     * 공인중개사 부동산 정보 수정
     *
     * {@link IREAgent.FailureCode.UpdateRealEstate 에러 코드}
     *
     * @summary 공인중개사 부동산 정보 수정
     *
     * @tag re-agents
     *
     * @param access_token Authorization access access_token
     *
     * @param body 부동산 정보
     */
    @TypedRoute.Put()
    update(
        @Authorization("access") access_token: string,
        @TypedBody() body: IREAgent.IUpdate.IRealEstate,
    ): Promise<void> {
        return prisma.$transaction(async (tx) => {
            const result = await REAgent.Service.updateRealEstate(tx)(
                access_token,
            )(body);
            httpResponse(result);
        });
    }
}

@Controller(route + "/me/expertise")
export class UsersREAgentsExpertiseUpdateController {
    /**
     * 공인중개사 전문 분야 수정
     *
     * {@link IREAgent.FailureCode.UpdateExpertise 에러 코드}
     *
     * @summary 공인중개사 전문 분야 수정
     *
     * @tag re-agents
     *
     * @param access_token Authorization access access_token
     *
     * @param body 전문 분야
     */
    @TypedRoute.Put()
    update(
        @Authorization("access") access_token: string,
        @TypedBody() body: IREAgent.IUpdate.IExpertise,
    ): Promise<void> {
        return prisma.$transaction(async (tx) => {
            const result = await REAgent.Service.updateExpertise(tx)(
                access_token,
            )(body);
            httpResponse(result);
        });
    }
}

@Controller(route + "/:agent_id")
export class UsersREAgentsSomeoneController {
    /**
     * 공인 중개사의 공개 정보를 요청한다.
     *
     * {@link IREAgent.FailureCode.GetPublic 에러 코드}
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
    async getOne(
        @TypedParam("agent_id") agent_id: string,
    ): Promise<IREAgent.IPublic> {
        const result = await REAgent.Service.getPublic()(agent_id);
        return httpResponse(result);
    }

    /**
     * 공인 중개사 연락처 정보를 요청한다.
     *
     * {@link IREAgent.FailureCode.GetContact 에러 코드}
     *
     * @summary 공인 중개사 연락처 정보 조회
     *
     * @tag re-agents
     *
     * @param access_token Authorization access access_token
     *
     * @param agent_id 공인 중개사 id
     *
     * @return 공인 중개사 연락처 정보
     */
    @TypedRoute.Get("contact")
    async get(
        @Authorization("access") access_token: string,
        @TypedParam("agent_id") agent_id: string,
    ): Promise<IREAgent.IContact> {
        const result = await REAgent.Service.getContact()(access_token)(
            agent_id,
        );
        return httpResponse(result);
    }

    /**
     * 공인 중개사 포트폴리오 목록 검색
     *
     * {@link IREPortfolio.FailureCode.GetPublicList 에러 코드}
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
    async getList(
        @TypedParam("agent_id") agent_id: string,
        @TypedQuery() query: IREPortfolio.ISearch,
    ): Promise<IREPortfolio.IPaginatedPublic> {
        const result = await REPortfolio.Service.getPublicList(agent_id)(query);
        return httpResponse(result);
    }
}
