import {Controller, Get, HttpCode} from "@nestjs/common";
import {HallsHistoryService} from "./hallsHistory.service";
import {HallHistoryModel} from "../Models/HallHistoryModel";

@Controller("/history")
export class HallsHistoryController{
    private readonly hallsHistoryService: HallsHistoryService;

    constructor(hallsHistoryService: HallsHistoryService) {
        this.hallsHistoryService = hallsHistoryService;
    }

    @HttpCode(200)
    @Get()
    public async GetHallsHistory(): Promise<Array<HallHistoryModel>> {
        return await this.hallsHistoryService.GetHallsHistory();
    }
}