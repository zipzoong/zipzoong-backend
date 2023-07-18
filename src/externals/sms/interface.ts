import { IResult } from "@APP/api/types";
import { InternalError } from "@APP/utils";

export interface ISMS {
    send: (input: {
        message: ISMS.IMessage;
        /** @default COMM */
        contentType?: "COMM" | "AD";
    }) => Promise<
        IResult<
            string,
            "PHONE_INVALID" | "COUNTRY_CODE_UNSUPPORTED" | InternalError
        >
    >;
}

export namespace ISMS {
    export interface IMessage {
        /**
         * 수신번호
         *
         * +82 10-1234-5678 형식
         */
        to: string;
        /**
         * 메시지 내용
         */
        content: string;
    }
}
