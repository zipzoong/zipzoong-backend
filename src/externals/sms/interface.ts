import { IVerification } from "@APP/api";
import { ExternalFailure, InternalFailure, Result } from "@APP/utils";

export interface ISMS {
    send: (input: {
        message: ISMS.IMessage;
        /** @default COMM */
        contentType?: "COMM" | "AD";
    }) => Promise<
        Result<
            string,
            | ExternalFailure<"SMS.send">
            | InternalFailure<
                  | IVerification.FailureCode.PhoneInvalid
                  | IVerification.FailureCode.CountryCodeUnsupported
              >
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
