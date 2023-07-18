import { IBIZUser } from "@APP/api/structures/user/IBIZUser";
import { Storage } from "@APP/externals/storage";
import { prisma } from "@APP/infrastructure/DB";
import { Failure, InternalError, Result, isUnDeleted, pick } from "@APP/utils";
import { Prisma } from "@PRISMA";
import { filter, map, pipe, toArray, toAsync, unless } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { PrismaJson } from "./prisma";
import { User } from "../user";
import { IResult } from "@APP/api/types";

export namespace Service {
    export const getBIZCertificationList =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            access_token: string,
        ): Promise<
            IResult<
                string[],
                | Failure<IBIZUser.FailureCode.GetBIZCertificationList>
                | InternalError
            >
        > =>
            pipe(
                access_token,

                User.Service.authorize(tx),

                unless(Result.Error.is, async (ok) =>
                    Result.Ok.flatten(ok).type === "client"
                        ? Result.Error.map(
                              Failure.create<IBIZUser.FailureCode.GetBIZCertificationList>(
                                  {
                                      cause: "PERMISSION_INSUFFICIENT",
                                      message:
                                          "해당 요청에 대한 권한이 없습니다.",
                                      statusCode: HttpStatus.FORBIDDEN,
                                  },
                              ),
                          )
                        : pipe(
                              ok,

                              Result.Ok.flatten,

                              pick("id"),

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

                              Result.Ok.map,
                          ),
                ),
            );

    export const createBIZCertificationImage =
        (tx: Prisma.TransactionClient = prisma) =>
        (access_token: string) =>
        (
            input: IBIZUser.ICertificationImageCreate,
        ): Promise<
            IResult<
                null,
                | Failure<IBIZUser.FailureCode.CreateBIZCertification>
                | InternalError
            >
        > =>
            pipe(
                access_token,

                User.Service.authorize(tx),

                unless(Result.Error.is, async (ok) =>
                    Result.Ok.flatten(ok).type === "client"
                        ? Result.Error.map(
                              Failure.create<IBIZUser.FailureCode.GetBIZCertificationList>(
                                  {
                                      cause: "PERMISSION_INSUFFICIENT",
                                      message:
                                          "해당 요청에 대한 권한이 없습니다.",
                                      statusCode: HttpStatus.FORBIDDEN,
                                  },
                              ),
                          )
                        : pipe(
                              ok,

                              Result.Ok.flatten,

                              pick("id"),

                              async (biz_user_id) =>
                                  tx.bIZCertificationImageModel.create({
                                      data: PrismaJson.createCertificationImageData(
                                          biz_user_id,
                                      )(input),
                                  }),

                              () => Result.Ok.map(null),
                          ),
                ),
            );
}
