import { Prisma } from "@PRISMA";
import { isNull, isString, pipe, unless } from "@fxts/core";
import { IAuthentication, IVerification } from "@APP/api";
import { IClient } from "@APP/api/structures/user/IClient";
import { IUser } from "@APP/api/structures/user/IUser";

import { prisma } from "@APP/infrastructure/DB";
import { Verification } from "@APP/providers/verification";
import {
    DateMapper,
    ExternalFailure,
    InternalFailure,
    Result,
    isDeleted,
} from "@APP/utils";
import { User } from "../user";
import { Mapper } from "./mapper";
import { PrismaJson, PrismaMapper } from "./prisma";

export namespace Service {
    export const create =
        (tx: Prisma.TransactionClient = prisma) =>
        async (input: IClient.ICreate): Promise<string> => {
            const client = PrismaJson.createData(input);
            await tx.clientModel.create({ data: client });
            return client.base.create.id;
        };

    export const getOne =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            client_id: string,
        ): Promise<
            Result<
                IClient,
                InternalFailure<
                    | IUser.FailureCode.NotFound
                    | IUser.FailureCode.Inactive
                    | IUser.FailureCode.Invalid
                >
            >
        > =>
            pipe(
                client_id,

                async (id) =>
                    tx.clientModel.findFirst({
                        where: { id },
                        select: PrismaJson.select(),
                    }),

                (model) =>
                    isNull(model)
                        ? Result.Error.map(
                              new InternalFailure("USER_NOT_FOUND"),
                          )
                        : isDeleted(model.base)
                        ? Result.Error.map(new InternalFailure("USER_INACTIVE"))
                        : PrismaMapper.to(model),
            );

    export const getPrivate =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            access_token: string,
        ): Promise<
            Result<
                IClient.IPrivate,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenInvalid
                      | IAuthentication.FailureCode.TokenExpired
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > =>
            pipe(
                access_token,

                User.Service.validateType("client")(tx),

                unless(Result.Error.is, Result.Ok.lift(Mapper.toPrivate)),
            );

    export const isVerified = (
        agg: IClient,
    ): agg is IClient & { phone: string } => isString(agg.phone);

    export const updateProfile =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IClient.IUpdateProfile,
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
            const permission = await User.Service.validateType("client")(tx)(
                access_token,
            );
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);

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
                    tx.clientModel.updateMany({
                        where: { id },
                        data: {
                            birth: isNull(input.birth)
                                ? input.birth
                                : new Date(input.birth),
                            gender: input.gender,
                            profile_image_url: input.profile_image_url,
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
                      | IAuthentication.FailureCode.TokenInvalid
                      | IAuthentication.FailureCode.TokenExpired
                      | IVerification.FailureCode.Uncompleted
                      | IVerification.FailureCode.NotFound
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > => {
            const permission = await User.Service.validateType("client")(tx)(
                access_token,
            );
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            return pipe(
                input,

                Verification.Service.assertVerifiedPhone(tx),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift(async (phone) => {
                        await Promise.all([
                            tx.clientModel.updateMany({
                                where: { id: user.id },
                                data: { phone },
                            }),
                            tx.userModel.updateMany({
                                where: { id: user.id },
                                data: { updated_at: DateMapper.toISO() },
                            }),
                        ]);
                        return null;
                    }),
                ),
            );
        };
}
