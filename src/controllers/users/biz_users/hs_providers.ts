import { TypedBody, TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IHSPortfolio } from "@APP/api/structures/IHSPortfolio";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { HSPortfolio } from "@APP/providers/hs_portfolio";
import { HSProvider } from "@APP/providers/user/hs_provider";
import { Authorization } from "../../decorators/authorization";
import { httpResponse } from "../../internal";

const route = "users/biz-users/hs-providers";

@Controller(route)
export class UsersHSProvidersController {
    /**
     * 검색기준에 맞는 인증된 생활서비스 전문가 간단 정보 목록을 확안할 수 있다.
     *
     * @summary 생활서비스 전문가 목록 검색
     *
     * @tag hs-providers
     *
     * @param query 필터링, 정렬 기준
     *
     * @return 생활서비스 전문가 간단 정보 목록
     */
    @TypedRoute.Get()
    getList(
        @TypedQuery() query: IHSProvider.ISearch,
    ): Promise<IHSProvider.IPaginatedSummary> {
        return HSProvider.Service.getList(query);
    }
}

@Controller(route + "/me")
export class UsersHSProvidersMeController {
    /**
     * 생활서비스 전문가 개인정보를 요청한다.
     *
     * 이메일, 휴대전화 등의 개인 정보는 마킹처리되어 전달된다.
     *
     * {@link IHSProvider.FailureCode.GetPrivate 에러 코드}
     *
     * @summary 생활서비스 전문가 내 정보 조회
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @return 생활서비스 전문가 상세 정보
     */
    @TypedRoute.Get()
    async get(
        @Authorization("access") access_token: string,
    ): Promise<IHSProvider.IPrivate> {
        const result = await HSProvider.Service.getPrivate()(access_token);
        return httpResponse(result);
    }

    /**
     * 생활서비스 전문가 포트폴리오 추가
     *
     * {@link IHSPortfolio.FailureCode.Create 에러 코드}
     *
     * @summary 생활서비스 전문가 포트폴리오 추가
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @param body 포트폴리오 정보
     */
    @TypedRoute.Post("portfolios")
    async create(
        @Authorization("access") access_token: string,
        @TypedBody() body: IHSPortfolio.ICreateRequest,
    ): Promise<void> {
        const result = await HSPortfolio.Service.create()(access_token)(body);
        httpResponse(result);
    }

    /**
     * 내 포트폴리오 목록 검색
     *
     * {@link IHSPortfolio.FailureCode.GetPrivateList 에러 코드}
     *
     * @summary 내 포트폴리오 목록 조회
     *
     * @tag hs-providers
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
        @TypedQuery() query: IHSPortfolio.ISearch,
    ): Promise<IHSPortfolio.IPaginatedPrivate> {
        const result = await HSPortfolio.Service.getPrivateList(access_token)(
            query,
        );
        return httpResponse(result);
    }
}

@Controller(route + "/:provider_id")
export class UsersHSProvidersSomeoneController {
    /**
     * 생활서비스 전문가의 공개 정보를 요청한다.
     *
     * {@link IHSProvider.FailureCode.GetPublic 에러 코드}
     *
     * @summary 생활서비스 전문가 공개 프로필 정보 조회
     *
     * @tag hs-providers
     *
     * @param provider_id 생활서비스 전문가 id
     *
     * @return 생활서비스 전문가 공개정보
     */
    @TypedRoute.Get()
    async getOne(
        @TypedParam("provider_id") provider_id: string,
    ): Promise<IHSProvider.IPublic> {
        const result = await HSProvider.Service.getPublic()(provider_id);
        return httpResponse(result);
    }

    /**
     * 생활서비스 전문가 연락처 정보를 요청한다.
     *
     * {@link IHSProvider.FailureCode.GetContact 에러 코드}
     *
     * @summary 생활서비스 전문가 연락처 정보 조회
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @param provider_id 생활서비스 전문가 id
     *
     * @return 생활서비스 전문가 연락처 정보
     */
    @TypedRoute.Get("contact")
    async get(
        @Authorization("access") access_token: string,
        @TypedParam("provider_id") provider_id: string,
    ): Promise<IHSProvider.IContact> {
        const result = await HSProvider.Service.getContact()(access_token)(
            provider_id,
        );
        return httpResponse(result);
    }

    /**
     * 생활서비스 전문가 포트폴리오 목록 검색
     *
     * {@link IHSPortfolio.FailureCode.GetPublicList 에러 코드}
     *
     * @summary 생활서비스 전문가 포트폴리오 목록 검색
     *
     * @tag hs-providers
     *
     * @param provider_id 생활서비스 전문가 id
     *
     * @param query 페이지 정보
     *
     * @return 포트폴리오 공개 정보 목록
     */
    @TypedRoute.Get("portfolios")
    async getList(
        @TypedParam("provider_id") provider_id: string,
        @TypedQuery() query: IHSPortfolio.ISearch,
    ): Promise<IHSPortfolio.IPaginatedPublic> {
        const result = await HSPortfolio.Service.getPublicList(provider_id)(
            query,
        );
        return httpResponse(result);
    }
}
