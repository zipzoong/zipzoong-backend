export interface IExpertise {
    /** 전문 분야 id */
    readonly id: string;
    /** 전문 분야명 */
    readonly name: string;
}

export namespace IExpertise {
    export interface ISuper extends IExpertise {
        /** 하위 전문 분야 목록 */
        readonly sub_expertises: IExpertise[];
    }

    export namespace FailureCode {
        export type NotFound = "EXPERTISE_NOT_FOUND";
        export type Invalid = "EXPERTISE_INVALID";
        export type Required = "EXPERTISE_REQUIRED";
        export type SuperMismatch = "SUPER_EXPERTISE_MISMATCH";
    }
}
