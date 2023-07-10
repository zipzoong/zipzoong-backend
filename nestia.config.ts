import type nestia from "@nestia/sdk";

const NESTIA_CONFIG: nestia.INestiaConfig = {
    input: {
        include: ["src/controllers"],
        exclude: ["src/**/*.document.ts"],
    },
    output: "src/api",
    json: true,
    primitive: false,
    simulate: true,
    swagger: {
        output: "packages/swagger/swagger.json",
        info: {
            version: "0.0.1",
            title: "Zipzoong RESTAPI",
            description: "Zipzoong Server API document",
        },
        servers: [
            {
                url: "https://localhost:4000",
                description: "Zipzoong API Server",
            },
        ],
        security: {
            bearer: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
            },
        },
    },
};

export default NESTIA_CONFIG;
