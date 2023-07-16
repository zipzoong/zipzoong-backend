import { IUpload } from "@APP/api/structures/IUpload";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("upload")
export class UploadController {
    /**
     * 리소를 업로드하기 위한 presigned url과 접근에 필요한 정보를 얻을 수 있다.
     *
     * presigned url의 사용법은 aws s3 presigned url을 확인할 것
     *
     * @summary 리소스 업로드용 presigned url 요청
     *
     * @tag resources
     *
     * @param body 리소스 유형 정보를 입력한다.
     *
     * @return 리소스 업로드 정보
     */
    @TypedRoute.Post()
    getUrl(@TypedBody() body: IUpload.IBody): Promise<IUpload> {
        throw Error();
    }
}