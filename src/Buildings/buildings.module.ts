import {Module} from "@nestjs/common";
import {BuildingsController} from "./buildings.controller";
import {BuildingsService} from "./buildings.service";

@Module({
    providers: [BuildingsService],
    controllers: [BuildingsController]
})
export class BuildingsModule { }