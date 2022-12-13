import {Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {TeacherService} from "./teacher.service";
import {TeacherModel} from "../Models";
import {TeacherDTO} from "../DTO/TeacherDTO";

@Controller()
export class TeacherController{
    private readonly teacherService: TeacherService

    constructor(teacherService: TeacherService) {
        this.teacherService = teacherService
    }

    @HttpCode(200)
    @Get("/teachers")
    public async GetAllTeachers(): Promise<Array<TeacherModel>>{
        return await this.teacherService.GetAllTeachers()
    }

    @HttpCode(201)
    @Post("/teacher")
    @UsePipes(ValidationPipe)
    public async AddTeacher(@Body() teacherDTO: TeacherDTO): Promise<boolean>{
        return await this.teacherService.AddTeacher(teacherDTO)
    }
}