import { isUndefined } from "@fxts/core";
import typia from "typia";
import { IAuthentication } from "@APP/api/structures/IAuthentication";
import { ExternalFailure, Result } from "@APP/utils";
import { Kakao } from "./kakao/sdk";

export const Oauth: Record<
    IAuthentication.OauthType,
    (code: string) => Promise<
        Result<
            {
                oauth_sub: string;
                profile: IAuthentication.IAccountProfile;
            },
            ExternalFailure<"OAUTH">
        >
    >
> = {
    async kakao(code) {
        try {
            const { access_token } = await Kakao.getTokens(code);
            const me = await Kakao.getMe(access_token);
            const oauth_sub = me.id + "";
            const birthyear = me.kakao_account?.birthyear;
            const birthday = me.kakao_account?.birthday;
            const birth =
                me.kakao_account?.birthday_type !== "SOLAR"
                    ? null
                    : isUndefined(birthyear) || isUndefined(birthday)
                    ? null
                    : `${birthyear}-${birthday.slice(0, 2)}-${birthday.slice(
                          2,
                          4,
                      )}`;
            const name = me.kakao_account?.name ?? null;
            const email =
                (me.kakao_account?.is_email_valid &&
                    me.kakao_account.is_email_verified &&
                    me.kakao_account?.email) ||
                null;
            const phone = me.kakao_account?.phone_number ?? null;
            const gender = me.kakao_account?.gender ?? null;
            const profile_image_url =
                me.kakao_account?.profile?.profile_image_url ?? null;
            const profile: IAuthentication.IAccountProfile = {
                name: typia.is<Pick<IAuthentication.IAccountProfile, "name">>({
                    name,
                })
                    ? name
                    : null,
                email: typia.is<Pick<IAuthentication.IAccountProfile, "email">>(
                    {
                        email,
                    },
                )
                    ? email
                    : null,
                phone: typia.is<Pick<IAuthentication.IAccountProfile, "phone">>(
                    {
                        phone,
                    },
                )
                    ? phone
                    : null,
                profile_image_url: typia.is<
                    Pick<IAuthentication.IAccountProfile, "profile_image_url">
                >({ profile_image_url })
                    ? profile_image_url
                    : null,
                birth: typia.is<Pick<IAuthentication.IAccountProfile, "birth">>(
                    {
                        birth,
                    },
                )
                    ? birth
                    : null,
                gender: typia.is<
                    Pick<IAuthentication.IAccountProfile, "gender">
                >({
                    gender,
                })
                    ? gender
                    : null,
                address: null,
            };
            return Result.Ok.map({ oauth_sub, profile });
        } catch (error) {
            return Result.Error.map(ExternalFailure.get("OAUTH", error));
        }
    },
};
