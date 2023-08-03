/**
 * @packageDocumentation
 * @module api.functional.users.biz_users.re_agents.me.real_estate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../../../../utils/NestiaSimulator";
import type { IREAgent } from "./../../../../../../structures/user/IREAgent";

/**
 * 공인중개사 부동산 정보 수정
 * 
 * @summary 공인중개사 부동산 정보 수정
 * @tag re-agents
 * @param body 부동산 정보
 * 
 * @controller UsersREAgentsBIZInfoUpdateController.update()
 * @path PUT /users/biz-users/re-agents/me/real-estate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    body: IREAgent.IUpdate.IRealEstate,
): Promise<void> {
    return !!connection.simulate
        ? update.simulate(
              connection,
              body,
          )
        : Fetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              update.ENCRYPTED,
              update.METHOD,
              update.path(),
              body,
              update.stringify,
          );
}
export namespace update {
    export type Input = IREAgent.IUpdate.IRealEstate;

    export const METHOD = "PUT" as const;
    export const PATH: string = "/users/biz-users/re-agents/me/real-estate";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/biz-users/re-agents/me/real-estate`;
    }
    export const simulate = async (
        connection: IConnection,
        body: update.Input,
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