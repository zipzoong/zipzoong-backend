import { IResult } from "@APP/api/types";

export namespace Result {
    export const flatten = <T, E>(input: IResult<T, E>): T | E =>
        Result.Ok.is(input)
            ? Result.Ok.flatten(input)
            : Result.Error.flatten(input);

    export const lift =
        <T, E, TR = T, ER = E>(mapper: {
            ok: (input: T) => TR;
            error: (input: E) => ER;
        }) =>
        (input: IResult<T, E>): IResult<TR, ER> =>
            Result.Ok.is(input)
                ? Result.Ok.lift(mapper.ok)(input)
                : Result.Error.lift(mapper.error)(input);

    export namespace Ok {
        export const is = <T, E>(
            result: IResult<T, E>,
        ): result is IResult.IOk<T> => result.type === "ok";

        export const map = <T>(result: T): IResult.IOk<T> => ({
            type: "ok",
            result,
        });

        export const flatten = <T>(ok: IResult.IOk<T>): T => ok.result;

        export const lift =
            <T, R>(mapper: (input: T) => R) =>
            (ok: IResult.IOk<T>): IResult.IOk<R> =>
                Result.Ok.map(mapper(Result.Ok.flatten(ok)));

        export const asyncLift =
            <T, R>(mapper: (input: T) => Promise<R>) =>
            async (ok: IResult.IOk<T>): Promise<IResult.IOk<R>> =>
                Result.Ok.map(await mapper(Result.Ok.flatten(ok)));
    }
    export namespace Error {
        export const is = <T, E>(
            result: IResult<T, E>,
        ): result is IResult.IError<E> => result.type === "error";

        export const map = <E>(result: E): IResult.IError<E> => ({
            type: "error",
            result,
        });

        export const flatten = <E>(error: IResult.IError<E>): E => error.result;

        export const lift =
            <T, R>(mapper: (input: T) => R) =>
            (error: IResult.IError<T>): IResult.IError<R> =>
                Result.Error.map(mapper(Result.Error.flatten(error)));

        export const asyncLift =
            <T, R>(mapper: (input: T) => Promise<R>) =>
            async (error: IResult.IError<T>): Promise<IResult.IError<R>> =>
                Result.Error.map(await mapper(Result.Error.flatten(error)));
    }
}
