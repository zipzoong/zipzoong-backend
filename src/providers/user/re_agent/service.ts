import { Prisma } from "@PRISMA";
import { filter, isNull, map, pipe, toArray, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { IUser } from "@APP/api/structures/user/IUser";
import { prisma } from "@APP/infrastructure/DB";
import { DateMapper, InternalFailure, Result, isDeleted } from "@APP/utils";
import { BIZUser } from "../biz_user";
import { User } from "../user";
import { Mapper } from "./mapper";
import { PrismaJson, PrismaMapper } from "./prisma";
import { IExpertise } from "@APP/api";

export namespace Service {
    export const assertExpertiseId =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            id: string,
        ): Promise<
            Result<string, InternalFailure<IExpertise.FailureCode.Invalid>>
        > => {
            const expertise = await tx.rEExpertiseModel.findFirst({
                where: { id },
            });
            return isNull(expertise) || isDeleted(expertise)
                ? Result.Error.map(new InternalFailure("EXPERTISE_INVALID"))
                : Result.Ok.map(expertise.id);
        };

    export const create =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            input: IREAgent.ICreate,
        ): Promise<
            Result<string, InternalFailure<IExpertise.FailureCode.Invalid>>
        > =>
            pipe(
                input.expertise_id,

                assertExpertiseId(tx),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift(async (expertise_id) => {
                        const data = PrismaJson.createData({
                            ...input,
                            expertise_id,
                        });
                        await tx.rEAgentModel.create({ data });
                        return data.base.create.base.create.id;
                    }),
                ),
            );

    export const getOne =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            agent_id: string,
        ): Promise<
            Result<
                IREAgent,
                InternalFailure<
                    IUser.FailureCode.NotFound | IUser.FailureCode.Inactive
                >
            >
        > =>
            pipe(
                agent_id,

                async (id) =>
                    tx.rEAgentModel.findFirst({
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
        expertise_name,
    }: IREAgent.ISearch): Promise<IREAgent.IPaginatedSummary> =>
        pipe(
            30,

            async (take) =>
                prisma.rEAgentModel.findMany({
                    where: {
                        base: {
                            base: { is_deleted: false },
                            is_verified: true,
                        },
                        expertise: {
                            name: expertise_name,
                        },
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
        async (
            agent_id: string,
        ): Promise<
            Result<
                IREAgent.IPublic,
                InternalFailure<IUser.FailureCode.NotFound>
            >
        > =>
            pipe(
                agent_id,

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
            agent_id: string,
        ): Promise<
            Result<
                IREAgent.IContact,
                InternalFailure<IUser.FailureCode.NotFound>
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const verification = User.Service.verify(
                Result.Ok.flatten(permission),
            );
            if (Result.Error.is(verification)) return verification;

            return pipe(
                agent_id,

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
            Result<
                IREAgent.IPrivate,
                InternalError | Failure<IREAgent.FailureCode.GetPrivate>
            >
        > =>
            pipe(
                access_token,

                User.Service.validateType("real estate agent")(tx),

                unless(Result.Error.is, Result.Ok.lift(Mapper.toPrivate)),
            );

    export const updateRealEstate =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IREAgent.IUpdate.IRealEstate,
        ): Promise<
            Result<
                null,
                InternalError | Failure<IREAgent.FailureCode.UpdateRealEstate>
            >
        > => {
            const permission = await User.Service.validateType(
                "real estate agent",
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
                    tx.rEAgentModel.updateMany({
                        where: { id },
                        data: {
                            re_name: input.name,
                            re_number: input.number,
                            re_phone: input.phone,
                            re_licensed_agent_name: input.licensed_agent_name,
                            re_address_road: input.address.road,
                            re_address_zone_code: input.address.zone_code,
                            re_address_detail: input.address.detail,
                            re_address_extra: input.address.extra,
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
            input: IREAgent.IUpdate.IExpertise,
        ): Promise<
            Result<
                null,
                InternalError | Failure<IREAgent.FailureCode.UpdateExpertise>
            >
        > => {
            const permission = await User.Service.validateType(
                "real estate agent",
            )(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            return pipe(
                input.expertise_id,

                assertExpertiseId(tx),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift(async (expertise_id) => {
                        await Promise.all([
                            tx.userModel.updateMany({
                                where: { id: user.id },
                                data: { updated_at: DateMapper.toISO() },
                            }),
                            tx.bIZUserModel.updateMany({
                                where: { id: user.id },
                                data: { is_verified: false },
                            }),
                            tx.rEAgentModel.updateMany({
                                where: { id: user.id },
                                data: {
                                    is_licensed: input.is_licensed,
                                    expertise_id,
                                },
                            }),
                        ]);
                        return null;
                    }),
                ),
            );
        };
}
