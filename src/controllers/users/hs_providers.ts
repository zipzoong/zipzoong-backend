import { TypedBody, TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Authorization } from "../decorators/authorization";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { IHSPortfolio } from "@APP/api/structures/IHSPortfolio";

const route = "users/hs-providers";

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
        throw Error("");
    }
}

@Controller(route + "/me")
export class UsersHSProvidersMeController {
    /**
     * 생활서비스 전문가 개인정보를 요청한다.
     *
     * 이메일, 휴대전화 등의 개인 정보는 마킹처리되어 전달된다.
     *
     * @summary 생활서비스 전문가 내 정보 조회
     *
     * @tag hs-providers
     *
     * @param access_token 생활서비스 전문가 권한을 갖는 액세스 토큰
     *
     * @return 생활서비스 전문가 상세 정보
     */
    @TypedRoute.Get()
    get(
        @Authorization("access") access_token: string,
    ): Promise<IHSProvider.IPrivate> {
        throw Error();
    }

    /**
     * 생활서비스 전문가 포트폴리오 추가
     *
     * @summary 생활서비스 전문가 포트폴리오 추가
     *
     * @tag hs-providers
     *
     * @param access_token 생활서비스 전문가 권한을 갖는 액세스 토큰
     *
     * @param body 포트폴리오 정보
     */
    @TypedRoute.Post("portfolios")
    create(
        @Authorization("access") access_token: string,
        @TypedBody() body: IHSPortfolio.ICreateRequest,
    ): Promise<void> {
        throw Error();
    }

    /**
     * 내 포트폴리오 목록 검색
     *
     * @summary 내 포트폴리오 목록 조회
     *
     * @tag hs-providers
     *
     * @param access_token 생활서비스 전문가 권한을 갖는 액세스 토큰
     *
     * @param query 페이지 정보
     *
     * @return 포트폴리오 상세 정보 목록
     */
    @TypedRoute.Get("portfolios")
    getList(
        @Authorization("access") access_token: string,
        @TypedQuery() query: IHSPortfolio.ISearch,
    ): Promise<IHSPortfolio.IPaginatedPrivate> {
        throw Error();
    }
}

@Controller(route + "/:provider_id")
export class UsersHSProvidersSomeoneController {
    /**
     * 생활서비스 전문가의 공개 정보를 요청한다.
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
    getOne(
        @TypedParam("provider_id") provider_id: string,
    ): Promise<IHSProvider.IPublic> {
        throw Error();
    }

    /**
     * 생활서비스 전문가 연락처 정보를 요청한다.
     *
     * @summary 생활서비스 전문가 연락처 정보 조회
     *
     * @tag hs-providers
     *
     * @param access_token 아무 사용자 권한을 갖는 액세스 토큰
     *
     * @param provider_id 생활서비스 전문가 id
     *
     * @return 생활서비스 전문가 연락처 정보
     */
    @TypedRoute.Get("contact")
    get(
        @TypedParam("provider_id") provider_id: string,
    ): Promise<IHSProvider.IContact> {
        throw Error();
    }

    /**
     * 생활서비스 전문가 포트폴리오 목록 검색
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
    getList(
        @TypedParam("provider_id") provider_id: string,
        @TypedQuery() query: IHSPortfolio.ISearch,
    ): Promise<IHSPortfolio.IPaginatedPublic> {
        throw Error();
    }
}
