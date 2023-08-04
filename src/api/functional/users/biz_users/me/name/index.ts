/**
 * @packageDocumentation
 * @module api.functional.users.biz_users.me.name
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../../../utils/NestiaSimulator";
import type { IBIZUser } from "./../../../../../structures/user/IBIZUser";

/**
 * 사업자 이름 수정
 * 
 * {@link IBIZUser.FailureCode.UpdateName 에러 코드}
 * 
 * @summary 사업자 이름 수정
 * @tag re-agents
 * @tag hs-providers
 * @param body 이름 정보
 * 
 * @controller UsersBIZUsersNameUpdateController.update()
 * @path PUT /users/biz-users/me/name
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    body: IBIZUser.IUpdate.IName,
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
    export type Input = IBIZUser.IUpdate.IName;

    export const METHOD = "PUT" as const;
    export const PATH: string = "/users/biz-users/me/name";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/biz-users/me/name`;
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