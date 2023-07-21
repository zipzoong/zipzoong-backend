import { createModel } from "schemix";
import { Entity } from "../mixins";

export const PhoneVerification = createModel(
    "PhoneVerificationModel",
    (model) => {
        model
            .mixin(Entity)
            .string("phone")
            .string("code")
            .string("transaction_id")
            .boolean("is_verified")
            .map("phone_verifications");
    },
);
