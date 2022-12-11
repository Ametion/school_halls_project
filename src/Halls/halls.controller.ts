import {Controller, Get, HttpCode} from "@nestjs/common";
import {HallsService} from "./halls.service";
import {HallModel} from "../Models";

@Controller()
export class HallsController{
    private readonly hallService: HallsService;

    constructor(hallService: HallsService) {
        this.hallService = hallService
    }

    @HttpCode(200)
    @Get("/freeHalls")
    public async GetAllFreeHalls(): Promise<Array<HallModel>>{
        return await this.hallService.GetAllFreeHalls()
    }
}