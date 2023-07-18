/**
 * @packageDocumentation
 * @module api.functional.users.biz_users.hs_providers.contact
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../../../utils/NestiaSimulator";
import type { IHSProvider } from "./../../../../../structures/user/IHSProvider";

/**
 * 생활서비스 전문가 연락처 정보를 요청한다.
 * 
 * {@link IHSProvider.FailureCode.GetContact 에러 코드}
 * 
 * @summary 생활서비스 전문가 연락처 정보 조회
 * 
 * @tag hs-providers
 * 
 * @param access_token 아무 사용자 권한을 갖는 액세스 토큰
 * 
 * @param provider_id 생활서비스 전문가 id
 * 
 * @return 생활서비스 전문가 연락처 정보
 * 
 * @controller UsersHSProvidersSomeoneController.get()
 * @path GET /users/biz-users/hs-providers/:provider_id/contact
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
    provider_id: string,
): Promise<get.Output> {
    return !!connection.simulate
        ? get.simulate(
              connection,
              provider_id,
          )
        : Fetcher.fetch(
              connection,
              get.ENCRYPTED,
              get.METHOD,
              get.path(provider_id),
          );
}
export namespace get {
    export type Output = IHSProvider.IContact;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/biz-users/hs-providers/:provider_id/contact";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (provider_id: string): string => {
        return `/users/biz-users/hs-providers/${encodeURIComponent(provider_id ?? "null")}/contact`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        provider_id: string,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(provider_id)
        });
        assert.param("provider_id")("string")(() => typia.assert(provider_id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}