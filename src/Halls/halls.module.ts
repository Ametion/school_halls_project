import {Module} from "@nestjs/common";
import {HallsController} from "./halls.controller";
import {HallsService} from "./halls.service";

@Module({
    providers: [HallsService],
    controllers: [HallsController],
})
export class HallsModule{ }