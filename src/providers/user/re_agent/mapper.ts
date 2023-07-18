import { IREAgent } from "@APP/api/structures/user/IREAgent";

export namespace Mapper {
    export namespace Private {
        export const toContact = (
            agent: IREAgent.IPrivate,
        ): IREAgent.IContact => {
            const { phone, email, real_estate } = agent;
            return {
                phone,
                email,
                real_estate_address: real_estate.address,
                real_estate_phone: real_estate.phone,
            };
        };
        export const toPublic = (
            agent: IREAgent.IPrivate,
        ): IREAgent.IPublic => {
            const {
                type,
                id,
                name,
                profile_image_url,
                introduction,
                expertise,
                real_estate,
                is_licensed,
            } = agent;
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
    }
}
