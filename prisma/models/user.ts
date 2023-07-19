import { createModel } from "schemix";
import { RelationalFieldOptions } from "schemix/dist/typings/prisma-type-options";
import { GenderType, ImageAccessType } from "../enums";
import { Entity } from "../mixins";
import { OauthAccount } from "./account";
import { TermsAgreement } from "./terms";

const one_to_one: RelationalFieldOptions = {
    fields: ["id"],
    references: ["id"],
};

/**
 * 모든 사용자 공통 속성
 */
export const User = createModel("UserModel", (model) => {
    model
        .mixin(Entity)
        .string("name")
        .string("email", { optional: true })
        .relation("client", Client, { optional: true })
        .relation("biz_user", BIZUser, { optional: true })
        .relation("terms_agreements", TermsAgreement, { list: true })
        .map("users");
});

export const Client = createModel("ClientModel", (model) => {
    model
        .string("id", { id: true })
        .dateTime("birth", { optional: true, raw: "@database.Date" })
        .enum("gender", GenderType, { optional: true })
        .string("phone", { optional: true })
        .string("address_zone_code", { optional: true })
        .string("address_road", { optional: true })
        .string("address_detail", { optional: true })
        .string("address_extra", { optional: true })
        .string("profile_image_url", { optional: true })
        .relation("base", User, one_to_one)
        .relation("oauth_accounts", OauthAccount, { list: true })
        .map("clients");
});

/**
 * 사업정보를 제외한 사업자 공통 속성
 */
export const BIZUser = createModel("BIZUserModel", (model) => {
    model
        .string("id", { id: true })
        .boolean("is_verified")
        .string("introduction_title")
        .string("introduction_content")
        .string("phone")
        .string("profile_image_url")
        .relation("base", User, one_to_one)
        .relation("re_agent", REAgent, { optional: true })
        .relation("hs_provider", HSProvider, { optional: true })
        .relation("oauth_accounts", OauthAccount, { list: true })
        .relation("biz_certification_images", BIZCertificationImage, {
            list: true,
        })
        .map("biz_users");
});

export const BIZCertificationImage = createModel(
    "BIZCertificationImageModel",
    (model) => {
        model
            .mixin(Entity)
            .string("biz_user_id")
            .string("url")
            .enum("access_type", ImageAccessType)
            .relation("biz_user", BIZUser, {
                fields: ["biz_user_id"],
                references: ["id"],
            })
            .map("biz_certification_images");
    },
);

export const REAgent = createModel("REAgentModel", (model) => {
    model
        .string("id", { id: true })
        .boolean("is_licensed")
        .string("expertise_id")
        .string("re_number") // 부동산 중개 등록 번호
        .string("re_name") // 부동산 상호명
        .string("re_phone") // 부동산 전화번호
        .string("re_licensed_agent_name") // 부동산 개업자 성명
        .string("re_address_zone_code")
        .string("re_address_road")
        .string("re_address_detail", { optional: true })
        .string("re_address_extra", { optional: true })
        .dateTime("biz_open_date", { raw: "@database.Date" }) // 부동산 개업일
        .relation("base", BIZUser, one_to_one)
        .relation("expertise", REExpertise, {
            fields: ["expertise_id"],
            references: ["id"],
        })
        .relation("portfolios", REPortfolio, { list: true })
        .map("re_agents");
});

export const REExpertise = createModel("REExpertiseModel", (model) => {
    model
        .mixin(Entity)
        .string("name", { unique: true })
        .relation("re_agents", REAgent, { list: true })
        .map("re_expertises");
});

export const HSProvider = createModel("HSProviderModel", (model) => {
    model
        .string("id", { id: true })
        .string("address_zone_code")
        .string("address_road")
        .string("address_detail", { optional: true })
        .string("address_extra", { optional: true })
        .string("biz_phone")
        .string("biz_registration_number")
        .dateTime("biz_open_date", { raw: "@database.Date" }) // 사업장 개업일
        .relation("base", BIZUser, one_to_one)
        .relation("expertise_relation", HSSubExpertiseRelation, {
            list: true,
        })
        .relation("portfolios", HSPortfolio, { list: true })
        .map("hs_providers");
});

export const HSSubExpertise = createModel("HSSubExpertiseModel", (model) => {
    model
        .mixin(Entity)
        .string("name")
        .string("super_expertise_id")
        .relation("relations", HSSubExpertiseRelation, { list: true })
        .relation("super_expertise", HSSuperExpertise, {
            fields: ["super_expertise_id"],
            references: ["id"],
        })
        .map("hs_sub_expertises");
});

export const HSSuperExpertise = createModel(
    "HSSuperExpertiseModel",
    (model) => {
        model
            .mixin(Entity)
            .string("name", { unique: true })
            .relation("sub_expertises", HSSubExpertise, {
                list: true,
            })
            .map("hs_super_expertises");
    },
);

export const HSSubExpertiseRelation = createModel(
    "HSSubExpertiseRelationModel",
    (model) => {
        model
            .mixin(Entity)
            .string("hs_provider_id")
            .string("sub_expertise_id")
            .unique({ fields: ["hs_provider_id", "sub_expertise_id"] })
            .relation("hs_provider", HSProvider, {
                fields: ["hs_provider_id"],
                references: ["id"],
            })
            .relation("sub_expertise", HSSubExpertise, {
                fields: ["sub_expertise_id"],
                references: ["id"],
            })
            .map("hs_sub_expertise_relations");
    },
);

export const REPortfolio = createModel("REPortfolioModel", (model) => {
    model
        .mixin(Entity)
        .string("re_agent_id")
        .string("title")
        .string("main_url")
        .boolean("is_visible")
        .relation("re_agent", REAgent, {
            fields: ["re_agent_id"],
            references: ["id"],
        })
        .map("re_portfolios");
});

export const HSPortfolio = createModel("HSPortfolioModel", (model) => {
    model
        .mixin(Entity)
        .string("hs_provider_id")
        .string("title")
        .string("main_url")
        .boolean("is_visible")
        .relation("hs_provider", HSProvider, {
            fields: ["hs_provider_id"],
            references: ["id"],
        })
        .map("hs_portfolios");
});
