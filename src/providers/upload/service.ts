import { IUpload } from "@APP/api/structures/IUpload";
import { IResult } from "@APP/api/types";
import { Storage } from "@APP/externals/storage";
import { InternalError } from "@APP/utils";
import { pipe } from "@fxts/core";

export namespace Service {
    export const getUrl = (
        input: IUpload.IBody,
    ): Promise<IResult<IUpload, InternalError>> =>
        pipe(
            input,

            Storage.getUploadUrl,
        );
}
