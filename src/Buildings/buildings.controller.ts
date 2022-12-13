import {Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {BuildingsService} from "./buildings.service";
import {BuildingModel} from "../Models";
import {BuildingDTO} from "../DTO/BuildingDTO";

@Controller()
export class BuildingsController{
    private readonly buildingsService: BuildingsService

    constructor(buildingsService: BuildingsService) {
        this.buildingsService = buildingsService
    }

    @HttpCode(200)
    @Get("/buildings")
    public async GetAllBuildings(): Promise<Array<BuildingModel>> {
        return await this.buildingsService.GetAllBuildings()
    }

    @HttpCode(201)
    @Post("/building")
    @UsePipes(ValidationPipe)
    public async AddBuilding(@Body() buildingDTO: BuildingDTO): Promise<boolean> {
        return await this.buildingsService.AddBuilding(buildingDTO)
    }
}
