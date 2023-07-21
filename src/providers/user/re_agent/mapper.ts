import { IREAgent } from "@APP/api/structures/user/IREAgent";

export namespace Mapper {
    export const toContact = (agg: IREAgent): IREAgent.IContact => {
        const { phone, email, real_estate } = agg;
        return {
            phone,
            email,
            real_estate_address: real_estate.address,
            real_estate_phone: real_estate.phone,
        };
    };
    export const toPublic = (agg: IREAgent): IREAgent.IPublic => {
        const {
            type,
            id,
            name,
            profile_image_url,
            introduction,
            expertise,
            real_estate,
            is_licensed,
        } = agg;
        return {
            type,
            id,
            name,
            profile_image_url,
            introduction,
            expertise,
            real_estate,
            is_licensed,
        };
    };
    export const toPrivate = (agg: IREAgent): IREAgent.IPrivate => {
        return { ...agg };
    };
}
