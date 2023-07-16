import { IUpload } from "@APP/api/structures/IUpload";

export interface IStorage {
    /**
     * upload하기 위한 presigned url 발급 함수
     */
    getUploadUrl: (input: IUpload.IBody) => Promise<IUpload>;
    /**
     * 리소스 접근을 위한 presigned url 발급 함수
     */
    getReadUrl: (input: {
        access_type: IUpload.AccessType;
        resource_url: string;
    }) => Promise<string>;
}
