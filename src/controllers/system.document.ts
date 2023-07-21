import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("health-check")
export class HealthCheckController {
    @TypedRoute.Get()
    check() {
        return "success!";
    }

    @TypedRoute.Get("log")
    log() {
        throw Error("로그 테스트");
    }
}
