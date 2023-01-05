import {Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {HallTypesService} from "./hallTypes.service";
import {HallsTypesModel} from "../Models";
import {AddHallTypeDTO} from "../DTO/AddHallTypeDTO";

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

    @HttpCode(201)
    @Post("/hallType")
    @UsePipes(ValidationPipe)
    public async AddHallType(@Body() addHallTypeDTO: AddHallTypeDTO): Promise<boolean> {
        return await this.hallsTypesService.AddHallType(addHallTypeDTO);
    }
}