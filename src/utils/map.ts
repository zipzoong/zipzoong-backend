import { isNull } from "@fxts/core";

export const nullToUndefined = <T>(input: T | null): T | undefined =>
    isNull(input) ? undefined : input;

export const pick =
    <T extends object, K extends keyof T>(key: K) =>
    (obj: T) =>
        obj[key];

export const toFixed =
    (digit = 0) =>
    (num: number): number =>
        +num.toFixed(digit);

`
/**
 * @before +82 10-1234-5678
 *
 * @after +82 1*-1***-5***
 */
export const markPhone = (phone: string) => {};

/**
 * @before abcd@naver.com
 *
 * @after a****@n****.com
 */
export const markEmail = (email: string) => {};
`;
