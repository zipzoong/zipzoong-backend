import { Prisma } from "@PRISMA";
import { filter, map, pipe, toArray, toAsync, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import {
    IBIZUser,
    IHSProvider,
    IREAgent,
    IResult,
    IVerification,
} from "@APP/api";
import { Storage } from "@APP/externals/storage";
import { prisma } from "@APP/infrastructure/DB";
import { Verification } from "@APP/providers/verification";
import {
    DateMapper,
    Failure,
    InternalError,
    Result,
    isUnDeleted,
} from "@APP/utils";
import { User } from "../user";
import { PrismaJson } from "./prisma";

export namespace Service {
    export const getCertificationList =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            access_token: string,
        ): Promise<
            IResult<
                string[],
                | InternalError
                | Failure<IBIZUser.FailureCode.GetCertificationList>
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            if (user.type === "client")
                return Result.Error.map(
                    Failure.create({
                        cause: "PERMISSION_INSUFFICIENT",
                        message: "해당 요청에 대한 권한이 없습니다.",
                        statusCode: HttpStatus.FORBIDDEN,
                    }),
                );
            return pipe(
                user.id,

                async (biz_user_id) =>
                    tx.bIZCertificationImageModel.findMany({
                        where: { biz_user_id },
                    }),

                filter(isUnDeleted),

                toAsync,

                map(Storage.getReadUrl),

                toArray,

                Result.Ok.map,
            );
        };

    export const createCertification =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IBIZUser.ICertificationImageCreate,
        ): Promise<
            IResult<
                null,
                | InternalError
                | Failure<IBIZUser.FailureCode.CreateCertification>
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            if (user.type === "client")
                return Result.Error.map(
                    Failure.create({
                        cause: "PERMISSION_INSUFFICIENT",
                        message: "해당 요청에 대한 권한이 없습니다.",
                        statusCode: HttpStatus.FORBIDDEN,
                    }),
                );
            return pipe(
                input,

                PrismaJson.createCertificationImageData(user.id),

                (data) => tx.bIZCertificationImageModel.create({ data }),

                () => Result.Ok.map(null),
            );
        };

    export const createCertificationList =
        (tx: Prisma.TransactionClient = prisma) =>
        async ({
            biz_user_id,
            images,
        }: {
            biz_user_id: string;
            images: IBIZUser.ICertificationImageCreate[];
        }) => {
            await tx.bIZCertificationImageModel.createMany({
                data: PrismaJson.createCertificationImageListData(biz_user_id)(
                    images,
                ),
            });
        };

    export const isVerified = <T extends IHSProvider | IREAgent>(
        agg: T,
    ): agg is T & { is_verified: true } => agg.is_verified;

    export const updateIntroduction =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IBIZUser.IUpdate.IIntroduction,
        ): Promise<
            IResult<
                null,
                InternalError | Failure<IBIZUser.FailureCode.UpdateIntroduction>
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            if (
                user.type !== "home service provider" &&
                user.type !== "real estate agent"
            )
                return Result.Error.map(
                    Failure.create({
                        cause: "PERMISSION_INSUFFICIENT",
                        message: "해당 요청에 대한 권한이 없습니다.",
                        statusCode: HttpStatus.FORBIDDEN,
                    }),
                );
            return pipe(
                user.id,

                async (id) => {
                    await tx.userModel.updateMany({
                        where: { id },
                        data: {
                            updated_at: DateMapper.toISO(),
                        },
                    });
                    await tx.bIZUserModel.updateMany({
                        where: { id },
                        data: {
                            introduction_title: input.title,
                            introduction_content: input.content,
                        },
                    });
                },

                () => Result.Ok.map(null),
            );
        };

    export const updatePhone =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IVerification.IVerifiedPhone.IVerification,
        ): Promise<
            IResult<
                null,
                InternalError | Failure<IBIZUser.FailureCode.UpdatePhone>
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            if (
                user.type !== "home service provider" &&
                user.type !== "real estate agent"
            )
                return Result.Error.map(
                    Failure.create({
                        cause: "PERMISSION_INSUFFICIENT",
                        message: "해당 요청에 대한 권한이 없습니다.",
                        statusCode: HttpStatus.FORBIDDEN,
                    }),
                );

            return pipe(
                input,

                Verification.Service.assertVerifiedPhone(tx),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift(async (phone) => {
                        await tx.userModel.updateMany({
                            where: {
                                id: user.id,
                            },
                            data: {
                                updated_at: DateMapper.toISO(),
                            },
                        });
                        await tx.bIZUserModel.updateMany({
                            where: { id: user.id },
                            data: { phone },
                        });
                        return null;
                    }),
                ),
            );
        };
}
