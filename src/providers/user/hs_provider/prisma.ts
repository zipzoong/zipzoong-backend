import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { DateMapper } from "@APP/utils";
import { Prisma } from "@PRISMA";
import { randomUUID } from "crypto";

export namespace PrismaJson {
    export const createData = (input: IHSProvider.ICreate) => {
        const now = DateMapper.toISO();
        return {
            base: {
                create: {
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
                    is_verified: false,
                    introduction_title: input.introduction.title,
                    introduction_content: input.introduction.content,
                    phone: input.phone,
                    profile_image_url: input.profile_image_url,
                },
            },
            biz_phone: input.biz_phone,
            biz_registration_number: input.registration_number,
            biz_open_date: input.open_date,
            address_zone_code: input.address.zone_code,
            address_road: input.address.road,
            address_detail: input.address.detail,
            address_extra: input.address.extra,
            expertise_relation: {
                createMany: {
                    data: input.sub_expertise_ids.map((sub_expertise_id) => ({
                        id: randomUUID(),
                        sub_expertise_id,
                        created_at: now,
                        updated_at: now,
                        is_deleted: false,
                        deleted_at: null,
                    })),
                },
            },
        } satisfies Prisma.HSProviderModelCreateInput;
    };
}
