import { IUpload } from "@APP/api/structures/IUpload";
import { IResult } from "@APP/api/types";

export interface IStorage {
    /**
     * upload하기 위한 presigned url 발급 함수
     */
    getUploadUrl: (
        input: IUpload.IBody,
    ) => Promise<IResult<IUpload, `${string}_UPLOAD_URL_FAIL`>>;
    /**
     * 리소스 접근을 위한 presigned url 발급 함수
     */
    getReadUrl: (input: {
        access_type: IUpload.AccessType;
        resource_url: string;
    }) => Promise<IResult<string, `${string}_READ_URL_FAIL`>>;
}
