import { IUpload } from "@APP/api/structures/IUpload";
import { IResult } from "@APP/api/types";
import { InternalError } from "@APP/utils";

export interface IStorage {
    /**
     * upload하기 위한 presigned url 발급 함수
     */
    getUploadUrl: (
        resource_type: IUpload.ResourceType | IUpload.CareRequestType,
    ) => Promise<IResult<IUpload, InternalError>>;
    /**
     * 리소스 접근을 위한 presigned url 발급 함수
     */
    getReadUrl: (input: {
        access_type: IUpload.AccessType;
        url: string;
    }) => Promise<string>;
}
