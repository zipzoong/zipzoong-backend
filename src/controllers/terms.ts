import { ITerms } from "@APP/api/structures/ITerms";
import { Terms } from "@APP/providers/terms";
import { TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("terms")
export class TermsController {
    /**
     * 약관 목록 검색
     *
     * @summary 약관 목록 조회
     *
     * @tag terms
     *
     * @param query 검색 결과에 포함시킬 유형 정보를 포함한다.
     *
     * @return 약관 목록
     */
    @TypedRoute.Get()
    getList(@TypedQuery() query: ITerms.ISearch): Promise<ITerms[]> {
        return Terms.Service.getList(query);
    }
}
