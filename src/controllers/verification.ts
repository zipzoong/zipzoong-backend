import { IVerification } from "@APP/api/structures/IVerification";
import { Verification } from "@APP/providers/verification";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller, HttpCode, HttpStatus } from "@nestjs/common";
import { httpResponse } from "./internal";

const route = "verification/phones";

@Controller(route)
export class VerificationPhonesController {
    /**
     * 휴대전화 인증 정보를 생성한다.
     *
     * 해당 API를 호출시, 전달된 휴대폰 번호로 문자를 전송합니다.
     *
     * 5분뒤 만료됩니다.
     *
     * {@link IVerification.FailureCode.CreatePhone 에러 코드}
     *
     * @summary 휴대전화 인증 정보 생성
     *
     * @tag verification
     *
     * @param body 인증받을 휴대전화 번호
     *
     * @return 인증 만료일자(생성일로부터 5분)
     */
    @TypedRoute.Post()
    async create(
        @TypedBody() body: IVerification.IRequest.ICreatePhone,
    ): Promise<IVerification.IResponse.ICreate> {
        const result = await Verification.Service.createPhone(body);
        return httpResponse(result);
    }
}

@Controller(route + "/verify")
export class VerificationPhonesVerifyController {
    /**
     * 생성된 인증 정보에 대해 인증을 진행하는 요청이다.
     *
     * {@link IVerification.FailureCode.VerifyPhone 에러 코드}
     *
     * @summary 휴대전화 인증
     *
     * @tag verification
     *
     * @param body 인증 코드와 휴대전화
     *
     * @return 인증 정보 id
     */
    @HttpCode(HttpStatus.OK)
    @TypedRoute.Post()
    async execute(
        @TypedBody() body: IVerification.IRequest.IVerifyPhone,
    ): Promise<IVerification.IResponse.IVerify> {
        const result = await Verification.Service.verifyPhone(body);
        return httpResponse(result);
    }
}
