import {Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {ProfessionsService} from "./professions.service";
import {ProfessionModel} from "../Models/ProfessionModel";
import {AddProfessionDTO} from "../DTO/AddProfessionDTO";

@Controller("/profession")
export class ProfessionsController{
    private readonly professionsService: ProfessionsService;

    constructor(professionsService: ProfessionsService) {
        this.professionsService = professionsService;
    }

    @HttpCode(200)
    @Get()
    public async GetAllProfessions(): Promise<Array<ProfessionModel> | never> {
        return await this.professionsService.GetAllProfessions();
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    public async AddProfession(@Body() addProfessionDTO: AddProfessionDTO): Promise<boolean> {
        return await this.professionsService.AddProfession(addProfessionDTO);
    }
}