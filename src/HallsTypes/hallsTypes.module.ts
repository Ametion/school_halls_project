import {Module} from "@nestjs/common";
import {HallsTypesController} from "./hallsTypes.controller";
import {HallsTypesService} from "./hallsTypes.service";

@Module({
    providers: [HallsTypesService],
    controllers: [HallsTypesController]
})
export class HallsTypesModule { }