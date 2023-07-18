import { HttpError } from "@nestia/fetcher";
import typia from "typia";
import { IFailure } from "./types";

export { HttpError } from "@nestia/fetcher";

/**
 * HttpError로부터 Failure 객체를 파싱한다.
 *
 * 만약 파싱할 수 없다면 TypeGuardError를 발생시킨다.
 */
export const parseFailure = (error: HttpError) =>
    typia.assertParse<IFailure>(error.message);
