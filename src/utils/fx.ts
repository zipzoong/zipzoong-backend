export function skip<T, N extends T, U>(
    predicate: (input: T) => input is N,
    process: (input: Exclude<T, N>) => U,
): (input: T) => N | (U extends void ? undefined : U);

export function skip<T, U>(
    predicate: (input: T) => boolean,
    process: (input: T) => U,
): (input: T) => T | (U extends void ? undefined : U);

export function skip(predicate: any, process: any) {
    return (input: any) => (predicate(input) ? input : process(input));
}

export const throwError =
    <T, E extends Error>(err: (input: T) => E) =>
    (input: T) => {
        throw err(input);
    };

export const isActive = <
    T extends { is_deleted: boolean; deleted_at: string | Date | null },
>(
    input: T,
): input is T & { is_deleted: false; deleted_at: null } => !input.is_deleted;

export const isInActive = <
    T extends { is_deleted: boolean; deleted_at: string | Date | null },
>(
    input: T,
): input is T & { is_deleted: true; deleted_at: string | Date } =>
    !isActive(input);
