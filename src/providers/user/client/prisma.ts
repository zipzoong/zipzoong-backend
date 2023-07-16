import { IClient } from "@APP/api/structures/user/IClient";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import { DateMapper, Result } from "@APP/utils";
import { Prisma } from "@PRISMA";
import { isNull, negate } from "@fxts/core";
import { randomUUID } from "crypto";
import typia from "typia";

export namespace PrismaJson {
    export const createData = (input: IClient.ICreate) => {
        const now = DateMapper.toISO();
        return {
            base: {
                create: {
                    id: randomUUID(),
                    name: input.name,
                    email: input.email,
                    created_at: now,
                    updated_at: now,
                    is_deleted: false,
                    deleted_at: null,
                },
            },
            birth: input.birth,
            gender: input.gender,
            phone: input.phone,
            profile_image_url: input.profile_image_url,
            address_zone_code: input.address?.zone_code ?? null,
            address_road: input.address?.road ?? null,
            address_detail: input.address?.detail ?? null,
            address_extra: input.address?.extra ?? null,
        } satisfies Prisma.ClientModelCreateInput;
    };

    export const privateSelect = () =>
        ({
            id: true,
            profile_image_url: true,
            phone: true,
            address_road: true,
            address_zone_code: true,
            address_detail: true,
            address_extra: true,
            birth: true,
            gender: true,
            base: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    created_at: true,
                    updated_at: true,
                    is_deleted: true,
                    deleted_at: true,
                },
            },
        }) satisfies Prisma.ClientModelSelect;
}

export namespace PrismaMapper {
    export const toPrivate = (
        input: NonNullable<
            Awaited<
                ReturnType<
                    typeof prisma.clientModel.findFirst<{
                        select: ReturnType<typeof PrismaJson.privateSelect>;
                    }>
                >
            >
        >,
    ): IResult<IClient.IPrivate, string> => {
        const isNotNull = negate(isNull);
        const client: IClient.IPrivate = {
            type: "client",
            id: input.id,
            name: input.base.name,
            email: input.base.email,
            phone: input.phone,
            birth: isNotNull(input.birth)
                ? DateMapper.toDate(input.birth)
                : null,
            gender: input.gender,
            profile_image_url: input.profile_image_url,
            address:
                isNotNull(input.address_road) &&
                isNotNull(input.address_zone_code)
                    ? {
                          road: input.address_road,
                          zone_code: input.address_zone_code,
                          detail: input.address_detail,
                          extra: input.address_extra,
                      }
                    : null,
            created_at: DateMapper.toISO(input.base.created_at),
            updated_at: DateMapper.toISO(input.base.updated_at),
        };
        return typia.equals<IClient.IPrivate>(client)
            ? Result.Ok.map(client)
            : Result.Error.map(input.id);
    };
}
