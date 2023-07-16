import {
    PutObjectCommand,
    PutObjectCommandInput,
    S3Client,
} from "@aws-sdk/client-s3";
import { IStorage } from "./interface";
import { Configuration } from "@APP/infrastructure/config";
import { IUpload } from "@APP/api/structures/IUpload";
import { randomUUID } from "crypto";
import {
    S3RequestPresigner,
    getSignedUrl,
} from "@aws-sdk/s3-request-presigner";
import { URL } from "url";
import { Hash } from "@aws-sdk/hash-node";
import { fromIni } from "@aws-sdk/credential-providers";
import { formatUrl } from "@aws-sdk/util-format-url";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { parseUrl } from "@aws-sdk/url-parser";
import { isUndefined } from "@fxts/core";

export namespace AWS {
    export namespace S3 {
        const client = new S3Client({ region: Configuration.AWS_REGION });
        const presigner = new S3RequestPresigner({
            credentials: fromIni(),
            region: Configuration.AWS_REGION,
            sha256: Hash.bind(null, "sha256"),
        });

        const PutCommand = (type: IUpload.ResourceType): PutObjectCommand => {
            const now = new Date();
            const year = now.getUTCFullYear();
            const month = `${now.getUTCMonth() + 1}`.padStart(2, "0");
            const date = `${now.getUTCDate()}`.padStart(2, "0");
            const input: PutObjectCommandInput = {
                Bucket: Configuration.AWS_S3,
                Key: undefined,
                Metadata: {
                    "x-amz-meta-size": "original",
                },
            };
            switch (type) {
                case "profile":
                    input.Key = `images/user_profiles/${year}${month}${date}_${randomUUID()}`;
                    input.ContentType = "image/*";
                    break;
                case "portfolio":
                    input.Key = `images/portfolios/${year}${month}${date}_${randomUUID()}`;
                    input.ContentType = "image/*";
                    break;
                case "biz_certification":
                    input.Key = `images/biz_certifications/${year}${month}${date}_${randomUUID()}`;
                    input.ContentType = "image/*";
                    break;
            }
            return new PutObjectCommand(input);
        };

        const AccessType = (type: IUpload.ResourceType): IUpload.AccessType =>
            type === "biz_certification" ? "zipzoong_s3" : "public";

        export const getPresignedUploadUrl: IStorage["getUploadUrl"] = async (
            input,
        ) => {
            try {
                const cmd = PutCommand(input.resource_type);
                const presigned_url = await getSignedUrl(client, cmd, {
                    expiresIn: 180, // 3min
                });
                const url = new URL(presigned_url);
                url.search = "";
                return {
                    access_type: AccessType(input.resource_type),
                    url: url.href,
                    presigned_url,
                };
            } catch (error) {
                if (isUndefined((error as Error).stack))
                    throw Error("Fail to AWS Presigned Url For Upload");
                throw error;
            }
        };
        export const getPresignedReadUrl: IStorage["getReadUrl"] = async (
            input,
        ) => {
            if (input.access_type === "zipzoong_s3") {
                try {
                    const parsedUrl = parseUrl(input.resource_url);
                    return formatUrl(
                        await presigner.presign(new HttpRequest(parsedUrl)),
                    );
                } catch (error) {
                    if (isUndefined((error as Error).stack))
                        throw Error("Fail to AWS Presigned Url For READ");

                    throw error;
                }
            }

            return input.resource_url; // access_type is public
        };
    }
}
