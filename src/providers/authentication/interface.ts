import { IUser } from "@APP/api/structures/user/IUser";

export namespace IToken {
    export type Type = "account" | "access" | "refresh";

    export interface IBase<T extends Type = Type> {
        readonly type: T;
        /** @format date-time */
        readonly expired_at: string;
    }

    export interface IAccount extends IBase<"account"> {
        readonly account_id: string;
    }

    export interface IAccess extends IBase<"access"> {
        readonly user_id: string;
        readonly user_type: IUser.Type;
    }

    export interface IRefresh extends IBase<"refresh"> {
        readonly user_id: string;
        readonly user_type: IUser.Type;
    }
}
