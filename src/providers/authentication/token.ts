import { pipe, unless } from "@fxts/core";
import typia from "typia";
import { IAuthentication } from "@APP/api/structures/IAuthentication";
import { IResult } from "@APP/api/types";
import { Configuration } from "@APP/infrastructure/config";
import { Crypto, DateMapper, InternalError, Result } from "@APP/utils";
import { IToken } from "./interface";

export namespace Token {
    const hour = 1000 * 60 * 60 * 1;
    const day = hour * 24;

    const _verify = <T extends IToken.IBase>({
        token,
        key,
        parser,
    }: {
        token: string;
        key: string;
        parser: (input: string) => T;
    }): IResult<T, IAuthentication.FailureCode.TokenVerify | InternalError> =>
        pipe(
            Crypto.decrypt({ token, key }),
            unless(Result.Error.is, (input) => {
                try {
                    const payload = parser(Result.Ok.flatten(input));
                    const expired_at = new Date(payload.expired_at);
                    const now = new Date();
                    if (now > expired_at)
                        return Result.Error.map("TOKEN_EXPIRED" as const);
                    return Result.Ok.map(payload);
                } catch {
                    return Result.Error.map("TOKEN_INVALID" as const);
                }
            }),
        );

    export namespace Account {
        const duration = hour;
        const key = Configuration.ACCOUNT_TOKEN_KEY;

        export const generate = ({
            account_id,
        }: Pick<IToken.IAccount, "account_id">): IResult<
            IAuthentication.IToken,
            InternalError
        > => {
            const expired_at = DateMapper.toISO(
                new Date(Date.now() + duration),
            );
            return pipe(
                {
                    type: "account",
                    account_id,
                    expired_at,
                } satisfies IToken.IAccount,

                typia.createStringify<IToken.IAccount>(),

                (plain) => Crypto.encrypt({ plain, key }),

                unless(
                    Result.Error.is,
                    Result.Ok.lift((token) => ({ token, expired_at })),
                ),
            );
        };

        export const verify = (token: string) =>
            _verify({
                token,
                parser: typia.createAssertParse<IToken.IAccount>(),
                key,
            });
    }

    export namespace Access {
        const duration = hour * 8;
        const key = Configuration.ACCESS_TOKEN_KEY;

        export const generate = ({
            user_id,
            user_type,
        }: Pick<IToken.IAccess, "user_id" | "user_type">): IResult<
            IAuthentication.IToken,
            InternalError
        > => {
            const expired_at = DateMapper.toISO(
                new Date(Date.now() + duration),
            );
            return pipe(
                {
                    type: "access",
                    user_id,
                    user_type,
                    expired_at,
                } satisfies IToken.IAccess,

                typia.createStringify<IToken.IAccess>(),

                (plain) => Crypto.encrypt({ plain, key }),

                unless(
                    Result.Error.is,
                    Result.Ok.lift((token) => ({ token, expired_at })),
                ),
            );
        };

        export const verify = (token: string) =>
            _verify({
                token,
                parser: typia.createAssertParse<IToken.IAccess>(),
                key,
            });
    }

    export namespace Refresh {
        const duration = day;
        const key = Configuration.REFRESH_TOKEN_KEY;

        export const generate = ({
            user_id,
            user_type,
        }: Pick<IToken.IRefresh, "user_id" | "user_type">): IResult<
            IAuthentication.IToken,
            InternalError
        > => {
            const expired_at = DateMapper.toISO(
                new Date(Date.now() + duration),
            );
            return pipe(
                {
                    type: "refresh",
                    user_id,
                    user_type,
                    expired_at,
                } satisfies IToken.IRefresh,

                typia.createStringify<IToken.IRefresh>(),

                (plain) => Crypto.encrypt({ plain, key }),

                unless(
                    Result.Error.is,
                    Result.Ok.lift((token) => ({ token, expired_at })),
                ),
            );
        };

        export const verify = (token: string) =>
            _verify({
                token,
                parser: typia.createAssertParse<IToken.IRefresh>(),
                key,
            });
    }
}
