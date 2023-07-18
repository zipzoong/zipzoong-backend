import { IHSProvider } from "@APP/api/structures/user/IHSProvider";

export namespace Mapper {
    export namespace Private {
        export const toContact = (
            provider: IHSProvider.IPrivate,
        ): IHSProvider.IContact => {
            const { phone, email, address, biz_phone } = provider;
            return { phone, email, address, biz_phone };
        };
        export const toPublic = (
            provider: IHSProvider.IPrivate,
        ): IHSProvider.IPublic => {
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
            } = provider;
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
    }
}
