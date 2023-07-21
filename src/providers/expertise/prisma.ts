import { Prisma } from "@PRISMA";

export namespace PrismaJson {
    export namespace HS {
        export const subSelect = () =>
            ({
                id: true,
                name: true,
                is_deleted: true,
                deleted_at: true,
                super_expertise: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            } satisfies Prisma.HSSubExpertiseModelSelect);

        export const superSelect = () =>
            ({
                id: true,
                name: true,
                is_deleted: true,
                deleted_at: true,
                sub_expertises: {
                    select: {
                        id: true,
                        name: true,
                        is_deleted: true,
                        deleted_at: true,
                    },
                },
            } satisfies Prisma.HSSuperExpertiseModelSelect);
    }

    export namespace RE {
        export const select = () =>
            ({
                id: true,
                name: true,
                is_deleted: true,
                deleted_at: true,
            } satisfies Prisma.REExpertiseModelSelect);
    }
}
