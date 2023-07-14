import { IClient } from "@APP/api/structures/user/IClient";
import { DateMapper } from "@APP/utils";
import { Prisma } from "@PRISMA";
import { randomUUID } from "crypto";

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
}
