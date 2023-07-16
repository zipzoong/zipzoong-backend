import { Configuration } from "@APP/infrastructure/config";
import { Fetcher } from "@nestia/fetcher";
import { createHmac } from "crypto";
import { INaver } from "./interface";
import typia from "typia";
import { Result } from "@APP/utils";
import { ISMS } from "../interface";
import { Logger } from "@APP/infrastructure/logger";

export namespace Naver {
    const service_id = Configuration.NAVER_SENS_SERVICE_ID;
    const access_key = Configuration.NAVER_SENS_ACCESS_KEY;
    const secret_key = Configuration.NAVER_SENS_SECRET_KEY;
    const caller = Configuration.NAVER_SENS_CALLER;
    const host = Configuration.NAVER_SENS_HOST;
    interface ISignatureInput {
        method: "GET" | "POST";
        path: string;
        timestamp: number;
    }

    const signature = ({
        method,
        path,
        timestamp,
    }: {
        method: "GET" | "POST";
        path: string;
        timestamp: number;
    }): string =>
        createHmac("sha256", secret_key)
            .update(method)
            .update(" ")
            .update(path)
            .update("\n")
            .update(timestamp.toString())
            .update("\n")
            .update(access_key)
            .digest("base64");

    const headers = ({
        method,
        path,
        timestamp,
    }: ISignatureInput): Record<string, string> => ({
        ...(method === "POST"
            ? { "Content-Type": "application/json; charset=utf-8" }
            : {}),
        "x-ncp-apigw-timestamp": timestamp.toString(),
        "x-ncp-iam-access-key": access_key,
        "x-ncp-apigw-signature-v2": signature({
            method,
            path,
            timestamp,
        }),
    });

    /**
     * 네이버 sens 메시지 발송 API
     *
     * - 실패시 IError 객체 반환
     * - 성공시 요청 id 반환
     */
    export const requestSendMessage: ISMS["sendMessage"] = async ({
        messages,
    }) => {
        try {
            const method = "POST";
            const path = `/sms/v2/services/${service_id}/messages`;
            const timestamp = Date.now();
            const response = await Fetcher.fetch<
                INaver.ISendSMSInput,
                INaver.ISendMessageOutput
            >(
                {
                    host,
                    headers: headers({ method, path, timestamp }),
                },
                {
                    response: false,
                    status: 202,
                },
                method,
                path,
                {
                    type: "SMS",
                    from: caller,
                    content: "default",
                    messages,
                },
            );

            if (!typia.is<INaver.ISendMessageOutput>(response))
                return Result.Error.map("NAVER_SEND_MESSAGE_FAIL" as const);
            return Result.Ok.map(response.requestId);
        } catch (error) {
            Logger.get().error(
                (error as Error).stack ??
                    "Error: Fail to Naver Request Send Message.",
            );
            return Result.Error.map("NAVER_SEND_MESSAGE_FAIL" as const);
        }
    };
}
