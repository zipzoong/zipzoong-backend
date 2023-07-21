import { isUndefined } from "@fxts/core";
import { Fetcher } from "@nestia/fetcher";
import { createHmac } from "crypto";
import typia from "typia";
import { Configuration } from "@APP/infrastructure/config";
import { InternalError, Result } from "@APP/utils";
import { ISMS } from "../interface";
import { INaver } from "./interface";

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
    export const requestSendMessage: ISMS["send"] = async ({
        message,
        contentType = "COMM",
    }) => {
        try {
            const method = "POST";
            const path = `/sms/v2/services/${service_id}/messages`;
            const timestamp = Date.now();
            const [countryCode, phone] = message.to.slice(1).split(" ");

            if (isUndefined(countryCode) || isUndefined(phone))
                return Result.Error.map("PHONE_INVALID" as const);
            if (!typia.is<INaver.CountryCode>(countryCode))
                return Result.Error.map("COUNTRY_CODE_UNSUPPORTED" as const);

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
                    content: "default",
                    contentType,
                    from: caller,
                    countryCode,
                    messages: [
                        {
                            to: phone.replaceAll("-", ""),
                            content: message.content,
                        },
                    ],
                },
            );
            return Result.Ok.map(response.requestId);
        } catch (error) {
            return Result.Error.map(InternalError.create(error as Error));
        }
    };
}
