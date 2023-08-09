import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
} from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { Logger } from "../logger";
import { isNull, negate } from "@fxts/core";

@Catch()
export class UnExpectedExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: unknown, host: ArgumentsHost) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        Logger.get().error(
            typeof exception === "object" &&
                negate(isNull)(exception) &&
                "stack" in exception
                ? exception.stack
                : exception,
        );
        httpAdapter.reply(
            ctx.getResponse(),
            "UNEXPECTED_ERROR",
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
}
