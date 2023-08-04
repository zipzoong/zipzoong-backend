/**
 * @packageDocumentation
 * @module api.functional.users.biz_users.re_agents.portfolios
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../../../utils/NestiaSimulator";
import type { IREPortfolio } from "./../../../../../structures/IREPortfolio";

/**
 * 공인 중개사 포트폴리오 목록 검색
 * 
 * {@link IREPortfolio.FailureCode.GetPublicList 에러 코드}
 * 
 * @summary 공인 중개사 포트폴리오 목록 검색
 * @tag re-agents
 * @param agent_id 공인 중개사 id
 * @param query 페이지 정보
 * @return 포트폴리오 공개 정보 목록
 * 
 * @controller UsersREAgentsSomeoneController.getList()
 * @path GET /users/biz-users/re-agents/:agent_id/portfolios
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getList(
    connection: IConnection,
    agent_id: string,
    query: IREPortfolio.ISearch,
): Promise<getList.Output> {
    return !!connection.simulate
        ? getList.simulate(
              connection,
              agent_id,
              query,
          )
        : Fetcher.fetch(
              connection,
              getList.ENCRYPTED,
              getList.METHOD,
              getList.path(agent_id, query),
          );
}
export namespace getList {
    export type Query = IREPortfolio.ISearch;
    export type Output = IREPortfolio.IPaginatedPublic;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/biz-users/re-agents/:agent_id/portfolios";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (agent_id: string, query: getList.Query): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/users/biz-users/re-agents/${encodeURIComponent(agent_id ?? "null")}/portfolios${encoded.length ? `?${encoded}` : ""}`;;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        agent_id: string,
        query: getList.Query,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(agent_id, query)
        });
        assert.param("agent_id")("string")(() => typia.assert(agent_id));
        assert.query(() => typia.assert(query));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}