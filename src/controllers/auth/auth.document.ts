import { TypedRoute } from "@nestia/core";
import { Controller, HttpCode, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
import { Kakao } from "@APP/externals/oauth/kakao/sdk";

@Controller("auth/oauth")
export class AuthOauthController {
    /**
     * 카카오 로그인 페이지 리다이렉트 api
     *
     * @summary redirect kakao oauth login page
     *
     * @tag authentication
     */
    @HttpCode(HttpStatus.FOUND)
    @TypedRoute.Get("kakao")
    redirectToKakao(@Res() res: Response) {
        return res.redirect(Kakao.LoginUri);
    }
}
