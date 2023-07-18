import { Prisma } from "@PRISMA";
import { isNull, pipe } from "@fxts/core";
import { HttpStatus } from "@nestjs/common";
import { IClient } from "@APP/api/structures/user/IClient";
import { IUser } from "@APP/api/structures/user/IUser";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import { Failure, InternalError, Result, isDeleted } from "@APP/utils";
import { User } from "../user";
import { PrismaJson, PrismaMapper } from "./prisma";

export namespace Service {
    export const getPrivate =
        (tx: Prisma.TransactionClient = prisma) =>
        (
            client_id: string,
        ): Promise<
            IResult<
                IClient.IPrivate,
                Failure<IUser.FailureCode.GetPrivate> | InternalError
            >
        > =>
            pipe(
                client_id,

                async (id) =>
                    tx.clientModel.findFirst({
                        where: { id },
                        select: PrismaJson.privateSelect(),
                    }),

                (model) =>
                    isNull(model)
                        ? Result.Error.map(
                              Failure.create<IUser.FailureCode.GetPrivate>({
                                  cause: "USER_NOT_FOUND",
                                  message: "존재하지 않는 사용자입니다.",
                                  statusCode: HttpStatus.NOT_FOUND,
                              }),
                          )
                        : isDeleted(model.base)
                        ? Result.Error.map(
                              Failure.create<IUser.FailureCode.GetPrivate>({
                                  cause: "USER_INACTIVE",
                                  message: "비활성화된 사용자입니다.",
                                  statusCode: HttpStatus.FORBIDDEN,
                              }),
                          )
                        : PrismaMapper.toPrivate(model),
            );

    export const getProfile = User.Service.getProfile({
        user_type: "client",
        getPrivate,
    });
}
