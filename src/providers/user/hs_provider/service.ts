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
import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { IUser } from "@APP/api/structures/user/IUser";
import { prisma } from "@APP/infrastructure/DB";
import {
    DateMapper,
    ExternalFailure,
    InternalFailure,
    Result,
    isDeleted,
    isUnDeleted,
    pick,
} from "@APP/utils";
import { BIZUser } from "../biz_user";
import { User } from "../user";
import { Mapper } from "./mapper";
import { PrismaJson, PrismaMapper } from "./prisma";
import { randomUUID } from "crypto";
import { IAuthentication, IExpertise } from "@APP/api";

export namespace Service {
    const assertSubExpertiseIds =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            sub_expertise_ids: string[],
        ): Promise<
            Result<
                string[],
                InternalFailure<
                    | IExpertise.FailureCode.Required
                    | IExpertise.FailureCode.SuperMismatch
                >
            >
        > => {
            const hs_expertises = (
                await tx.hSSubExpertiseModel.findMany({
                    where: { id: { in: sub_expertise_ids } },
                })
            ).filter(isUnDeleted);
            if (hs_expertises.length === 0)
                return Result.Error.map(
                    new InternalFailure("EXPERTISE_REQUIRED"),
                );
            if (
                !hs_expertises.every(
                    // 모든 요소의 상위 전문 분야가 같아야 한다.
                    (val, _, arr) =>
                        val.super_expertise_id === arr[0]?.super_expertise_id,
                )
            )
                return Result.Error.map(
                    new InternalFailure("SUPER_EXPERTISE_MISMATCH"),
                );
            return Result.Ok.map(hs_expertises.map(pick("id")));
        };

    export const create =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            input: IHSProvider.ICreate,
        ): Promise<
            Result<
                string,
                InternalFailure<
                    | IExpertise.FailureCode.Required
                    | IExpertise.FailureCode.SuperMismatch
                >
            >
        > => {
            const sub_expertise_ids_result = await assertSubExpertiseIds(tx)(
                input.sub_expertise_ids,
            );
            if (Result.Error.is(sub_expertise_ids_result))
                return sub_expertise_ids_result;
            const data = PrismaJson.createData({
                ...input,
                sub_expertise_ids: Result.Ok.flatten(sub_expertise_ids_result),
            });
            await tx.hSProviderModel.create({ data });
            return Result.Ok.map(data.base.create.base.create.id);
        };

    export const getOne =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            provider_id: string,
        ): Promise<
            Result<
                IHSProvider,
                InternalFailure<
                    | IUser.FailureCode.NotFound
                    | IUser.FailureCode.Inactive
                    | IUser.FailureCode.Invalid
                >
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
                              new InternalFailure("USER_NOT_FOUND"),
                          )
                        : isDeleted(model.base.base)
                        ? Result.Error.map(new InternalFailure("USER_INACTIVE"))
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
            Result<
                IHSProvider.IPublic,
                InternalFailure<IUser.FailureCode.NotFound>
            >
        > =>
            pipe(
                provider_id,

                getOne(tx),

                unless(
                    Result.Ok.is,
                    Result.Error.lift(
                        () => new InternalFailure("USER_NOT_FOUND"),
                    ),
                ),

                unless(Result.Error.is, (ok) =>
                    BIZUser.Service.isVerified(Result.Ok.flatten(ok))
                        ? ok
                        : Result.Error.map(
                              new InternalFailure("USER_NOT_FOUND"),
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
            Result<
                IHSProvider.IContact,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenExpired
                      | IAuthentication.FailureCode.TokenInvalid
                      | IUser.FailureCode.Unverified
                      | IUser.FailureCode.NotFound
                      | IUser.FailureCode.Invalid
                  >
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
                    Result.Error.lift(
                        () => new InternalFailure("USER_NOT_FOUND"),
                    ),
                ),

                unless(Result.Error.is, (ok) =>
                    BIZUser.Service.isVerified(Result.Ok.flatten(ok))
                        ? ok
                        : Result.Error.map(
                              new InternalFailure("USER_NOT_FOUND"),
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
            Result<
                IHSProvider.IPrivate,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenExpired
                      | IAuthentication.FailureCode.TokenInvalid
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > =>
            pipe(
                access_token,

                User.Service.validateType("home service provider")(tx),

                unless(Result.Error.is, Result.Ok.lift(Mapper.toPrivate)),
            );

    export const updateBIZInfo =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IHSProvider.IUpdate.IBIZInfo,
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
            const permission = await User.Service.validateType(
                "home service provider",
            )(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            return pipe(
                user.id,

                (id) => [
                    tx.userModel.updateMany({
                        where: { id },
                        data: { updated_at: DateMapper.toISO() },
                    }),
                    tx.bIZUserModel.updateMany({
                        where: { id },
                        data: { is_verified: false },
                    }),
                    tx.hSProviderModel.updateMany({
                        where: { id },
                        data: {
                            biz_registration_number: input.registration_number,
                            biz_phone: input.biz_phone,
                            biz_open_date: new Date(input.open_date),
                            address_zone_code: input.address.zone_code,
                            address_road: input.address.road,
                            address_detail: input.address.detail,
                            address_extra: input.address.extra,
                        },
                    }),
                ],

                Promise.all,

                () => null,

                Result.Ok.map,
            );
        };

    export const updateExpertise =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IHSProvider.IUpdate.ISubExpertise,
        ): Promise<
            Result<
                null,
                | ExternalFailure<"Crypto.decrypt">
                | InternalFailure<
                      | IAuthentication.FailureCode.TokenExpired
                      | IAuthentication.FailureCode.TokenInvalid
                      | IExpertise.FailureCode.SuperMismatch
                      | IExpertise.FailureCode.Required
                      | IUser.FailureCode.TypeMismatch
                      | IUser.FailureCode.Invalid
                  >
            >
        > => {
            const permission = await User.Service.validateType(
                "home service provider",
            )(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            return pipe(
                input,

                pick("sub_expertise_ids"),

                assertSubExpertiseIds(tx),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift(async (ids) => {
                        const now = DateMapper.toISO();
                        await Promise.all([
                            tx.userModel.updateMany({
                                where: { id: user.id },
                                data: { updated_at: DateMapper.toISO() },
                            }),
                            tx.bIZUserModel.updateMany({
                                where: { id: user.id },
                                data: { is_verified: false },
                            }),
                            tx.hSSubExpertiseRelationModel.updateMany({
                                where: {
                                    hs_provider_id: user.id,
                                    sub_expertise_id: { notIn: ids },
                                },
                                data: {
                                    is_deleted: true,
                                    deleted_at: now,
                                },
                            }),
                            ...ids.map((sub_expertise_id) =>
                                tx.hSSubExpertiseRelationModel.upsert({
                                    where: {
                                        hs_provider_id_sub_expertise_id: {
                                            hs_provider_id: user.id,
                                            sub_expertise_id,
                                        },
                                    },
                                    update: {
                                        is_deleted: false,
                                        deleted_at: null,
                                    },
                                    create: {
                                        id: randomUUID(),
                                        hs_provider_id: user.id,
                                        sub_expertise_id,
                                        created_at: now,
                                        updated_at: now,
                                        is_deleted: false,
                                        deleted_at: null,
                                    },
                                }),
                            ),
                        ]);
                        return null;
                    }),
                ),
            );
        };
}
