/**
 * @packageDocumentation
 * @module api.functional.re_expertises
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { IExpertise } from "./../../structures/IExpertise";

/**
 * 공인중개사 전문 분야 목록 불러오기
 * 
 * @summary 공인중개사 전문 분야 목록 조회
 * 
 * @tag re-agents
 * 
 * @return 공인중개사 전문 분야 전체 목록
 * 
 * @controller REExpertisesController.getList()
 * @path GET /re-expertises
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getList(
    connection: IConnection,
): Promise<getList.Output> {
    return !!connection.simulate
        ? getList.simulate(
              connection,
          )
        : Fetcher.fetch(
              connection,
              getList.ENCRYPTED,
              getList.METHOD,
              getList.path(),
          );
}
export namespace getList {
    export type Output = Array<IExpertise>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/re-expertises";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/re-expertises`;
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