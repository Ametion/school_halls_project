import {Module} from "@nestjs/common";
import {HallsHistoryController} from "./hallsHistory.controller";
import {HallsHistoryService} from "./hallsHistory.service";

@Module({
    providers: [HallsHistoryService],
    controllers: [HallsHistoryController]
})
export class HallsHistoryModule { }