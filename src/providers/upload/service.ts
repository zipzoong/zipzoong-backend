import { pipe } from "@fxts/core";
import { IUpload } from "@APP/api/structures/IUpload";
import { IResult } from "@APP/api/types";
import { Storage } from "@APP/externals/storage";
import { InternalError, pick } from "@APP/utils";

export namespace Service {
    export const getUrl = (
        input: IUpload.IBody,
    ): Promise<IResult<IUpload, InternalError>> =>
        pipe(
            input,

            pick("resource_type"),

            Storage.getUploadUrl,
        );
}
