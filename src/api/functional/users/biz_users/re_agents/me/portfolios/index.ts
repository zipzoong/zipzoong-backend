/**
 * @packageDocumentation
 * @module api.functional.users.biz_users.re_agents.me.portfolios
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../../../../utils/NestiaSimulator";
import type { IREPortfolio } from "./../../../../../../structures/IREPortfolio";

/**
 * 공인중개사 포트폴리오 추가
 * 
 * @summary 공인중개사 포트폴리오 추가
 * 
 * @tag re-agents
 * 
 * @param access_token 공인중개사 권한을 갖는 액세스 토큰
 * 
 * @param body 포트폴리오 정보
 * 
 * @controller UsersREAgentsMeController.create()
 * @path POST /users/biz-users/re-agents/me/portfolios
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    body: IREPortfolio.ICreate,
): Promise<void> {
    return !!connection.simulate
        ? create.simulate(
              connection,
              body,
          )
        : Fetcher.fetch(
              connection,
              create.ENCRYPTED,
              create.METHOD,
              create.path(),
              body,
              create.stringify,
          );
}
export namespace create {
    export type Input = IREPortfolio.ICreate;

    export const METHOD = "POST" as const;
    export const PATH: string = "/users/biz-users/re-agents/me/portfolios";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/biz-users/re-agents/me/portfolios`;
    }
    export const simulate = async (
        connection: IConnection,
        body: create.Input,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path()
        });
        assert.body(() => typia.assert(body));
    }
    export const stringify = (input: Input) => typia.assertStringify(input);
}

/**
 * 내 포트폴리오 목록 검색
 * 
 * @summary 내 포트폴리오 목록 조회
 * 
 * @tag re-agents
 * 
 * @param access_token 공인중개사 권한을 갖는 액세스 토큰
 * 
 * @param query 페이지 정보
 * 
 * @return 포트폴리오 상세 정보 목록
 * 
 * @controller UsersREAgentsMeController.getList()
 * @path GET /users/biz-users/re-agents/me/portfolios
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getList(
    connection: IConnection,
    query: IREPortfolio.ISearch,
): Promise<getList.Output> {
    return !!connection.simulate
        ? getList.simulate(
              connection,
              query,
          )
        : Fetcher.fetch(
              connection,
              getList.ENCRYPTED,
              getList.METHOD,
              getList.path(query),
          );
}
export namespace getList {
    export type Query = IREPortfolio.ISearch;
    export type Output = IREPortfolio.IPaginatedPrivate;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/biz-users/re-agents/me/portfolios";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (query: getList.Query): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/users/biz-users/re-agents/me/portfolios${encoded.length ? `?${encoded}` : ""}`;;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        query: getList.Query,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(query)
        });
        assert.query(() => typia.assert(query));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}