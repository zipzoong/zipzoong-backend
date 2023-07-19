import typia from "typia";
import zz from "@APP/api";
import { IAuthentication } from "@APP/api/structures/IAuthentication";

export const test_api = async () => {
    const input = typia.random<IAuthentication.ISignIn>();
};
