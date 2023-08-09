import { Prisma } from "@PRISMA";
import { filter, map, pipe, toArray, toAsync, unless } from "@fxts/core";
import {
    IAuthentication,
    IBIZUser,
    IHSProvider,
    IREAgent,
    IUser,
    IVerification,
} from "@APP/api";
import { Storage } from "@APP/externals/storage";
import { prisma } from "@APP/infrastructure/DB";
import { Verification } from "@APP/providers/verification";
import {
    DateMapper,
    ExternalFailure,
    InternalFailure,
    Result,
    isUnDeleted,
} from "@APP/utils";
import { User } from "../user";
import { PrismaJson } from "./prisma";

export namespace Service {
    export const is = (user: IUser): user is IBIZUser => {
        return user.type !== "client";
    };

    export const getCertificationList =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            access_token: string,
        ): Promise<
            Result<
                string[],
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenInvalid
                      | IAuthentication.FailureCode.TokenExpired
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            if (!is(user))
                return Result.Error.map(
                    new InternalFailure("USER_TYPE_MISMATCH"),
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
            Result<
                null,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenInvalid
                      | IAuthentication.FailureCode.TokenExpired
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            if (!is(user))
                return Result.Error.map(
                    new InternalFailure("USER_TYPE_MISMATCH"),
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
            Result<
                null,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenInvalid
                      | IAuthentication.FailureCode.TokenExpired
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            if (!is(user))
                return Result.Error.map(
                    new InternalFailure("USER_TYPE_MISMATCH"),
                );
            return pipe(
                user.id,

                (id) => [
                    tx.userModel.updateMany({
                        where: { id },
                        data: {
                            updated_at: DateMapper.toISO(),
                        },
                    }),
                    tx.bIZUserModel.updateMany({
                        where: { id },
                        data: {
                            introduction_title: input.title,
                            introduction_content: input.content,
                        },
                    }),
                ],

                Promise.all,

                () => null,

                Result.Ok.map,
            );
        };

    export const updatePhone =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IVerification.IVerifiedPhone.IVerification,
        ): Promise<
            Result<
                null,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenExpired
                      | IAuthentication.FailureCode.TokenInvalid
                      | IVerification.FailureCode.Uncompleted
                      | IVerification.FailureCode.NotFound
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            if (!is(user))
                return Result.Error.map(
                    new InternalFailure("USER_TYPE_MISMATCH"),
                );

            return pipe(
                input,

                Verification.Service.assertVerifiedPhone(tx),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift(async (phone) => {
                        await Promise.all([
                            tx.userModel.updateMany({
                                where: {
                                    id: user.id,
                                },
                                data: {
                                    updated_at: DateMapper.toISO(),
                                },
                            }),
                            tx.bIZUserModel.updateMany({
                                where: { id: user.id },
                                data: { phone },
                            }),
                        ]);
                        return null;
                    }),
                ),
            );
        };

    export const updateName =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IBIZUser.IUpdate.IName,
        ): Promise<
            Result<
                null,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenExpired
                      | IAuthentication.FailureCode.TokenInvalid
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            if (!is(user))
                return Result.Error.map(
                    new InternalFailure("USER_TYPE_MISMATCH"),
                );
            return pipe(
                user.id,

                (id) => [
                    tx.userModel.updateMany({
                        where: { id },
                        data: {
                            name: input.name,
                            updated_at: DateMapper.toISO(),
                        },
                    }),
                    tx.bIZUserModel.updateMany({
                        where: { id },
                        data: { is_verified: false },
                    }),
                ],

                Promise.all,

                () => null,

                Result.Ok.map,
            );
        };

    export const updateProfileImageUrl =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IBIZUser.IUpdate.IProfileImageUrl,
        ): Promise<
            Result<
                null,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenExpired
                      | IAuthentication.FailureCode.TokenInvalid
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
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
                    new InternalFailure("USER_TYPE_MISMATCH"),
                );
            return pipe(
                user.id,

                (id) => [
                    tx.userModel.updateMany({
                        where: { id },
                        data: { updated_at: DateMapper.toISO() },
                    }),
                    tx.bIZUserModel.updateMany({
                        where: { id },
                        data: {
                            profile_image_url: input.profile_image_url,
                            is_verified: false,
                        },
                    }),
                ],

                Promise.all,

                () => null,

                Result.Ok.map,
            );
        };
}
