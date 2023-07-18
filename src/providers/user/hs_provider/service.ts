import { IUser } from "@APP/api/structures/user/IUser";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { prisma } from "@APP/infrastructure/DB";
import {
    filter,
    isNull,
    isString,
    map,
    pipe,
    toArray,
    unless,
} from "@fxts/core";
import { PrismaJson, PrismaMapper } from "./prisma";
import { Failure, InternalError, Result, isDeleted } from "@APP/utils";
import { Prisma } from "@PRISMA";
import { HttpStatus } from "@nestjs/common";
import { User } from "../user";
import { IResult } from "@APP/api/types";
import { Mapper } from "./mapper";
import { IBIZUser } from "@APP/api/structures/user/IBIZUser";

export namespace Service {
    export const getList = ({
        page = 1,
        sub_expertise_name,
        super_expertise_name,
    }: IHSProvider.ISearch): Promise<IHSProvider.IPaginatedSummary> =>
        pipe(
            page,

            async (take) =>
                prisma.hSProviderModel.findMany({
                    where: {
                        base: {
                            base: { is_deleted: false },
                            is_verified: true,
                        },
                        expertise_relation: isString(super_expertise_name)
                            ? {
                                  some: {
                                      sub_expertise: {
                                          name: sub_expertise_name,
                                          super_expertise: {
                                              name: super_expertise_name,
                                          },
                                      },
                                  },
                              }
                            : {},
                    },
                    select: PrismaJson.summarySelect(),
                    take,
                    skip: (page - 1) * take,
                }),

            map(PrismaMapper.toSummary),

            filter(Result.Ok.is),

            map(Result.Ok.flatten),

            toArray,

            (data) => ({ data, page }),
        );

    export const getPublic =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            provider_id: string,
        ): Promise<
            IResult<IHSProvider.IPublic, Failure<IUser.FailureCode.GetPublic>>
        > =>
            pipe(
                provider_id,

                getPrivate(tx),

                unless(
                    Result.Ok.is,
                    Result.Error.lift(() =>
                        Failure.create<IUser.FailureCode.GetPublic>({
                            cause: "USER_NOT_FOUND",
                            message: "사용자를 찾을 수 없습니다.",
                            statusCode: HttpStatus.NOT_FOUND,
                        }),
                    ),
                ),

                unless(Result.Error.is, (ok) =>
                    User.Service.isVerified(Result.Ok.flatten(ok))
                        ? ok
                        : Result.Error.map(
                              Failure.create<IUser.FailureCode.GetPublic>({
                                  cause: "USER_NOT_FOUND",
                                  message: "사용자를 찾을 수 없습니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          ),
                ),

                unless(
                    Result.Error.is,
                    Result.Ok.lift(Mapper.Private.toPublic),
                ),
            );

    export const getContact =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            provider_id: string,
        ): Promise<
            IResult<
                IHSProvider.IContact,
                Failure<IBIZUser.FailureCode.GetContact> | InternalError
            >
        > => {
            const permission = await User.Service.authorize(tx)(access_token);
            if (Result.Error.is(permission)) return permission;

            return pipe(
                provider_id,

                getPrivate(tx),

                unless(
                    Result.Ok.is,
                    Result.Error.lift(() =>
                        Failure.create<IBIZUser.FailureCode.GetContact>({
                            cause: "USER_NOT_FOUND",
                            message: "사용자를 찾을 수 없습니다.",
                            statusCode: HttpStatus.NOT_FOUND,
                        }),
                    ),
                ),

                unless(Result.Error.is, (ok) =>
                    User.Service.isVerified(Result.Ok.flatten(ok))
                        ? ok
                        : Result.Error.map(
                              Failure.create<IBIZUser.FailureCode.GetContact>({
                                  cause: "USER_NOT_FOUND",
                                  message: "사용자를 찾을 수 없습니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          ),
                ),

                unless(
                    Result.Error.is,
                    Result.Ok.lift(Mapper.Private.toContact),
                ),
            );
        };

    export const getPrivate =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            provider_id: string,
        ): Promise<
            IResult<
                IHSProvider.IPrivate,
                Failure<IUser.FailureCode.GetPrivate> | InternalError
            >
        > =>
            pipe(
                provider_id,

                async (id) =>
                    tx.hSProviderModel.findFirst({
                        where: { id },
                        select: PrismaJson.privateSelect(),
                    }),

                (model) =>
                    isNull(model)
                        ? Result.Error.map(
                              Failure.create<IUser.FailureCode.GetPrivate>({
                                  cause: "USER_NOT_FOUND",
                                  message: "존재하지 않는 사용자입니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          )
                        : isDeleted(model.base.base)
                        ? Result.Error.map(
                              Failure.create<IUser.FailureCode.GetPrivate>({
                                  cause: "USER_INACTIVE",
                                  message: "비활성화된 사용자입니다.",
                                  statusCode: HttpStatus.FORBIDDEN,
                              }),
                          )
                        : PrismaMapper.toPrivate(model),
            );

    export const getProfile = User.Service.getProfile({
        user_type: "home service provider",
        getPrivate,
    });
}
