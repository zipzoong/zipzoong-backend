import { IUser } from "../module";

export namespace IZipzoongCare {
    export namespace FailureCode {
        export type GetList = IUser.FailureCode.ValidateType;
        export type GetRequestList = IUser.FailureCode.ValidateType;
        export type Request =
            | IUser.FailureCode.ValidateType
            | IUser.FailureCode.Verify;
    }
}
