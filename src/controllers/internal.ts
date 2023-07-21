import { IResult } from "@APP/api/types";
import { Failure, InternalError, Result } from "@APP/utils";

export const httpResponse = <T, E extends InternalError | Failure>(
    result: IResult<T, E>,
): T => {
    if (Result.Ok.is(result)) return Result.Ok.flatten(result);
    const failure = Result.Error.flatten(result);
    if (failure.name === "InternalError") throw failure.error;
    throw failure;
};
