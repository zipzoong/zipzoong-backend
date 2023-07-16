/**
 * @packageDocumentation
 * @module api.functional.users.clients.me
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { IClient } from "./../../../../structures/user/IClient";

/**
 * 일반 고객 내 정보 보기 요청
 * 
 * {@link IClient.FailureCode.GetMe 에러 코드}
 * - `TOKEN_EXPIRED` : 액세스 토큰이 만료된 경우
 * - `TOKEN_INVALID` : 액세스 토큰이 유효하지 않은 경우
 * - `PERMISSION_INSUFFICIENT` : 액세스 토큰의 권한이 부족한 경우
 * - `USER_INACTIVE` : 비활성화된 사용자인 경우
 * - `USER_NOT_FOUND` : 사용자가 존재하지 않는 경우
 * 
 * @summary 일반 고객 내 정보 요청
 * 
 * @tag clients
 * 
 * @param access_token 일반 고객 권한을 가진 액세스 토큰
 * 
 * @return 내 정보
 * 
 * @controller UsersClientsController.get()
 * @path GET /users/clients/me
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
    export type Output = IClient.IPrivate;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/clients/me";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/clients/me`;
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