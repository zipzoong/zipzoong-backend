import { ISMS } from "./interface";
import { Naver } from "./naver/sdk";

export const SMS: ISMS = { sendMessage: Naver.requestSendMessage };
