import { IFailure } from "@APP/api/types";

interface ICreate<T extends string = string> {
    cause: T;
    message: string;
    statusCode: number;
}
/**
 * application failure class
 */
export class Failure<T extends string = string> extends Error {
    override readonly name: "Failure";
    override readonly cause: string;
    override readonly message: string;
    public readonly statusCode: number;
    constructor({ cause, message, statusCode }: ICreate<T>) {
        super();
        this.name = "Failure";
        this.cause = cause;
        this.message = message;
        this.statusCode = statusCode;
    }

    static create<T extends string = string>(input: ICreate<T>): Failure {
        return new Failure(input);
    }

    static throwFailure<T extends string = string>(
        input: ICreate<T>,
    ): () => never {
        return () => {
            throw this.create(input);
        };
    }

    getCause() {
        return this.cause;
    }

    getMessage() {
        return this.message;
    }

    getStatusCode() {
        return this.statusCode;
    }

    getFailure(): IFailure {
        return { cause: this.cause, message: this.message };
    }
}
