/**
 * @packageDocumentation
 * @module api.functional.users.biz_users.re_agents.contact
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../../../utils/NestiaSimulator";
import type { IREAgent } from "./../../../../../structures/user/IREAgent";

/**
 * 공인 중개사 연락처 정보를 요청한다.
 * 
 * {@link IREAgent.FailureCode.GetContact 에러 코드}
 * 
 * @summary 공인 중개사 연락처 정보 조회
 * @tag re-agents
 * @security access
 * @param agent_id 공인 중개사 id
 * @return 공인 중개사 연락처 정보
 * 
 * @controller UsersREAgentsSomeoneController.get()
 * @path GET /users/biz-users/re-agents/:agent_id/contact
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
    agent_id: string,
): Promise<get.Output> {
    return !!connection.simulate
        ? get.simulate(
              connection,
              agent_id,
          )
        : Fetcher.fetch(
              connection,
              get.ENCRYPTED,
              get.METHOD,
              get.path(agent_id),
          );
}
export namespace get {
    export type Output = IREAgent.IContact;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/biz-users/re-agents/:agent_id/contact";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (agent_id: string): string => {
        return `/users/biz-users/re-agents/${encodeURIComponent(agent_id ?? "null")}/contact`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        agent_id: string,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(agent_id)
        });
        assert.param("agent_id")("string")(() => typia.assert(agent_id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}