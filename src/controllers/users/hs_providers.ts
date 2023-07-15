import { TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Authorization } from "../decorators/authorization";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";

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

    /**
     * 생활서비스 전문가 개인정보를 요청한다.
     *
     * 이메일, 휴대전화 등의 개인 정보는 마킹처리되어 전달된다.
     *
     * @summary 생활서비스 전문가 내정보 조회
     *
     * @tag hs-providers
     *
     * @param access_token 생활서비스 전문가 권한을 갖은 액세스 토큰
     *
     * @return 생활서비스 전문가 프로필 정보
     */
    @TypedRoute.Get("me")
    get(
        @Authorization("access") access_token: string,
    ): Promise<IHSProvider.IPrivate> {
        throw Error();
    }

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
    @TypedRoute.Get(":provider_id")
    getOne(
        @TypedParam("provider_id") provider_id: string,
    ): Promise<IHSProvider.IPublic> {
        throw Error();
    }
}

@Controller(route + "/:provider_id/contact")
export class UsersHSProvidersContactController {
    /**
     * 생활서비스 전문가 연락처 정보를 요청한다.
     *
     * @summary 생활서비스 전문가 연락처 정보 조회
     *
     * @tag hs-providers
     *
     * @param provider_id 생활서비스 전문가 id
     *
     * @return 생활서비스 전문가 연락처 정보
     */
    @TypedRoute.Get()
    get(
        @TypedParam("provider_id") provider_id: string,
    ): Promise<IHSProvider.IContact> {
        throw Error();
    }
}
