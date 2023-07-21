import { filter, isNull, map, pipe, toArray, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { IExpertise } from "@APP/api/structures/IExpertise";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import { Failure, Result, isDeleted, isUnDeleted } from "@APP/utils";
import { PrismaJson } from "./prisma";

export namespace Service {
    export namespace HS {
        export const getList = (): Promise<IExpertise.ISuper[]> =>
            pipe(
                0,

                async () =>
                    prisma.hSSuperExpertiseModel.findMany({
                        select: PrismaJson.HS.superSelect(),
                    }),

                filter(isUnDeleted),

                map((expertise) => {
                    return {
                        id: expertise.id,
                        name: expertise.name,
                        sub_expertises: expertise.sub_expertises
                            .filter(isUnDeleted)
                            .map((sub) => ({
                                id: sub.id,
                                name: sub.name,
                            })),
                    } satisfies IExpertise.ISuper;
                }),

                toArray,
            );

        export const getOne = (
            expertise_id: string,
        ): Promise<
            IResult<IExpertise.ISuper, Failure<IExpertise.FailureCode.GetOne>>
        > =>
            pipe(
                expertise_id,

                async (id) =>
                    prisma.hSSuperExpertiseModel.findFirst({
                        where: { id },
                        select: PrismaJson.HS.superSelect(),
                    }),

                (expertise) =>
                    isNull(expertise)
                        ? Result.Error.map(
                              Failure.create<IExpertise.FailureCode.GetOne>({
                                  cause: "EXPERTISE_NOT_FOUND",
                                  message: "존재하지 않는 전문 분야입니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          )
                        : isDeleted(expertise)
                        ? Result.Error.map(
                              Failure.create<IExpertise.FailureCode.GetOne>({
                                  cause: "EXPERTISE_NOT_FOUND",
                                  message: "존재하지 않는 전문 분야입니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          )
                        : Result.Ok.map(expertise),

                unless(
                    Result.Error.is,
                    Result.Ok.lift((expertise) => ({
                        id: expertise.id,
                        name: expertise.name,
                        sub_expertises: expertise.sub_expertises
                            .filter(isUnDeleted)
                            .map((sub) => ({
                                id: sub.id,
                                name: sub.name,
                            })),
                    })),
                ),
            );
    }
    export namespace RE {
        export const getList = (): Promise<IExpertise[]> =>
            pipe(
                0,

                async () =>
                    prisma.rEExpertiseModel.findMany({
                        select: PrismaJson.RE.select(),
                    }),

                filter(isUnDeleted),

                map((expertise) => ({
                    id: expertise.id,
                    name: expertise.name,
                })),

                toArray,
            );
    }
}
