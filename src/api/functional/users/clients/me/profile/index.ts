/**
 * @packageDocumentation
 * @module api.functional.users.clients.me.profile
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../../../utils/NestiaSimulator";
import type { IClient } from "./../../../../../structures/user/IClient";

/**
 * 일반 고객 프로필 수정
 * 
 * {@link IClient.FailureCode.UpdateProfile 에러 코드}
 * 
 * @summary 일반 고객 프로필 수정
 * @tag clients
 * @security access
 * @param body 사용자 프로필 정보 전체
 * 
 * @controller UsersClientsController.update()
 * @path PUT /users/clients/me/profile
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    body: IClient.IUpdateProfile,
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
    export type Input = IClient.IUpdateProfile;

    export const METHOD = "PUT" as const;
    export const PATH: string = "/users/clients/me/profile";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/clients/me/profile`;
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