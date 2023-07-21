import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ZipzoongCare } from "@APP/providers/zipzoong_care";
import { Authorization } from "./decorators/authorization";
import { httpResponse } from "./internal";

@Controller("zipzoong-cares")
export class ZipzoongCaresController {
    /**
     * 집중 케어 신청 API (임시)
     *
     * 휴대폰 인증을 완료한 일반 고객만 요청할 수 있다.
     *
     * 응답받은 presigned url을 통해 json 데이터를 업로드해야 한다.
     *
     * {@link IZipzoongCare.FailureCode.Request 에러 코드}
     *
     * @summary 집중 케어 신청
     *
     * @tag clients
     *
     * @param access_token Authorization access access_token
     *
     * @return presigned url - 집중 케어 요청 json 데이터를 업로드하기 위한 s3 presigned url
     */
    @TypedRoute.Put("request")
    async execute(
        @Authorization("access") access_token: string,
    ): Promise<string> {
        const result = await ZipzoongCare.Service.request()(access_token);
        return httpResponse(result);
    }

    /**
     * 집중 케어 목록 불러오기 (임시)
     *
     * 응답받은 url list는 각각 json 데이터를 응답받을 수 있다.
     *
     * 사업자만 요청할 수 있다.
     *
     * {@link IZipzoongCare.FailureCode.GetList 에러 코드}
     *
     * @summary 집중 케어 목록 불러오기
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @return 집중 케어 정보를 불러오기 위한 url list
     */
    @TypedRoute.Get()
    async getList(
        @Authorization("access") access_token: string,
    ): Promise<string[]> {
        const result = await ZipzoongCare.Service.getList()(access_token);
        return httpResponse(result);
    }
}

@Controller("zipzoong-cares/requests")
export class ZipzoongCaresRequestsController {
    /**
     * 집중 케어 신청 목록 불러오기 (임시)
     *
     * 응답받은 url list는 각각 json 데이터를 응답받을 수 있다.
     *
     * 일반 고객만 요청할 수 있다.
     *
     * {@link IZipzoongCare.FailureCode.GetRequestList 에러 코드}
     *
     * @summary 집중 케어 신청 목록 불러오기
     *
     * @tag re-agents
     *
     * @tag hs-providers
     *
     * @param access_token Authorization access access_token
     *
     * @return 집중 케어 신청 정보를 불러오기 위한 url list
     */
    @TypedRoute.Get()
    async getList(
        @Authorization("access") access_token: string,
    ): Promise<string[]> {
        const result = await ZipzoongCare.Service.getRequestList()(
            access_token,
        );
        return httpResponse(result);
    }
}
