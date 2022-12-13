import {Module} from "@nestjs/common";
import {HallTypesController} from "./hallTypes.controller";
import {HallsTypesService} from "./hallsTypes.service";

@Module({
    providers: [HallsTypesService],
    controllers: [HallTypesController]
})
export class HallsTypesModule { }