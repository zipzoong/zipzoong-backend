import { IResult } from "@APP/api/types";
import { IToken } from "./interface";
import { Crypto, DateMapper, Result } from "@APP/utils";
import { Configuration } from "@APP/infrastructure/config";
import typia from "typia";
import { pipe, unless } from "@fxts/core";
import { IAuthentication } from "@APP/api/structures/IAuthentication";

export namespace Token {
    const hour = 1000 * 60 * 60 * 1;
    const day = hour * 24;

    export type FailureCode =
        | "Token Expired"
        | "Token Invalid"
        | "Inner System Error";
    const _verify = <T extends IToken.IBase>({
        token,
        key,
        parser,
    }: {
        token: string;
        key: string;
        parser: (input: string) => T;
    }): IResult<T, FailureCode> =>
        pipe(
            Crypto.decrypt({ token, key }),

            (input) =>
                Result.Ok.is(input)
                    ? input
                    : Result.Error.flatten(input) === "Token Invalid"
                    ? Result.Error.map("Token Invalid" as const)
                    : Result.Error.map("Inner System Error" as const),

            unless(Result.Error.is, (input) => {
                try {
                    const payload = parser(Result.Ok.flatten(input));
                    const expired_at = new Date(payload.expired_at);
                    const now = new Date();
                    if (now > expired_at)
                        return Result.Error.map("Token Expired" as const);
                    return Result.Ok.map(payload);
                } catch {
                    return Result.Error.map("Token Invalid" as const);
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
            "Inner System Error"
        > => {
            const expired_at = DateMapper.toISO(
                new Date(Date.now() + duration),
            );
            const plain = typia.stringify<IToken.IAccount>({
                type: "account",
                account_id,
                expired_at,
            });
            const token = Crypto.encrypt({ plain, key });
            if (Result.Error.is(token))
                return Result.Error.map("Inner System Error" as const);
            return Result.Ok.map({
                token: Result.Ok.flatten(token),
                expired_at,
            });
        };

        export const verify = (
            token: string,
        ): IResult<IToken.IAccount, FailureCode> =>
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
            "Inner System Error"
        > => {
            const expired_at = DateMapper.toISO(
                new Date(Date.now() + duration),
            );
            const plain = typia.stringify<IToken.IAccess>({
                type: "access",
                user_id,
                user_type,
                expired_at,
            });
            const token = Crypto.encrypt({ plain, key });
            if (Result.Error.is(token))
                return Result.Error.map("Inner System Error" as const);
            return Result.Ok.map({
                token: Result.Ok.flatten(token),
                expired_at,
            });
        };

        export const verify = (
            token: string,
        ): IResult<IToken.IAccess, FailureCode> =>
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
            "Inner System Error"
        > => {
            const expired_at = DateMapper.toISO(
                new Date(Date.now() + duration),
            );
            const plain = typia.stringify<IToken.IRefresh>({
                type: "refresh",
                user_id,
                user_type,
                expired_at,
            });
            const token = Crypto.encrypt({ plain, key });
            if (Result.Error.is(token))
                return Result.Error.map("Inner System Error" as const);
            return Result.Ok.map({
                token: Result.Ok.flatten(token),
                expired_at,
            });
        };

        export const verify = (
            token: string,
        ): IResult<IToken.IRefresh, FailureCode> =>
            _verify({
                token,
                parser: typia.createAssertParse<IToken.IRefresh>(),
                key,
            });
    }
}
