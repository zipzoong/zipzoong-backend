import { IREAgent } from "@APP/api/structures/user/IREAgent";
import { IResult } from "@APP/api/types";
import { prisma } from "@APP/infrastructure/DB";
import { DateMapper, InternalError, Result } from "@APP/utils";
import { Prisma } from "@PRISMA";
import { randomUUID } from "crypto";
import typia from "typia";

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
                    profile_image_url: true,
                    introduction_title: true,
                    introduction_content: true,
                },
            },
            is_licensed: true,
            expertise: {
                select: { id: true, name: true },
            },
            re_number: true,
            re_name: true,
            re_phone: true,
            re_licensed_agent_name: true,
            re_address_road: true,
            re_address_zone_code: true,
            re_address_detail: true,
            re_address_extra: true,
            biz_open_date: true,
        }) satisfies Prisma.REAgentModelSelect;

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
            is_licensed: true,
            expertise: {
                select: { id: true, name: true },
            },
            re_number: true,
            re_name: true,
            re_phone: true,
            re_licensed_agent_name: true,
            re_address_road: true,
            re_address_zone_code: true,
            re_address_detail: true,
            re_address_extra: true,
            biz_open_date: true,
        }) satisfies Prisma.REAgentModelSelect;
}

export namespace PrismaMapper {
    export const toSummary = (
        input: NonNullable<
            Awaited<
                ReturnType<
                    typeof prisma.rEAgentModel.findFirst<{
                        select: ReturnType<typeof PrismaJson.summarySelect>;
                    }>
                >
            >
        >,
    ): IResult<IREAgent.ISummary, InternalError> => {
        const agent: IREAgent.ISummary = {
            type: "real estate agent",
            id: input.base.base.id,
            name: input.base.base.name,
            profile_image_url: input.base.profile_image_url,
            introduction: {
                title: input.base.introduction_title,
                content: input.base.introduction_content,
            },
            expertise: input.expertise,
            is_licensed: input.is_licensed,
            real_estate: {
                name: input.re_name,
                number: input.re_number,
                licensed_agent_name: input.re_licensed_agent_name,
                phone: input.re_phone,
                open_date: DateMapper.toDate(input.biz_open_date),
                address: {
                    road: input.re_address_road,
                    zone_code: input.re_address_zone_code,
                    detail: input.re_address_detail,
                    extra: input.re_address_extra,
                },
            },
        };

        return typia.equals<IREAgent.ISummary>(agent)
            ? Result.Ok.map(agent)
            : Result.Error.map(
                  InternalError.create(
                      Error(
                          `Fail to map REAgent Summary. id: | ${input.base.base.id} |`,
                      ),
                  ),
              );
    };

    export const toPrivate = (
        input: NonNullable<
            Awaited<
                ReturnType<
                    typeof prisma.rEAgentModel.findFirst<{
                        select: ReturnType<typeof PrismaJson.privateSelect>;
                    }>
                >
            >
        >,
    ): IResult<IREAgent.IPrivate, InternalError> => {
        const agent: IREAgent.IPrivate = {
            type: "real estate agent",
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
            expertise: input.expertise,
            is_licensed: input.is_licensed,
            real_estate: {
                name: input.re_name,
                number: input.re_number,
                licensed_agent_name: input.re_licensed_agent_name,
                phone: input.re_phone,
                open_date: DateMapper.toDate(input.biz_open_date),
                address: {
                    road: input.re_address_road,
                    zone_code: input.re_address_zone_code,
                    detail: input.re_address_detail,
                    extra: input.re_address_extra,
                },
            },
        };

        return typia.equals<IREAgent.IPrivate>(agent)
            ? Result.Ok.map(agent)
            : Result.Error.map(
                  InternalError.create(
                      Error(
                          `Fail to map REAgent Private. id: | ${input.base.base.id} |`,
                      ),
                  ),
              );
    };
}
