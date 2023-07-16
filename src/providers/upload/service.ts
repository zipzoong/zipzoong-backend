import { IUpload } from "@APP/api/structures/IUpload";
import { Storage } from "@APP/externals/storage";
import { pipe } from "@fxts/core";

export namespace Service {
    export const getUrl = (input: IUpload.IBody): Promise<IUpload> =>
        pipe(
            input,

            Storage.getUploadUrl,
        );
}
