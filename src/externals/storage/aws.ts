import {
    PutObjectCommand,
    PutObjectCommandInput,
    S3Client,
} from "@aws-sdk/client-s3";
import { fromIni } from "@aws-sdk/credential-providers";
import { Hash } from "@aws-sdk/hash-node";
import { HttpRequest } from "@aws-sdk/protocol-http";
import {
    S3RequestPresigner,
    getSignedUrl,
} from "@aws-sdk/s3-request-presigner";
import { parseUrl } from "@aws-sdk/url-parser";
import { formatUrl } from "@aws-sdk/util-format-url";
import { randomUUID } from "crypto";
import { URL } from "url";
import { IUpload } from "@APP/api/structures/IUpload";
import { Configuration } from "@APP/infrastructure/config";
import { InternalError, Result } from "@APP/utils";
import { IStorage } from "./interface";

export namespace AWS {
    export namespace S3 {
        const client = new S3Client({ region: Configuration.AWS_REGION });
        const presigner = new S3RequestPresigner({
            credentials: fromIni(),
            region: Configuration.AWS_REGION,
            sha256: Hash.bind(null, "sha256"),
        });

        const PutCommand = (
            type: IUpload.ResourceType | IUpload.CareRequestType,
        ): PutObjectCommand => {
            const now = new Date();
            const year = now.getUTCFullYear();
            const month = `${now.getUTCMonth() + 1}`.padStart(2, "0");
            const date = `${now.getUTCDate()}`.padStart(2, "0");
            const input: PutObjectCommandInput = {
                Bucket: Configuration.AWS_S3,
                Key: undefined,
                Metadata: { version: "original" },
            };
            switch (type) {
                case "profile":
                    input.Key = `images/user_profiles/${year}${month}${date}_${randomUUID()}.jpeg`;
                    // input.ContentType = "image/jpeg"; -> 아무 기능도 못함
                    // input.ContentLength = 0; -> 이미지 사이즈 제한
                    break;
                case "portfolio":
                    input.Key = `images/portfolios/${year}${month}${date}_${randomUUID()}.jpeg`;
                    break;
                case "biz_certification":
                    input.Key = `images/biz_certifications/${year}${month}${date}_${randomUUID()}.jpeg`;
                    break;
                case "care_request":
                    input.Key = `josns/care_requests/${year}${month}${date}_${randomUUID()}.json`;
                    break;
            }
            return new PutObjectCommand(input);
        };

        const AccessType = (
            type: IUpload.ResourceType | IUpload.CareRequestType,
        ): IUpload.AccessType =>
            type === "biz_certification"
                ? "zipzoong_s3"
                : type === "care_request"
                ? "zipzoong_s3"
                : "public";

        export const getPresignedUploadUrl: IStorage["getUploadUrl"] = async (
            resource_type,
        ) => {
            try {
                const cmd = PutCommand(resource_type);
                const presigned_url = await getSignedUrl(client, cmd, {
                    expiresIn: 180, // 3min
                });
                const url = new URL(presigned_url);
                url.search = "";
                return Result.Ok.map({
                    access_type: AccessType(resource_type),
                    url: url.href,
                    presigned_url,
                });
            } catch (error) {
                return Result.Error.map(InternalError.create(error as Error));
            }
        };
        export const getPresignedReadUrl: IStorage["getReadUrl"] = async (
            input,
        ) => {
            if (input.access_type === "zipzoong_s3") {
                try {
                    const parsedUrl = parseUrl(input.url);
                    return formatUrl(
                        await presigner.presign(new HttpRequest(parsedUrl), {
                            expiresIn: 180, // 3min
                        }),
                    );
                } catch (error) {
                    return input.url;
                }
            }

            return input.url; // access_type is public
        };
    }
}
