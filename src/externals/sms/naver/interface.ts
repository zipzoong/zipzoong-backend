export namespace INaver {
    /**
     * - COMM: 일반 메시지
     * - AD: 광고 메시지
     */
    type MessageType = "COMM" | "AD";
    type MessageSendType = "READY" | "PROCESSING" | "COMPLETED";
    type CountryCode =
        | "82"
        | "1"
        | "886"
        | "81"
        | "86"
        | "65"
        | "852"
        | "62"
        | "60"
        | "63"
        | "673"
        | "84"
        | "856"
        | "95"
        | "855"
        | "853"
        | "880"
        | "91"
        | "92"
        | "966"
        | "971"
        | "374"
        | "994"
        | "93"
        | "355"
        | "967"
        | "968"
        | "962"
        | "998"
        | "380"
        | "972"
        | "20"
        | "965"
        | "996"
        | "992"
        | "90"
        | "993"
        | "64"
        | "61"
        | "675"
        | "30"
        | "31"
        | "47"
        | "45"
        | "49"
        | "371"
        | "7"
        | "961"
        | "40"
        | "352"
        | "370"
        | "389"
        | "356"
        | "973"
        | "32"
        | "375"
        | "387"
        | "359"
        | "381"
        | "46"
        | "41"
        | "34"
        | "421"
        | "386"
        | "353"
        | "372"
        | "44"
        | "43"
        | "39"
        | "420"
        | "385"
        | "357"
        | "351"
        | "48"
        | "33"
        | "358"
        | "36";

    interface ISendMessageInputBase<T extends string> {
        type: T;
        /**
         * 메시지 Type
         *
         * - COMM: 일반메시지
         * - AD: 광고메시지
         * @default COMM
         */
        contentType?: MessageType;
        /**
         * 국가 번호
         *
         * - SENS에서 제공하는 국가로의 발송만 가능
         * - {@link https://guide.ncloud-docs.com/docs/sens-smspolicy 국제 SMS 발송 국가 목록}
         * @default 82
         */
        countryCode?: CountryCode;
        /**
         * 발신번호
         *
         * 사전 등록된 발신번호만 사용 가능
         */
        from: string;
        /**
         * 기본 메시지 내용
         *
         * 개별 메시지가 없는 경우, 해당 내용이 전송된다.
         * - SMS: 최대 80byte
         * - LMS, MMS: 최대 2000byte
         */
        content: string;
        /**
         * 메시지 정보
         * @maxItems 100
         */
        messages: {
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
        }[];
    }
    /**
     * 주의
     * - 최대 지원 가능한 사이즈를 초과하면 일부 내용이 잘림 처리되어 발송됩니다.
     * - 메시지(subject, content) 인코딩은 EUC-KR 기준으로 발송되며 지원하지 않는 이모지 문자를 포함하면 발송에 실패합니다.
     *
     * 참고
     * - messages 내에 subject, content를 정의하지 않으면 기본 subject, content로 지정된 값으로 발송됩니다.
     * - messages 내에 subject, content가 기본 subject, content 보다 우선 순위가 높습니다.
     * - MMS type이지만 첨부하려는 파일이 없으면 LMS로 발송됩니다.
     * - reserveTime, scheduleCode를 모두 요청하는 경우 예약 발송으로 처리됩니다. (예약 발송이 우선순위가 높습니다.)
     */
    export interface ISendSMSInput extends ISendMessageInputBase<"SMS"> {}

    export interface ISendMessageOutput {
        /**
         * 요청 아이디
         */
        readonly requestId: string;
        /**
         * 요청 시간
         * @format date-time
         */
        readonly requestTime: string;
        /**
         * 요청 상태 코드
         *
         * - 202: 성공
         * - 그 외: 실패
         * - HTTP Status 규격을 따름
         */
        readonly statusCode: "202";
        /**
         * 요청 상태명
         */
        readonly statusName: "success";
    }

    export interface IGetSendMessageRequestOutput {
        /**
         * 메시징 서버로의 발송 요청 상태
         */
        readonly statusCode: "202";
        /**
         * 메시징 서버로의 발송 요청 상태명
         */
        readonly statusName: "success";
        readonly messages: IMessageRequest[];
    }
    export interface IMessageRequest {
        /**
         * 메시지 요청 아이디
         */
        readonly requestId: string;
        /** 메시지 아이디 */
        readonly messageId: string;
        /**
         * 발송 요청 시간
         *
         * yyyy-MM-dd HH:mm:SS
         */
        readonly requestTime: string;
        /** 콘텐츠 타입 */
        readonly contentType: MessageType;
        /** 메세지 타입 */
        readonly type: "SMS";
        /** 국가 코드 */
        readonly countryCode: CountryCode;
        /** 메세지 발신 번호 */
        readonly from: string;
        /** 수신번호 */
        readonly to: string;
        /** 발송 요청 상태 */
        readonly status: MessageSendType;
        /**
         * 발송 완료 시간
         *
         * yyyy-MM-dd HH:mm:SS
         */
        readonly completeTime?: string;
        /** 통신사코드 */
        readonly telcoCode?: string;
        /** 단말 수신 상태 결과 코드	 */
        readonly statusCode?: string;
        /** 단말 수신 상태 결과명	 */
        readonly statusName?: string;
        /** 단말 수신 상태 결과 메시지 */
        readonly statusMessage?: string;
    }

    export interface IGetMessageOutput {
        /**
         * 메시징 서버로의 발송 요청 상태
         * - 200: 성공
         * - 그 외: 실패
         */
        readonly statusCode: "200";
        /**
         * 메시징 서버로의 발송 요청 상태명
         */
        readonly statusName: "success";
        readonly messages: IMessage[];
    }
    export interface IMessage {
        /**
         * 요청 시간
         *
         * yyyy-MM-dd HH:mm:SS
         */
        readonly requestTime: string;
        /**
         * 콘텐츠 Type
         */
        readonly contentType: MessageType;
        /**
         * 메시지 내용
         *
         * 발송 요청했던 content가 그대로 조회나 실제 발송은 type별 길이 제한에 맞춰 발송
         */
        readonly content: string;
        /** 국가 번호 */
        readonly countryCode: CountryCode;
        /** 발신번호 */
        readonly from: string;
        /** 수신번호 */
        readonly to: string;
        /**
         * 메시징 서버에서의 발송 처리 상태
         */
        readonly status: MessageSendType;
        /**
         * 단말 수신 상태 결과 코드
         */
        readonly statusCode?: string;
        /**
         * 단말 수신 상태 결과명
         */
        readonly statusMessage?: string;
        /**
         * 단말 수신 상태 결과 메시지
         */
        readonly statusName?: string;
        /**
         * 발송 완료 시간
         *
         * yyyy-MM-dd HH:mm:SS
         */
        readonly completeTime?: string;
        /** 통신사코드 */
        readonly telcoCode?: string;
    }
}
