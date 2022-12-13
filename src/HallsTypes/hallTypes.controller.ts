import {Controller, Get, HttpCode} from "@nestjs/common";
import {HallTypesService} from "./hallTypes.service";
import {HallsTypesModel} from "../Models";

@Controller()
export class HallTypesController {
    private readonly hallsTypesService: HallTypesService

    constructor(hallsTypesService: HallTypesService) {
        this.hallsTypesService = hallsTypesService
    }

    @HttpCode(200)
    @Get("/hallTypes")
    public async GetAllHallsTypes(): Promise<Array<HallsTypesModel>>{
        return await this.hallsTypesService.GetAllHallsTypes()
    }
}