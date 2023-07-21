import { Prisma } from "@PRISMA";
import {
    filter,
    isNull,
    isString,
    map,
    pipe,
    toArray,
    unless,
} from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { IUser } from "@APP/api/structures/user/IUser";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import {
    Failure,
    InternalError,
    Result,
    isDeleted,
    isUnDeleted,
} from "@APP/utils";
import { BIZUser } from "../biz_user";
import { User } from "../user";
import { Mapper } from "./mapper";
import { PrismaJson, PrismaMapper } from "./prisma";

export namespace Service {
    export const create =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            input: IHSProvider.ICreate,
        ): Promise<IResult<string, Failure<"EXPERTISE_INVALID">>> => {
            const hs_expertises = (
                await tx.hSSubExpertiseModel.findMany({
                    where: { id: { in: input.sub_expertise_ids } },
                })
            ).filter(isUnDeleted);
            if (hs_expertises.length === 0)
                return Result.Error.map(
                    Failure.create({
                        cause: "EXPERTISE_INVALID",
                        message: "전문분야가 최소 한 개 이상이어야 합니다.",
                        statusCode: HttpStatus.BAD_REQUEST,
                    }),
                );
            if (
                !hs_expertises.every(
                    // 모든 요소의 상위 전문 분야가 같아야 한다.
                    (val, _, arr) =>
                        val.super_expertise_id === arr[0]?.super_expertise_id,
                )
            )
                return Result.Error.map(
                    Failure.create({
                        cause: "EXPERTISE_INVALID",
                        message:
                            "선택된 모든 하위 전문분야의 상위 분야는 같아야 합니다.",
                        statusCode: HttpStatus.BAD_REQUEST,
                    }),
                );
            const data = PrismaJson.createData(input);
            await tx.hSProviderModel.create({ data });
            return Result.Ok.map(data.base.create.base.create.id);
        };
    export const getOne =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            provider_id: string,
        ): Promise<
            IResult<
                IHSProvider,
                Failure<IUser.FailureCode.GetOne> | InternalError
            >
        > =>
            pipe(
                provider_id,

                async (id) =>
                    tx.hSProviderModel.findFirst({
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
                        : isDeleted(model.base.base)
                        ? Result.Error.map(
                              Failure.create({
                                  cause: "USER_INACTIVE",
                                  message: "비활성화된 사용자입니다.",
                                  statusCode: HttpStatus.FORBIDDEN,
                              }),
                          )
                        : PrismaMapper.to(model),
            );

    export const getList = ({
        page = 1,
        sub_expertise_name,
        super_expertise_name,
    }: IHSProvider.ISearch): Promise<IHSProvider.IPaginatedSummary> =>
        pipe(
            30,

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

                getOne(tx),

                unless(
                    Result.Ok.is,
                    Result.Error.lift(() =>
                        Failure.create({
                            cause: "USER_NOT_FOUND",
                            message: "사용자를 찾을 수 없습니다.",
                            statusCode: HttpStatus.NOT_FOUND,
                        }),
                    ),
                ),

                unless(Result.Error.is, (ok) =>
                    BIZUser.Service.isVerified(Result.Ok.flatten(ok))
                        ? ok
                        : Result.Error.map(
                              Failure.create({
                                  cause: "USER_NOT_FOUND",
                                  message: "사용자를 찾을 수 없습니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          ),
                ),

                unless(Result.Error.is, Result.Ok.lift(Mapper.toPublic)),
            );

    export const getContact =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            provider_id: string,
        ): Promise<
            IResult<
                IHSProvider.IContact,
                Failure<IHSProvider.FailureCode.GetContact> | InternalError
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const verification = User.Service.verify(
                Result.Ok.flatten(permission),
            );
            if (Result.Error.is(verification)) return verification;

            return pipe(
                provider_id,

                getOne(tx),

                unless(
                    Result.Ok.is,
                    Result.Error.lift(() =>
                        Failure.create({
                            cause: "USER_NOT_FOUND",
                            message: "사용자를 찾을 수 없습니다.",
                            statusCode: HttpStatus.NOT_FOUND,
                        }),
                    ),
                ),

                unless(Result.Error.is, (ok) =>
                    BIZUser.Service.isVerified(Result.Ok.flatten(ok))
                        ? ok
                        : Result.Error.map(
                              Failure.create({
                                  cause: "USER_NOT_FOUND",
                                  message: "사용자를 찾을 수 없습니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          ),
                ),

                unless(Result.Error.is, Result.Ok.lift(Mapper.toContact)),
            );
        };

    export const getPrivate =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            access_token: string,
        ): Promise<
            IResult<
                IHSProvider.IPrivate,
                InternalError | Failure<IHSProvider.FailureCode.GetPrivate>
            >
        > =>
            pipe(
                access_token,

                User.Service.validateType("home service provider")(tx),

                unless(Result.Error.is, Result.Ok.lift(Mapper.toPrivate)),
            );
}
