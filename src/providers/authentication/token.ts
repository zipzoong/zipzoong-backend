import { pipe, unless } from "@fxts/core";
import typia from "typia";
import { IAuthentication } from "@APP/api/structures/IAuthentication";
import { Configuration } from "@APP/infrastructure/config";
import {
    Crypto,
    DateMapper,
    ExternalFailure,
    InternalFailure,
    Result,
} from "@APP/utils";
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
    }): Result<
        T,
        | ExternalFailure<"Crypto.decrypt">
        | InternalFailure<
              | IAuthentication.FailureCode.TokenInvalid
              | IAuthentication.FailureCode.TokenExpired
          >
    > =>
        pipe(
            Crypto.decrypt({ token, key }),

            unless(Result.Error.is, (input) => {
                try {
                    const payload = parser(Result.Ok.flatten(input));
                    const expired_at = new Date(payload.expired_at);
                    const now = new Date();
                    if (now > expired_at)
                        return Result.Error.map(
                            new InternalFailure("TOKEN_EXPIRED"),
                        );
                    return Result.Ok.map(payload);
                } catch {
                    return Result.Error.map(
                        new InternalFailure("TOKEN_INVALID"),
                    );
                }
            }),
        );

    export namespace Account {
        const duration = hour;
        const key = Configuration.ACCOUNT_TOKEN_KEY;

        export const generate = ({
            account_id,
        }: Pick<IToken.IAccount, "account_id">): Result<
            IAuthentication.IToken,
            ExternalFailure<"Crypto.encrypt">
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
        }: Pick<IToken.IAccess, "user_id" | "user_type">): Result<
            IAuthentication.IToken,
            ExternalFailure<"Crypto.encrypt">
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
        }: Pick<IToken.IRefresh, "user_id" | "user_type">): Result<
            IAuthentication.IToken,
            ExternalFailure<"Crypto.encrypt">
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
