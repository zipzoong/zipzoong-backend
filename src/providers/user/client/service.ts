import { Prisma } from "@PRISMA";
import { isNil, isNull, isString, pipe, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { IVerification } from "@APP/api";
import { IClient } from "@APP/api/structures/user/IClient";
import { IUser } from "@APP/api/structures/user/IUser";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import { Verification } from "@APP/providers/verification";
import {
    DateMapper,
    Failure,
    InternalError,
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
            IResult<IClient, Failure<IUser.FailureCode.GetOne> | InternalError>
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
                              Failure.create({
                                  cause: "USER_NOT_FOUND",
                                  message: "존재하지 않는 사용자입니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          )
                        : isDeleted(model.base)
                        ? Result.Error.map(
                              Failure.create({
                                  cause: "USER_INACTIVE",
                                  message: "비활성화된 사용자입니다.",
                                  statusCode: HttpStatus.FORBIDDEN,
                              }),
                          )
                        : PrismaMapper.to(model),
            );

    export const getPrivate =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            access_token: string,
        ): Promise<
            IResult<
                IClient.IPrivate,
                InternalError | Failure<IClient.FailureCode.GetPrivate>
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
            IResult<
                null,
                InternalError | Failure<IClient.FailureCode.UpdateProfile>
            >
        > => {
            const permission = await User.Service.validateType("client")(tx)(
                access_token,
            );
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);

            return pipe(
                user.id,

                async (id) => {
                    await tx.userModel.updateMany({
                        where: { id },
                        data: {
                            name: input.name,
                            updated_at: DateMapper.toISO(),
                        },
                    });
                    await tx.clientModel.updateMany({
                        where: { id },
                        data: {
                            birth: isNil(input.birth)
                                ? input.birth
                                : new Date(input.birth),
                            gender: input.gender,
                            profile_image_url: input.profile_image_url,
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
                InternalError | Failure<IClient.FailureCode.UpdatePhone>
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

                unless(Result.Error.is, async (ok) => {
                    const phone = Result.Ok.flatten(ok);
                    await tx.clientModel.updateMany({
                        where: { id: user.id },
                        data: { phone },
                    });
                    await tx.userModel.updateMany({
                        where: { id: user.id },
                        data: { updated_at: DateMapper.toISO() },
                    });

                    return Result.Ok.map(null);
                }),
            );
        };
}
