import {
    CloudWatchLogsClient,
    PutLogEventsCommand,
} from "@aws-sdk/client-cloudwatch-logs";
import { LoggerService } from "@nestjs/common";
import { Writable } from "stream";
import winston from "winston";
import { Configuration } from "./config";

export namespace Logger {
    const createAwsStream = () => {
        const client = new CloudWatchLogsClient({
            region: Configuration.AWS_REGION,
        });
        return new Writable({
            write(chunk, encoding, callback) {
                const log = chunk.toString();
                const command = new PutLogEventsCommand({
                    logGroupName: Configuration.AWS_LOG_GROUP,
                    logStreamName: Configuration.NODE_ENV,
                    logEvents: [{ message: log, timestamp: Date.now() }],
                });
                client
                    .send(command)
                    .then(() => {
                        callback();
                    })
                    .catch(console.log);
            },
        });
    };

    const logger: LoggerService = ((mode: typeof Configuration.NODE_ENV) => {
        const _logger = winston.createLogger({
            level: mode === "development" ? "silly" : "error",
            format: winston.format.simple(),
            transports: new winston.transports.Stream({
                stream:
                    mode === "production" ? createAwsStream() : process.stdout,
            }),
        });
        return _logger;
    })(Configuration.NODE_ENV);

    export const get = (): LoggerService => logger;
}
