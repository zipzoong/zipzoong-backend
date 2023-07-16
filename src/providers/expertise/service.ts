import { prisma } from "@APP/infrastructure/DB";
import { Failure, isUnDeleted } from "@APP/utils";
import { filter, isNull, map, negate, pipe, toArray, unless } from "@fxts/core";
import { PrismaJson } from "./prisma";
import { IExpertise } from "@APP/api/structures/IExpertise";
import { HttpStatus } from "@nestjs/common";

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

        /**
         * @throw 404 EXPERTISE_NOT_FOUND
         */
        export const getOne = (
            expertise_id: string,
        ): Promise<IExpertise.ISuper> =>
            pipe(
                expertise_id,

                async (id) =>
                    prisma.hSSuperExpertiseModel.findFirst({
                        where: { id },
                        select: PrismaJson.HS.superSelect(),
                    }),

                unless(negate(isNull), () =>
                    Failure.throwFailure<IExpertise.FailureCode.GetOne>({
                        cause: "EXPERTISE_NOT_FOUND",
                        message: "존재하지 않는 전문 분야입니다.",
                        statusCode: HttpStatus.NOT_FOUND,
                    }),
                ),

                unless(isUnDeleted, () =>
                    Failure.throwFailure<IExpertise.FailureCode.GetOne>({
                        cause: "EXPERTISE_NOT_FOUND",
                        message: "존재하지 않는 전문 분야입니다.",
                        statusCode: HttpStatus.NOT_FOUND,
                    }),
                ),

                (expertise) => ({
                    id: expertise.id,
                    name: expertise.name,
                    sub_expertises: expertise.sub_expertises
                        .filter(isUnDeleted)
                        .map((sub) => ({
                            id: sub.id,
                            name: sub.name,
                        })),
                }),
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
