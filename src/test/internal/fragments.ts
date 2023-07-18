import { HttpError } from "@nestia/fetcher";
import assert from "assert";
import { parseFailure } from "@APP/api";
import { IFailure } from "@APP/api/types";

export const test_failure =
    <T = void>(api: (input: T) => Promise<unknown>) =>
    (expected: IFailure) =>
    async (input: T) => {
        try {
            await api(input);
            throw Error("Unexpected Success!");
        } catch (error) {
            if (!(error instanceof HttpError)) {
                throw error;
            }
            const failure = parseFailure(error);
            assert.deepStrictEqual(failure, expected);
        }
    };
