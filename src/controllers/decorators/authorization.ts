import {
    isNull,
    isUndefined,
    negate,
    pipe,
    throwError,
    unless,
} from "@fxts/core";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { Request } from "express";
import { IToken } from "@APP/providers/authentication/interface";
import { Exception } from "./exception";

const extract_authorization_header = (context: ExecutionContext) =>
    context.switchToHttp().getRequest<Request>().headers["authorization"];

const validate_token_type = (type: IToken.Type) => (input: string) =>
    input.match(new RegExp(`^${type}\\s+\\S+`, "i"));

const extract_token = (input: RegExpMatchArray) => input[0].split(/\s+/)[1];

export const Authorization = (token_type: IToken.Type) =>
    createParamDecorator((type: IToken.Type, ctx: ExecutionContext) =>
        pipe(
            ctx,

            extract_authorization_header,

            unless(
                negate(isUndefined),
                throwError(
                    Exception.Unauthorized("Authorization Header Required"),
                ),
            ),

            validate_token_type(type),

            unless(
                negate(isNull),
                throwError(
                    Exception.Unauthorized(
                        "Value of Authorization Header Invalid",
                    ),
                ),
            ),

            extract_token,

            unless(
                negate(isUndefined),
                throwError(
                    Exception.Unauthorized(
                        "Value of Authorization Header Invalid",
                    ),
                ),
            ),
        ),
    )(token_type);
