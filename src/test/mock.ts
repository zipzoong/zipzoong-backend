import { mock as mk } from "node:test";
import typia from "typia";
import { IAuthentication } from "@APP/api";
import { Oauth } from "@APP/externals/oauth";
import { InternalError, Result } from "@APP/utils";

export const mock = async () => {
    const createProfile = typia.createRandom<IAuthentication.IAccountProfile>();
    mk.method(Oauth, "kakao").mock.mockImplementation(async (code: string) => {
        if (code === "login fail")
            return Result.Error.map(
                InternalError.create(Error("Kakao Login Fail")),
            );
        return Result.Ok.map({
            oauth_sub: code,
            profile: createProfile(),
        });
    });
};
