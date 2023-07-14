/**
 * @packageDocumentation
 * @module api.functional.auth.profile
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { IAuthentication } from "./../../../structures/IAuthentication";

/**
 * 계정 프로필 정보를 불러옵니다. 소셜 계정을 통해 얻은 정보입니다.
 * 
 * 사용자 정보를 생성할 때, 기본값으로 사용될 수 있습니다.
 * 
 * {@link IAuthentication.FailureCode.GetProfile 에러 코드 타입}
 * - `ACCOUNT_NOT_FOUND` : 집중 서버에 계정 정보가 없는 경우
 * - `ACCOUNT_INACTIVE` : 비활성화된 계정인 경우
 * - `TOKEN_EXPIRED` : 계정 토큰이 만료된 경우
 * - `TOKEN_INVALID` : 계정 토큰이 유효하지 않은 경우
 * 
 * @summary 계정 프로필 조회
 * 
 * @tag authentication
 * 
 * @return 계정 프로필 정보
 * 
 * @controller AuthController.get()
 * @path GET /auth/profile
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
): Promise<get.Output> {
    return !!connection.simulate
        ? get.simulate(
              connection,
          )
        : Fetcher.fetch(
              connection,
              get.ENCRYPTED,
              get.METHOD,
              get.path(),
          );
}
export namespace get {
    export type Output = IAuthentication.IAccountProfile;

    export const METHOD = "GET" as const;
    export const PATH: string = "/auth/profile";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/auth/profile`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
    ): Promise<Output> => {
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}