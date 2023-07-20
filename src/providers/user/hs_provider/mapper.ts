import { IHSProvider } from "@APP/api/structures/user/IHSProvider";

export namespace Mapper {
    export const toPublic = (agg: IHSProvider): IHSProvider.IPublic => {
        const {
            type,
            id,
            name,
            profile_image_url,
            introduction,
            expertise,
            registration_number,
            biz_phone,
            open_date,
            address,
        } = agg;
        return {
            type,
            id,
            name,
            profile_image_url,
            introduction,
            expertise,
            registration_number,
            biz_phone,
            open_date,
            address,
        };
    };

    export const toContact = (agg: IHSProvider): IHSProvider.IContact => {
        const { phone, email, address, biz_phone } = agg;
        return { phone, email, address, biz_phone };
    };

    export const toPrivate = (
        agg: IHSProvider.IPrivate,
    ): IHSProvider.IPrivate => {
        return { ...agg };
    };
}
