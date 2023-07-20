import { IClient } from "@APP/api";

export namespace Mapper {
    export const toPrivate = (agg: IClient): IClient.IPrivate => {
        return { ...agg };
    };
}
