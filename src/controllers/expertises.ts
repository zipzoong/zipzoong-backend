import { IExpertise } from "@APP/api/structures/IExpertise";
import { Expertise } from "@APP/providers/expertise";
import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("hs-expertises")
export class HSExpertisesController {
    /**
     * 생활서비스 상위 전문 분야 목록 불러오기
     *
     * @summary 생활서비스 상위 전문 분야 목록 조회
     *
     * @tag hs-providers
     *
     * @return 생활서비스 상위 전문 분야 전체 목록
     */
    @TypedRoute.Get()
    getList(): Promise<IExpertise.ISuper[]> {
        return Expertise.Service.HS.getList();
    }

    /**
     * 생활서비스 상위 전문 분야 조회
     *
     * @summary 생활서비스 상위 전문 분야 조회
     *
     * @tag hs-providers
     *
     * @param expertise_id 상위 전문분야 id
     *
     * @return 생활서비스 상위 전문 분야
     */
    @TypedRoute.Get(":expertise_id")
    get(
        @TypedParam("expertise_id") expertise_id: string,
    ): Promise<IExpertise.ISuper> {
        return Expertise.Service.HS.getOne(expertise_id);
    }
}

@Controller("re-expertises")
export class REExpertisesController {
    /**
     * 공인중개사 전문 분야 목록 불러오기
     *
     * @summary 공인중개사 전문 분야 목록 조회
     *
     * @tag re-agents
     *
     * @return 공인중개사 전문 분야 전체 목록
     */
    @TypedRoute.Get()
    getList(): Promise<IExpertise[]> {
        return Expertise.Service.RE.getList();
    }
}
