import { Prisma } from "@PRISMA";
import { filter, isNull, map, pipe, toArray, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { IUser } from "@APP/api/structures/user/IUser";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import { Failure, InternalError, Result, isDeleted } from "@APP/utils";
import { BIZUser } from "../biz_user";
import { User } from "../user";
import { Mapper } from "./mapper";
import { PrismaJson, PrismaMapper } from "./prisma";

export namespace Service {
    export const create =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            input: IREAgent.ICreate,
        ): Promise<IResult<string, Failure<"EXPERTISE_INVALID">>> => {
            const re_expertise = await tx.rEExpertiseModel.findFirst({
                where: { id: input.expertise_id },
            });
            if (isNull(re_expertise) || isDeleted(re_expertise))
                return Result.Error.map(
                    Failure.create({
                        cause: "EXPERTISE_INVALID",
                        message: "유효하지 않은 전문분야입니다.",
                        statusCode: HttpStatus.BAD_REQUEST,
                    }),
                );

            const data = PrismaJson.createData(input);
            await tx.rEAgentModel.create({ data });
            return Result.Ok.map(data.base.create.base.create.id);
        };
    export const getOne =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            agent_id: string,
        ): Promise<
            IResult<IREAgent, Failure<IUser.FailureCode.GetOne> | InternalError>
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
            IResult<IREAgent.IPublic, Failure<IUser.FailureCode.GetPublic>>
        > =>
            pipe(
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

                unless(Result.Error.is, Result.Ok.lift(Mapper.toPublic)),
            );

    export const getContact =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            agent_id: string,
        ): Promise<
            IResult<
                IREAgent.IContact,
                Failure<IREAgent.FailureCode.GetContact> | InternalError
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
            IResult<
                IREAgent.IPrivate,
                InternalError | Failure<IREAgent.FailureCode.GetPrivate>
            >
        > =>
            pipe(
                access_token,

                User.Service.validateType("real estate agent")(tx),

                unless(Result.Error.is, Result.Ok.lift(Mapper.toPrivate)),
            );
}
