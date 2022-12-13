import {Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {ClassesService} from "./classes.service";
import {ClassModel} from "../Models";
import {TeacherDTO} from "../DTO/TeacherDTO";
import {ClassDTO} from "../DTO/ClassDTO";

@Controller()
export class ClassesController{
    private readonly classesService: ClassesService

    constructor(classesService: ClassesService) {
        this.classesService = classesService
    }

    @HttpCode(200)
    @Get("/classes")
    public async GetAllClasses(): Promise<Array<ClassModel>>{
        return await this.classesService.GetAllClasses()
    }

    @HttpCode(201)
    @Post("/class")
    @UsePipes(ValidationPipe)
    public async AddClass(@Body() classDTO: ClassDTO): Promise<boolean>{
        return await this.classesService.AddClass(classDTO)
    }
}