import { IResult } from "@APP/api/types";
import { Failure, InternalError, Result } from "@APP/utils";

export const httpResponse = <T, E extends InternalError | Failure>(
    result: IResult<T, E>,
): T => {
    if (Result.Ok.is(result)) return Result.Ok.flatten(result);
    const error = Result.Error.flatten(result);
    throw error;
};
