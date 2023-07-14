/**
 * @packageDocumentation
 * @module api.functional.users.re_agents.me
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { IREAgent } from "./../../../../structures/user/IREAgent";

/**
 * 공인중개사 개인정보를 요청한다.
 * 
 * 이메일, 휴대전화 등의 개인 정보는 마킹처리되어 전달된다.
 * 
 * @summary 공인중개사 내정보 조회
 * 
 * @tag re-agents
 * 
 * @param access_token 공인중개사 권한을 갖은 액세스 토큰
 * 
 * @return 공인중개사 프로필 정보
 * 
 * @controller UsersREAgentsController.get()
 * @path GET /users/re-agents/me
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
    export type Output = IREAgent.IPrivate;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/re-agents/me";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/re-agents/me`;
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