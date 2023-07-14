import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { DateMapper } from "@APP/utils";
import { Prisma } from "@PRISMA";
import { randomUUID } from "crypto";

export namespace PrismaJson {
    export const createData = (input: IREAgent.ICreate) => {
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
            is_licensed: input.is_licensed,
            re_number: input.real_estate.number,
            re_name: input.real_estate.name,
            re_phone: input.real_estate.phone,
            re_licensed_agent_name: input.real_estate.licensed_agent_name,
            re_address_zone_code: input.real_estate.address.zone_code,
            re_address_road: input.real_estate.address.road,
            re_address_detail: input.real_estate.address.detail,
            re_address_extra: input.real_estate.address.extra,
            biz_open_date: input.real_estate.open_date,
            expertise: { connect: { id: input.expertise_id } },
        } satisfies Prisma.REAgentModelCreateInput;
    };
}
