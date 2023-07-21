import { Prisma } from "@PRISMA";
import { map, pipe, toArray, unless } from "@fxts/core";
import { randomUUID } from "crypto";
import { IHSPortfolio, IResult } from "@APP/api";
import { prisma } from "@APP/infrastructure/DB";
import { HSProvider } from "@APP/providers/user/hs_provider";
import { DateMapper, Failure, InternalError, Result } from "@APP/utils";
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
        async ({
            page = 1,
        }: IHSPortfolio.ISearch): Promise<
            IResult<
                IHSPortfolio.IPaginatedPrivate,
                Failure<IHSPortfolio.FailureCode.GetPrivateList> | InternalError
            >
        > => {
            const permission = await User.Service.validateType(
                "home service provider",
            )()(access_token);
            if (Result.Error.is(permission)) return permission;
            const provider = Result.Ok.flatten(permission);
            return pipe(
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

                Result.Ok.map,
            );
        };

    export const create =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        async (
            input: IHSPortfolio.ICreateRequest,
        ): Promise<
            IResult<
                null,
                InternalError | Failure<IHSPortfolio.FailureCode.Create>
            >
        > => {
            const permission = await User.Service.validateType(
                "home service provider",
            )(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const verification = User.Service.verify(
                Result.Ok.flatten(permission),
            );
            if (Result.Error.is(verification)) return verification;
            const provider = Result.Ok.flatten(verification);
            return pipe(
                input,

                async ({ title, main_url }) =>
                    tx.hSPortfolioModel.create({
                        data: {
                            id: randomUUID(),
                            title,
                            main_url,
                            is_visible: true,
                            hs_provider_id: provider.id,
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
