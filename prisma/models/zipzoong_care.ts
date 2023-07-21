import { createModel } from "schemix";
import { Entity } from "../mixins";
import { BIZUser, Client } from "./user";

export const ZipzoongCareRequest = createModel(
    "ZipzoongCareRequestModel",
    (model) => {
        model
            .mixin(Entity)
            .string("client_id")
            .string("url")
            .relation("client", Client, {
                fields: ["client_id"],
                references: ["id"],
            })
            .map("temp_zipzoong_care_requests");
    },
);

export const ZipzoongCare = createModel("ZipzoongCareModel", (model) => {
    model
        .mixin(Entity)
        .string("biz_user_id")
        .string("url")
        .relation("biz_user", BIZUser, {
            fields: ["biz_user_id"],
            references: ["id"],
        })
        .map("temp_zipzoong_cares");
});
