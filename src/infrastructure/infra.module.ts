import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { BadRequestExceptionFilter } from "./filter/badrequest.filter";
import { HttpFailureFilter } from "./filter/httpfailure.filter";
import { UnExpectedExceptionFilter } from "./filter/unexpected.filter";

@Module({
    providers: [
        { provide: APP_FILTER, useClass: UnExpectedExceptionFilter },
        { provide: APP_FILTER, useClass: HttpFailureFilter },
        { provide: APP_FILTER, useClass: BadRequestExceptionFilter },
    ],
})
export class InfraModule {}
