import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IVerification } from "@APP/api";
import { IClient } from "@APP/api/structures/user/IClient";
import { prisma } from "@APP/infrastructure/DB";
import { Client } from "@APP/providers/user/client";
import { Authorization } from "../decorators/authorization";
import { httpResponse } from "../internal";

const route = "users/clients";

@Controller(route)
export class UsersClientsController {
    /**
     * 일반 고객 내 정보 보기 요청
     *
     * {@link IClient.FailureCode.GetPrivate 에러 코드}
     *
     * @summary 일반 고객 내 정보 요청
     *
     * @tag clients
     *
     * @param access_token Authorization access access_token
     *
     * @return 내 정보
     */
    @TypedRoute.Get("me")
    async get(
        @Authorization("access") access_token: string,
    ): Promise<IClient.IPrivate> {
        const result = await Client.Service.getPrivate()(access_token);
        return httpResponse(result);
    }

    /**
     * 일반 고객 프로필 수정
     *
     * {@link IClient.FailureCode.UpdateProfile 에러 코드}
     *
     * @summary 일반 고객 프로필 수정
     *
     * @tag clients
     *
     * @param access_token Authorization access access_token
     *
     * @param body 사용자 프로필 정보 전체
     */
    @TypedRoute.Put("me/profile")
    update(
        @Authorization("access") access_token: string,
        @TypedBody() body: IClient.IUpdateProfile,
    ): Promise<void> {
        return prisma.$transaction(async (tx) => {
            const result = await Client.Service.updateProfile(tx)(access_token)(
                body,
            );
            httpResponse(result);
        });
    }
}

@Controller(route + "/me/phone")
export class UsersClientsMePhoneUpdateController {
    /**
     * 일반 고객 전화번호 수정
     *
     * {@link IClient.FailureCode.UpdatePhone 에러 코드}
     *
     * @summary 일반 고객 전화번호 수정
     *
     * @tag clients
     *
     * @param access_token Authorization access access_token
     *
     * @param body 인증된 전화번호 접근 방식
     */
    @TypedRoute.Put()
    update(
        @Authorization("access") access_token: string,
        @TypedBody() body: IVerification.IVerifiedPhone.IVerification,
    ): Promise<void> {
        return prisma.$transaction(async (tx) => {
            const result = await Client.Service.updatePhone(tx)(access_token)(
                body,
            );
            httpResponse(result);
        });
    }
}
