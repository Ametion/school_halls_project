import {Module} from "@nestjs/common";
import {HallTypesController} from "./hallTypes.controller";
import {HallTypesService} from "./hallTypes.service";

@Module({
    providers: [HallTypesService],
    controllers: [HallTypesController]
})
export class HallTypesModule { }