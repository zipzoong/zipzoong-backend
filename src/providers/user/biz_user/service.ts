import { IBIZUser } from "@APP/api/structures/user/IBIZUser";
import { Storage } from "@APP/externals/storage";
import { prisma } from "@APP/infrastructure/DB";
import { Authentication } from "@APP/providers/authentication";
import { Failure, isUnDeleted, pick } from "@APP/utils";
import { Prisma } from "@PRISMA";
import {
    filter,
    isNull,
    map,
    negate,
    pipe,
    toArray,
    toAsync,
    unless,
} from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { PrismaJson } from "./prisma";

export namespace Service {
    /**
     * @throw 403 TOKEN_EXPIRED
     * @throw 403 TOKEN_INVALID
     * @throw 403 PERMISSION_INSUFFICIENT
     * @throw 403 USER_INACTIVE
     * @throw 404 USER_NOT_FOUND
     */
    export const getBIZCertificationList =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string): Promise<string[]> =>
            pipe(
                access_token,

                Authentication.Service.tokenVerify(
                    Authentication.Token.Access.verify,
                ),

                pick("user_id"),

                async (id) =>
                    tx.userModel.findFirst({
                        where: { id },
                        select: {
                            id: true,
                            is_deleted: true,
                            deleted_at: true,
                            biz_user: {
                                select: {
                                    biz_certification_images: true,
                                },
                            },
                        },
                    }),

                unless(
                    negate(isNull),
                    Failure.throwFailure<IBIZUser.FailureCode.GetBIZCertificationList>(
                        {
                            cause: "USER_NOT_FOUND",
                            message: "사용자 정보를 찾을 수 없습니다.",
                            statusCode: HttpStatus.NOT_FOUND,
                        },
                    ),
                ),

                unless(
                    isUnDeleted,
                    Failure.throwFailure<IBIZUser.FailureCode.GetBIZCertificationList>(
                        {
                            cause: "USER_INACTIVE",
                            message: "비활성화된 사용자입니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        },
                    ),
                ),

                pick("biz_user"),

                unless(
                    negate(isNull),
                    Failure.throwFailure<IBIZUser.FailureCode.GetBIZCertificationList>(
                        {
                            cause: "PERMISSION_INSUFFICIENT",
                            message: "권한이 부족합니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        },
                    ),
                ),

                pick("biz_certification_images"),

                filter(isUnDeleted),

                toAsync,
                map(Storage.getReadUrl),

                toArray,
            );

    /**
     * @throw 403 TOKEN_EXPIRED
     * @throw 403 TOKEN_INVALID
     * @throw 403 PERMISSION_INSUFFICIENT
     * @throw 403 USER_INACTIVE
     * @throw 404 USER_NOT_FOUND
     */
    export const createBIZCertificationImage =
        (tx: Prisma.TransactionClient = prisma) =>
        ({
            access_token,
            data,
        }: {
            access_token: string;
            data: IBIZUser.ICertificationImageCreate;
        }): Promise<void> =>
            pipe(
                access_token,

                Authentication.Service.tokenVerify(
                    Authentication.Token.Access.verify,
                ),

                pick("user_id"),

                async (id) =>
                    tx.userModel.findFirst({
                        where: { id },
                        select: {
                            id: true,
                            is_deleted: true,
                            deleted_at: true,
                            biz_user: { select: { id: true } },
                        },
                    }),

                unless(
                    negate(isNull),
                    Failure.throwFailure<IBIZUser.FailureCode.CreateBIZCertification>(
                        {
                            cause: "USER_NOT_FOUND",
                            message: "사용자 정보를 찾을 수 없습니다.",
                            statusCode: HttpStatus.NOT_FOUND,
                        },
                    ),
                ),

                unless(
                    isUnDeleted,
                    Failure.throwFailure<IBIZUser.FailureCode.CreateBIZCertification>(
                        {
                            cause: "USER_INACTIVE",
                            message: "비활성화된 사용자입니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        },
                    ),
                ),

                pick("biz_user"),

                unless(
                    negate(isNull),
                    Failure.throwFailure<IBIZUser.FailureCode.CreateBIZCertification>(
                        {
                            cause: "PERMISSION_INSUFFICIENT",
                            message: "권한이 부족합니다.",
                            statusCode: HttpStatus.FORBIDDEN,
                        },
                    ),
                ),

                pick("id"),

                async (biz_user_id) =>
                    prisma.bIZCertificationImageModel.create({
                        data: PrismaJson.createCertificationImageData(
                            biz_user_id,
                        )(data),
                    }),

                () => {},
            );
}
