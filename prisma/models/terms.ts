import { createModel } from "schemix";
import { TermsType } from "../enums";
import { Entity } from "../mixins";
import { User } from "./user";

export const Terms = createModel("TermsModel", (model) => {
    model
        .mixin(Entity)
        .string("title")
        .string("version")
        .string("url")
        .boolean("is_required")
        .enum("type", TermsType)
        .relation("agreements", TermsAgreement, { list: true })
        .map("terms");
});

export const TermsAgreement = createModel("TermsAgreementModel", (model) => {
    model
        .mixin(Entity)
        .string("terms_id")
        .string("user_id")
        .relation("terms", Terms, { fields: ["terms_id"], references: ["id"] })
        .relation("user", User, { fields: ["user_id"], references: ["id"] })
        .unique({ fields: ["user_id", "terms_id"] })
        .map("terms_agreements");
});
