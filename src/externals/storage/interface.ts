import { IUpload } from "@APP/api/structures/IUpload";
import { ExternalFailure, Result } from "@APP/utils";

export interface IStorage {
    /**
     * upload하기 위한 presigned url 발급 함수
     */
    getUploadUrl: (
        resource_type: IUpload.ResourceType | IUpload.CareRequestType,
    ) => Promise<Result<IUpload, ExternalFailure<"Storage.getUploadUrl">>>;
    /**
     * 리소스 접근을 위한 presigned url 발급 함수
     */
    getReadUrl: (input: {
        access_type: IUpload.AccessType;
        url: string;
    }) => Promise<string>;
}
