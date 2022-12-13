import {IsNotEmpty, IsNumber, IsString, Length, Max, Min} from "class-validator";

export class ClassDTO{

    @IsString({message: "its must to be a string"})
    @IsNotEmpty({message: "its must to be a some value"})
    public className: string

    @IsNumber()
    @Min(1, {message: "number is too small to be a student amount"})
    @Max(999, {message: "number is too big to be a student amount"})
    public studentsAmount: number

    @IsNumber()
    @Min(1, {message: "number is too small to be a profession id"})
    @Max(999, {message: "number is too big to be a profession id"})
    public professionId: number

    @IsNumber()
    @Min(1, {message: "number is too small to be a teacher id"})
    @Max(999, {message: "number is too big to be a teacher id"})
    public teacherId: number
}