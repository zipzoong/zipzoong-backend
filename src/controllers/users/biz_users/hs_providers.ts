import { TypedBody, TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IHSPortfolio } from "@APP/api/structures/IHSPortfolio";
import { IBIZUser } from "@APP/api/structures/user/IBIZUser";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
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
     * {@link IHSProvider.FailureCode.GetProfile 에러 코드}
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
    async get(
        @Authorization("access") access_token: string,
    ): Promise<IHSProvider.IPrivate> {
        const result = await HSProvider.Service.getProfile()(access_token);
        return httpResponse(result);
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
    async create(
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

@Controller(route + "/me/certifications")
export class UsersHSProvidersMeCertificationsController {
    /**
     * 제출한 사업자 인증 서류 이미지 목록 조회
     *
     * {@link IHSProvider.FailureCode.GetCertificationList 에러 코드}
     *
     * @summary 사업자 인증 서류 이미지 목록 조회
     *
     * @tag hs-providers
     *
     * @param access_token 사업자 권한을 가진 액세스 토큰
     *
     * @return 사업자 인증 서류 이미지 url 목록
     */
    @TypedRoute.Get()
    async getList(
        @Authorization("access") access_token: string,
    ): Promise<string[]> {
        const result = await HSProvider.Service.getCertificationList()(
            access_token,
        );
        return httpResponse(result);
    }

    /**
     * 사업자 인증 서류 이미지 추가
     *
     * {@link IHSProvider.FailureCode.CreateCertification 에러 코드}
     *
     * @summary 사업자 인증 서류 이미지 추가
     *
     * @tag hs-providers
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
        const result = await HSProvider.Service.createCertification()(
            access_token,
        )(body);
        httpResponse(result);
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
     * @param access_token 아무 사용자 권한을 갖는 액세스 토큰
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
