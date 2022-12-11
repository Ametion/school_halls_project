import {Controller, Get, HttpCode} from "@nestjs/common";
import {HallsTypesService} from "./hallsTypes.service";
import {HallsTypesModel} from "../Models";

@Controller()
export class HallsTypesController{
    private readonly hallsTypesService: HallsTypesService

    constructor(hallsTypesService: HallsTypesService) {
        this.hallsTypesService = hallsTypesService
    }

    @HttpCode(200)
    @Get("/hallsTypes")
    public async GetAllHallsTypes(): Promise<Array<HallsTypesModel>>{
        return await this.hallsTypesService.GetAllHallsTypes()
    }
}