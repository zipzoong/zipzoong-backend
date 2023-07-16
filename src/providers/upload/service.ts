import { IUpload } from "@APP/api/structures/IUpload";
import { Storage } from "@APP/externals/storage";
import { Result } from "@APP/utils";
import { pipe, throwError, unless } from "@fxts/core";

export namespace Service {
    export const getUrl = (input: IUpload.IBody): Promise<IUpload> =>
        pipe(
            input,

            Storage.getUploadUrl,

            unless(
                Result.Ok.is,
                throwError((err) => Error(Result.Error.flatten(err))),
            ),

            Result.Ok.flatten,
        );
}
