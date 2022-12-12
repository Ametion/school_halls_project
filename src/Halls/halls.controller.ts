import {Body, Controller, Get, HttpCode, Patch, UsePipes, ValidationPipe} from "@nestjs/common";
import {HallsService} from "./halls.service";
import {HallModel} from "../Models";
import {BookHallDTO} from "../DTO/BookHallDTO";
import {VacateHallDTO} from "../DTO/VacateHallDTO";

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

    @HttpCode(200)
    @Patch("/bookHall")
    @UsePipes(ValidationPipe)
    public async BookAHall(@Body() bookAHallDTO: BookHallDTO): Promise<boolean>{
        return this.hallService.BookAHall(bookAHallDTO)
    }

    @HttpCode(200)
    @Patch("/vacateHall")
    @UsePipes(ValidationPipe)
    public async VacateHall(@Body() vacateHallDTO: VacateHallDTO): Promise<boolean>{
        return this.hallService.VacateHall(vacateHallDTO)
    }
}