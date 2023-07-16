import { IResult } from "@APP/api/types";

export interface ISMS {
    sendMessage: (input: {
        messages: ISMS.IMessage[];
    }) => Promise<IResult<string, `${string}_SEND_MESSAGE_FAIL`>>;
}

export namespace ISMS {
    export interface IMessage {
        /**
         * 수신번호
         *
         * 붙임표 ( - )를 제외한 숫자만 입력 가능
         */
        to: string;
        /**
         * 개별 메시지 내용
         *
         * 개별 메시지가 존재하면, 기본 메시지 내용은 포함되지 않는다.
         * - SMS: 최대 80byte
         * - LMS, MMS: 최대 2000byte
         */
        content: string;
    }
}
