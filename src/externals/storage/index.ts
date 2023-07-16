import { AWS } from "./aws";
import { IStorage } from "./interface";

export const Storage: IStorage = {
    getUploadUrl: AWS.S3.getPresignedUploadUrl,
    getReadUrl: AWS.S3.getPresignedReadUrl,
};
