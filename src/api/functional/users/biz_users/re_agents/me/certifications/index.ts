/**
 * @packageDocumentation
 * @module api.functional.users.biz_users.re_agents.me.certifications
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../../../../utils/NestiaSimulator";
import type { IBIZUser } from "./../../../../../../structures/user/IBIZUser";

/**
 * 제출한 사업자 인증 서류 이미지 목록 조회
 * 
 * {@link IUser.FailureCode.Authorize 에러 코드}
 * 
 * @summary 사업자 인증 서류 이미지 목록 조회
 * 
 * @tag re-agents
 * 
 * @param access_token 사업자 권한을 가진 액세스 토큰
 * 
 * @return 사업자 인증 서류 이미지 url 목록
 * 
 * @controller UsersREAgentsMeCertificationsController.getList()
 * @path GET /users/biz-users/re-agents/me/certifications
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
    export type Output = Array<string>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/biz-users/re-agents/me/certifications";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/biz-users/re-agents/me/certifications`;
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

/**
 * 사업자 인증 서류 이미지 추가
 * 
 * {@link IUser.FailureCode.Authorize 에러 코드}
 * 
 * @summary 사업자 인증 서류 이미지 추가
 * 
 * @tag re-agents
 * 
 * @param access_token 사업자 권한을 가진 액세스 토큰
 * 
 * @param body 업로드할 이미지 정보
 * 
 * @controller UsersREAgentsMeCertificationsController.create()
 * @path POST /users/biz-users/re-agents/me/certifications
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
    connection: IConnection,
    body: IBIZUser.ICertificationImageCreate,
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
    export type Input = IBIZUser.ICertificationImageCreate;

    export const METHOD = "POST" as const;
    export const PATH: string = "/users/biz-users/re-agents/me/certifications";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/biz-users/re-agents/me/certifications`;
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