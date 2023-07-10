import { IUser } from "@APP/api/structures/user/user";
import { User } from "@APP/providers/user";
import { TypedBody, TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("users")
export class UsersController {
    /**
     * this is sample api
     * @summary user find by user id
     * @tag users
     * @param user_id user id
     * @return user info
     * @throw 404 Not Found
     */
    @TypedRoute.Get(":user_id")
    getOne(@TypedParam("user_id") user_id: string): Promise<IUser> {
        return User.Service.getOne(user_id);
    }

    @TypedRoute.Post()
    async create(@TypedBody() body: IUser.ICreate1): Promise<void> {
        return;
    }
}
