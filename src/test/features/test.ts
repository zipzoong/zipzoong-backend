import typia from "typia";
import zz from "@APP/api";

export const test_api = async () => {
    const client = await zz.functional.users.clients.me.get({
        host: "http://localhost:4000",
        headers: {
            Authorization: "Bearer dafnejanf;aeknfa;lk",
        },
    });

    zz.functional.users.biz_users.me.certifications.getList;
};
