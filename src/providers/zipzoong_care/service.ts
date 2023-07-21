import { Prisma } from "@PRISMA";
import { filter, map, pipe, toArray, toAsync } from "@fxts/core";
import { randomUUID } from "crypto";
import { IResult, IUser } from "@APP/api";
import { Storage } from "@APP/externals/storage";
import { prisma } from "@APP/infrastructure/DB";
import {
    DateMapper,
    Failure,
    InternalError,
    Result,
    isUnDeleted,
    pick,
} from "@APP/utils";
import { User } from "../user/user";

export namespace Service {
    export const request =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            access_token: string,
        ): Promise<
            IResult<
                string,
                | InternalError
                | Failure<
                      IUser.FailureCode.ValidateType | IUser.FailureCode.Verify
                  >
            >
        > => {
            const permission = await User.Service.validateType("client")(tx)(
                access_token,
            );
            if (Result.Error.is(permission)) return permission;
            const verification = User.Service.verify(
                Result.Ok.flatten(permission),
            );
            if (Result.Error.is(verification)) return verification;
            const user = Result.Ok.flatten(verification);
            const upload_result = await Storage.getUploadUrl("care_request");
            if (Result.Error.is(upload_result)) return upload_result;
            const upload = Result.Ok.flatten(upload_result);
            const now = DateMapper.toISO();
            await tx.zipzoongCareRequestModel.create({
                data: {
                    id: randomUUID(),
                    url: upload.url,
                    client_id: user.id,
                    created_at: now,
                    updated_at: now,
                    is_deleted: false,
                    deleted_at: null,
                },
            });
            return Result.Ok.map(upload.presigned_url);
        };

    export const getList =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            access_token: string,
        ): Promise<
            IResult<
                string[],
                InternalError | Failure<IUser.FailureCode.Validate>
            >
        > => {
            const permission = await User.Service.validate(tx)(access_token);
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            return pipe(
                user.id,

                async (biz_user_id) =>
                    tx.zipzoongCareModel.findMany({
                        where: { biz_user_id },
                    }),

                filter(isUnDeleted),

                map(pick("url")),

                toAsync,

                map((url) =>
                    Storage.getReadUrl({ access_type: "zipzoong_s3", url }),
                ),

                toArray,

                Result.Ok.map,
            );
        };

    export const getRequestList =
        (tx: Prisma.TransactionClient = prisma) =>
        async (
            access_token: string,
        ): Promise<
            IResult<
                string[],
                InternalError | Failure<IUser.FailureCode.ValidateType>
            >
        > => {
            const permission = await User.Service.validateType("client")(tx)(
                access_token,
            );
            if (Result.Error.is(permission)) return permission;
            const user = Result.Ok.flatten(permission);
            return pipe(
                user.id,

                async (client_id) =>
                    tx.zipzoongCareRequestModel.findMany({
                        where: { client_id },
                    }),

                filter(isUnDeleted),

                map(pick("url")),

                toAsync,

                map((url) =>
                    Storage.getReadUrl({ access_type: "zipzoong_s3", url }),
                ),

                toArray,

                Result.Ok.map,
            );
        };
}
