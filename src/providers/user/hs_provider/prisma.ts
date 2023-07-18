import { IHSProvider } from "@APP/api/structures/user/IHSProvider";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import {
    DateMapper,
    InternalError,
    Result,
    isUnDeleted,
    pick,
} from "@APP/utils";
import { Prisma } from "@PRISMA";
import { isUndefined } from "@fxts/core";
import { randomUUID } from "crypto";
import typia from "typia";

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

    const expertiseRelationSelect = () =>
        ({
            is_deleted: true,
            deleted_at: true,
            sub_expertise: {
                select: {
                    id: true,
                    name: true,
                    super_expertise: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
        }) satisfies Prisma.HSSubExpertiseRelationModelSelect;

    export const summarySelect = () =>
        ({
            base: {
                select: {
                    base: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    introduction_title: true,
                    introduction_content: true,
                    profile_image_url: true,
                },
            },
            expertise_relation: {
                select: expertiseRelationSelect(),
            },
        }) satisfies Prisma.HSProviderModelSelect;

    export const privateSelect = () =>
        ({
            base: {
                select: {
                    base: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            is_deleted: true,
                            deleted_at: true,
                            created_at: true,
                            updated_at: true,
                        },
                    },
                    phone: true,
                    is_verified: true,
                    profile_image_url: true,
                    introduction_title: true,
                    introduction_content: true,
                },
            },
            expertise_relation: {
                select: expertiseRelationSelect(),
            },
            biz_registration_number: true,
            biz_phone: true,
            biz_open_date: true,
            address_road: true,
            address_zone_code: true,
            address_detail: true,
            address_extra: true,
        }) satisfies Prisma.HSProviderModelSelect;
}

export namespace PrismaMapper {
    export const toSummary = (
        input: NonNullable<
            Awaited<
                ReturnType<
                    typeof prisma.hSProviderModel.findFirst<{
                        select: ReturnType<typeof PrismaJson.summarySelect>;
                    }>
                >
            >
        >,
    ): IResult<IHSProvider.ISummary, InternalError> => {
        const sub_expertises = input.expertise_relation
            .filter(isUnDeleted)
            .map(pick("sub_expertise"));

        const super_expertise = sub_expertises[0]?.super_expertise;

        if (isUndefined(super_expertise))
            return Result.Error.map(
                InternalError.create(
                    Error(
                        `HSProvider 전문분야 누락. id: | ${input.base.base.id} |`,
                    ),
                ),
            );

        const expertise = {
            id: super_expertise.id,
            name: super_expertise.name,
            sub_expertises: sub_expertises.filter(
                ({ super_expertise: { id } }) => super_expertise.id === id,
            ),
        };

        const provider: IHSProvider.ISummary = {
            type: "home service provider",
            id: input.base.base.id,
            name: input.base.base.name,
            profile_image_url: input.base.profile_image_url,
            introduction: {
                title: input.base.introduction_title,
                content: input.base.introduction_content,
            },
            expertise,
        };

        return typia.equals<IHSProvider.ISummary>(provider)
            ? Result.Ok.map(provider)
            : Result.Error.map(
                  InternalError.create(
                      Error(
                          `Fail to map HSProvider Summary. id: | ${input.base.base.id} |`,
                      ),
                  ),
              );
    };

    export const toPrivate = (
        input: NonNullable<
            Awaited<
                ReturnType<
                    typeof prisma.hSProviderModel.findFirst<{
                        select: ReturnType<typeof PrismaJson.privateSelect>;
                    }>
                >
            >
        >,
    ): IResult<IHSProvider.IPrivate, InternalError> => {
        const sub_expertises = input.expertise_relation
            .filter(isUnDeleted)
            .map(pick("sub_expertise"));

        const super_expertise = sub_expertises[0]?.super_expertise;

        if (isUndefined(super_expertise))
            return Result.Error.map(
                InternalError.create(
                    Error(
                        `HSProvider 전문분야 누락. id: | ${input.base.base.id} |`,
                    ),
                ),
            );

        const expertise = {
            id: super_expertise.id,
            name: super_expertise.name,
            sub_expertises: sub_expertises.filter(
                ({ super_expertise: { id } }) => super_expertise.id === id,
            ),
        };

        const provider: IHSProvider.IPrivate = {
            type: "home service provider",
            id: input.base.base.id,
            name: input.base.base.name,
            email: input.base.base.email,
            created_at: DateMapper.toISO(input.base.base.created_at),
            updated_at: DateMapper.toISO(input.base.base.updated_at),
            phone: input.base.phone,
            is_verified: input.base.is_verified,
            profile_image_url: input.base.profile_image_url,
            introduction: {
                title: input.base.introduction_title,
                content: input.base.introduction_content,
            },
            expertise,
            registration_number: input.biz_registration_number,
            biz_phone: input.biz_phone,
            open_date: DateMapper.toDate(input.biz_open_date),
            address: {
                road: input.address_road,
                zone_code: input.address_zone_code,
                detail: input.address_detail,
                extra: input.address_extra,
            },
        };

        return typia.equals<IHSProvider.IPrivate>(provider)
            ? Result.Ok.map(provider)
            : Result.Error.map(
                  InternalError.create(
                      Error(
                          `Fail to map HSProvider Private. id: | ${input.base.base.id} |`,
                      ),
                  ),
              );
    };
}
