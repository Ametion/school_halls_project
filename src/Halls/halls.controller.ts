import {Body, Controller, Get, HttpCode, Patch, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {HallsService} from "./halls.service";
import {HallModel} from "../Models";
import {BookHallDTO} from "../DTO/BookHallDTO";
import {VacateHallDTO} from "../DTO/VacateHallDTO";
import {AddHallDTO} from "../DTO/AddHallDTO";

@Controller()
export class HallsController{
    private readonly hallService: HallsService;

    constructor(hallService: HallsService) {
        this.hallService = hallService
    }

    @HttpCode(200)
    @Get("/freeHalls")
    public async GetAllFreeHalls(): Promise<Array<HallModel>>{
        return await this.hallService.GetAllFreeHalls();
    }

    @HttpCode(200)
    @Get("/occupiedHalls")
    public async GetAllOccupiedHall(): Promise<Array<HallModel>>{
        return await this.hallService.GetAllOccupiedHall();
    }

    @HttpCode(200)
    @Get("/halls")
    public async GetAllHalls(): Promise<Array<HallModel>>{
        return await this.hallService.GetAllHalls();
    }

    @HttpCode(200)
    @Patch("/bookHall")
    @UsePipes(ValidationPipe)
    public async BookAHall(@Body() bookAHallDTO: BookHallDTO): Promise<boolean>{
        return this.hallService.BookAHall(bookAHallDTO);
    }

    @HttpCode(200)
    @Patch("/vacateHall")
    @UsePipes(ValidationPipe)
    public async VacateHall(@Body() vacateHallDTO: VacateHallDTO): Promise<boolean>{
        return this.hallService.VacateHall(vacateHallDTO);
    }

    @HttpCode(201)
    @Post("/addHall")
    @UsePipes(ValidationPipe)
    public async AddHall(@Body() addHallDTO: AddHallDTO): Promise<boolean>{
        return await this.hallService.AddHall(addHallDTO);
    }
}