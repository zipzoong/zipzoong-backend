import { createModel } from "schemix";
import { GenderType, OauthType } from "../enums";
import { Entity } from "../mixins";
import { BIZUser, Client } from "./user";

export const OauthAccount = createModel("OauthAccountModel", (model) => {
    model
        .mixin(Entity)
        .enum("oauth_type", OauthType)
        .string("oauth_sub")
        .string("biz_user_id", { optional: true })
        .string("client_id", { optional: true })
        .string("name", { optional: true })
        .string("email", { optional: true })
        .string("phone", { optional: true })
        .string("profile_image_url", { optional: true })
        .string("birth", { optional: true })
        .enum("gender", GenderType, { optional: true })
        .string("address_zone_code", { optional: true })
        .string("address_road", { optional: true })
        .string("address_detail", { optional: true })
        .string("address_extra", { optional: true })
        .relation("client", Client, {
            optional: true,
            fields: ["client_id"],
            references: ["id"],
        })
        .relation("biz_user", BIZUser, {
            optional: true,
            fields: ["biz_user_id"],
            references: ["id"],
        })
        .map("oauth_accounts");
});
