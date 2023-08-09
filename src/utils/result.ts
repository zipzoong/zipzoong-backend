export type Result<T, E> = Result.Ok<T> | Result.Error<E>;

export namespace Result {
    export interface Ok<T> {
        readonly type: "ok";
        readonly result: T;
    }

    export namespace Ok {
        export const is = <T, E>(
            result: Result<T, E>,
        ): result is Result.Ok<T> => result.type === "ok";

        export const map = <T>(result: T): Result.Ok<T> => ({
            type: "ok",
            result,
        });

        export const flatten = <T>(ok: Result.Ok<T>): T => ok.result;

        export const lift =
            <T, R>(mapper: (input: T) => R) =>
            (ok: Result.Ok<T>): Result.Ok<R> =>
                Result.Ok.map(mapper(Result.Ok.flatten(ok)));

        export const asyncLift =
            <T, R>(mapper: (input: T) => Promise<R>) =>
            async (ok: Result.Ok<T>): Promise<Result.Ok<R>> =>
                Result.Ok.map(await mapper(Result.Ok.flatten(ok)));
    }

    export interface Error<E> {
        readonly type: "error";
        readonly result: E;
    }

    export namespace Error {
        export const is = <T, E>(
            result: Result<T, E>,
        ): result is Result.Error<E> => result.type === "error";

        export const map = <E>(result: E): Result.Error<E> => ({
            type: "error",
            result,
        });

        export const flatten = <E>(error: Result.Error<E>): E => error.result;

        export const lift =
            <T, R>(mapper: (input: T) => R) =>
            (error: Result.Error<T>): Result.Error<R> =>
                Result.Error.map(mapper(Result.Error.flatten(error)));

        export const asyncLift =
            <T, R>(mapper: (input: T) => Promise<R>) =>
            async (error: Result.Error<T>): Promise<Result.Error<R>> =>
                Result.Error.map(await mapper(Result.Error.flatten(error)));
    }

    export const flatten = <T, E>(input: Result<T, E>): T | E =>
        Result.Ok.is(input)
            ? Result.Ok.flatten(input)
            : Result.Error.flatten(input);

    export const lift =
        <T, E, TR = T, ER = E>(mapper: {
            ok: (input: T) => TR;
            error: (input: E) => ER;
        }) =>
        (input: Result<T, E>): Result<TR, ER> =>
            Result.Ok.is(input)
                ? Result.Ok.lift(mapper.ok)(input)
                : Result.Error.lift(mapper.error)(input);
}
