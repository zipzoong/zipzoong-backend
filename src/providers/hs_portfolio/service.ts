import { Prisma } from "@PRISMA";
import { map, pipe, toArray, unless } from "@fxts/core";
import { randomUUID } from "crypto";
import { IHSPortfolio, IResult } from "@APP/api";
import { prisma } from "@APP/infrastructure/DB";
import { DateMapper, Failure, InternalError, Result } from "@APP/utils";
import { HSProvider } from "../user/hs_provider";
import { User } from "../user/user";
import { PrismaMapper } from "./prisma";

export namespace Service {
    export const getPublicList =
        (hs_provider_id: string) =>
        ({
            page = 1,
        }: IHSPortfolio.ISearch): Promise<
            IResult<
                IHSPortfolio.IPaginatedPublic,
                Failure<IHSPortfolio.FailureCode.GetPublicList>
            >
        > =>
            pipe(
                hs_provider_id,

                HSProvider.Service.getPublic(),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift(() =>
                        pipe(
                            10,

                            async (take) =>
                                prisma.hSPortfolioModel.findMany({
                                    where: {
                                        hs_provider_id,
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
        ({
            page = 1,
        }: IHSPortfolio.ISearch): Promise<
            IResult<
                IHSPortfolio.IPaginatedPrivate,
                Failure<IHSPortfolio.FailureCode.GetPrivateList> | InternalError
            >
        > =>
            pipe(
                access_token,

                User.Service.authorize(
                    "home service provider",
                    HSProvider.Service.getPrivate(),
                ),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift((provider) =>
                        pipe(
                            10,

                            async (take) =>
                                prisma.hSPortfolioModel.findMany({
                                    where: {
                                        hs_provider_id: provider.id,
                                        is_deleted: false,
                                    },
                                    take,
                                    skip: (page - 1) * take,
                                }),

                            map(PrismaMapper.toPrivate),

                            toArray,

                            (data) => ({ data, page }),
                        ),
                    ),
                ),
            );

    export const create =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        (
            input: IHSPortfolio.ICreateRequest,
        ): Promise<
            IResult<
                null,
                InternalError | Failure<IHSPortfolio.FailureCode.Create>
            >
        > =>
            pipe(
                access_token,

                User.Service.authorize(
                    "home service provider",
                    HSProvider.Service.getPrivate(tx),
                ),

                unless(
                    Result.Error.is,
                    Result.Ok.asyncLift((provider) =>
                        pipe(
                            provider.id,

                            async (hs_provider_id) =>
                                tx.hSPortfolioModel.create({
                                    data: {
                                        id: randomUUID(),
                                        title: input.title,
                                        main_url: input.main_url,
                                        is_visible: true,
                                        hs_provider_id,
                                        created_at: DateMapper.toISO(),
                                        updated_at: DateMapper.toISO(),
                                        is_deleted: false,
                                        deleted_at: null,
                                    },
                                }),

                            () => null,
                        ),
                    ),
                ),
            );
}
