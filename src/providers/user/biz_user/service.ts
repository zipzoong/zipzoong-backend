import { Storage } from "@APP/externals/storage";
import { prisma } from "@APP/infrastructure/DB";
import { Result, isUnDeleted } from "@APP/utils";
import { Prisma } from "@PRISMA";
import { filter, map, pipe, toArray, toAsync } from "@fxts/core";

export namespace Service {
    export const getBIZCertificationList =
        (tx: Prisma.TransactionClient = prisma) =>
        (user_id: string) =>
            pipe(
                user_id,
                async (biz_user_id) =>
                    tx.bIZCertificationImageModel.findMany({
                        where: { biz_user_id },
                    }),

                filter(isUnDeleted),

                toAsync,

                map(Storage.getReadUrl),

                filter(Result.Ok.is),

                map(Result.Ok.flatten),

                toArray,
            );
}
