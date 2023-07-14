import { IBIZUser } from "@APP/api/structures/user/IBIZUser";
import { DateMapper } from "@APP/utils";
import { Prisma } from "@PRISMA";
import { randomUUID } from "crypto";

export namespace PrismaJson {
    export const createCertificationImageListData =
        (biz_user_id: string) =>
        (input: IBIZUser.ICertificationImageCreate[]) => {
            const now = DateMapper.toISO();
            return input.map(
                (image) =>
                    ({
                        id: randomUUID(),
                        access_type: image.access_type,
                        url: image.url,
                        biz_user_id,
                        created_at: now,
                        updated_at: now,
                        is_deleted: false,
                        deleted_at: null,
                    }) satisfies Prisma.BIZCertificationImageModelCreateManyInput,
            );
        };
}
