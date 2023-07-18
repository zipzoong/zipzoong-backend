import { IUser } from "@APP/api/structures/user/IUser";
import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { TypedBody, TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Authorization } from "../../decorators/authorization";
import { IREPortfolio } from "@APP/api/structures/IREPortfolio";
import { REAgent } from "@APP/providers/user/re_agent";
import { httpResponse } from "../../internal";
import { IBIZUser } from "@APP/api/structures/user/IBIZUser";

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
     * {@link IUser.FailureCode.GetProfile 에러 코드}
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
    async get(
        @Authorization("access") access_token: string,
    ): Promise<IREAgent.IPrivate> {
        const result = await REAgent.Service.getProfile()(access_token);
        return httpResponse(result);
    }

    /**
     * 공인중개사 포트폴리오 추가
     *
     * @summary 공인중개사 포트폴리오 추가
     *
     * @tag re-agents
     *
     * @param access_token 공인중개사 권한을 갖는 액세스 토큰
     *
     * @param body 포트폴리오 정보
     */
    @TypedRoute.Post("portfolios")
    create(
        @Authorization("access") access_token: string,
        @TypedBody() body: IREPortfolio.ICreateRequest,
    ): Promise<void> {
        throw Error();
    }

    /**
     * 내 포트폴리오 목록 검색
     *
     * @summary 내 포트폴리오 목록 조회
     *
     * @tag re-agents
     *
     * @param access_token 공인중개사 권한을 갖는 액세스 토큰
     *
     * @param query 페이지 정보
     *
     * @return 포트폴리오 상세 정보 목록
     */
    @TypedRoute.Get("portfolios")
    getList(
        @Authorization("access") access_token: string,
        @TypedQuery() query: IREPortfolio.ISearch,
    ): Promise<IREPortfolio.IPaginatedPrivate> {
        throw Error();
    }
}

@Controller(route + "/me/certifications")
export class UsersREAgentsMeCertificationsController {
    /**
     * 제출한 사업자 인증 서류 이미지 목록 조회
     *
     * {@link IUser.FailureCode.Authorize 에러 코드}
     *
     * @summary 사업자 인증 서류 이미지 목록 조회
     *
     * @tag re-agents
     *
     * @param access_token 사업자 권한을 가진 액세스 토큰
     *
     * @return 사업자 인증 서류 이미지 url 목록
     */
    @TypedRoute.Get()
    async getList(
        @Authorization("access") access_token: string,
    ): Promise<string[]> {
        const result = await REAgent.Service.getBIZCertificationList()(
            access_token,
        );
        return httpResponse(result);
    }

    /**
     * 사업자 인증 서류 이미지 추가
     *
     * {@link IUser.FailureCode.Authorize 에러 코드}
     *
     * @summary 사업자 인증 서류 이미지 추가
     *
     * @tag re-agents
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
        const result = await REAgent.Service.createBIZCertificationImage()(
            access_token,
        )(body);
        httpResponse(result);
    }
}

@Controller(route + "/:agent_id")
export class UsersREAgentsSomeoneController {
    /**
     * 공인 중개사의 공개 정보를 요청한다.
     *
     * {@link IUser.FailureCode.GetPublic 에러 코드}
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
     * {@link IUser.FailureCode.GetContact 에러 코드}
     *
     * @summary 공인 중개사 연락처 정보 조회
     *
     * @tag re-agents
     *
     * @param access_token 아무 사용자 권한을 갖는 액세스 토큰
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
