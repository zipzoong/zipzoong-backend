import { Prisma } from "@PRISMA";
import { map, pipe, toArray, unless } from "@fxts/core";
import { randomUUID } from "crypto";
import { IREPortfolio, IResult } from "@APP/api";
import { prisma } from "@APP/infrastructure/DB";
import { REAgent } from "@APP/providers/user/re_agent";
import { DateMapper, Failure, InternalError, Result } from "@APP/utils";
import { User } from "../user/user";
import { PrismaMapper } from "./prisma";

export namespace Service {
    export const getPublicList =
        (re_agent_id: string) =>
        ({
            page = 1,
        }: IREPortfolio.ISearch): Promise<
            IResult<
                IREPortfolio.IPaginatedPublic,
                Failure<IREPortfolio.FailureCode.GetPublicList>
            >
        > =>
            pipe(
                re_agent_id,

                REAgent.Service.getPublic(),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift(() =>
                        pipe(
                            10,

                            async (take) =>
                                prisma.rEPortfolioModel.findMany({
                                    where: {
                                        re_agent_id,
                                        is_visible: true,
                                        is_deleted: false,
                                    },
                                    take,
                                    skip: (page - 1) * take,
                                }),

                            map(PrismaMapper.toPublic),

                            toArray,

                            (data) => ({ data, page }),
                        ),
                    ),
                ),
            );

    export const getPrivateList =
        (access_token: string) =>
        async ({
            page = 1,
        }: IREPortfolio.ISearch): Promise<
            IResult<
                IREPortfolio.IPaginatedPrivate,
                Failure<IREPortfolio.FailureCode.GetPrivateList> | InternalError
            >
        > => {
            const permission = await User.Service.validateType(
                "real estate agent",
            )()(access_token);
            if (Result.Error.is(permission)) return permission;
            const agent = Result.Ok.flatten(permission);
            return pipe(
                10,

                async (take) =>
                    prisma.rEPortfolioModel.findMany({
                        where: {
                            re_agent_id: agent.id,
                            is_deleted: false,
                        },
                        take,
                        skip: (page - 1) * take,
                    }),

                map(PrismaMapper.toPrivate),

                toArray,

                (data) => ({ data, page }),

                Result.Ok.map,
            );
        };

    export const create =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IREPortfolio.ICreateRequest,
        ): Promise<
            IResult<
                null,
                InternalError | Failure<IREPortfolio.FailureCode.Create>
            >
        > => {
            const permission = await User.Service.validateType(
                "real estate agent",
            )(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const verification = User.Service.verify(
                Result.Ok.flatten(permission),
            );
            if (Result.Error.is(verification)) return verification;
            const agent = Result.Ok.flatten(verification);
            return pipe(
                input,

                async ({ title, main_url }) =>
                    tx.rEPortfolioModel.create({
                        data: {
                            id: randomUUID(),
                            title,
                            main_url,
                            is_visible: true,
                            re_agent_id: agent.id,
                            created_at: DateMapper.toISO(),
                            updated_at: DateMapper.toISO(),
                            is_deleted: false,
                            deleted_at: null,
                        },
                    }),

                () => Result.Ok.map(null),
            );
        };
}
