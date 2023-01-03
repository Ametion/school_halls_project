import {Module} from "@nestjs/common";
import {HallsController} from "./halls.controller";
import {HallsService} from "./halls.service";
import {HallsHistoryService} from "../HallsHistory/hallsHistory.service";

@Module({
    providers: [HallsService, HallsHistoryService],
    controllers: [HallsController],
})
export class HallsModule{ }