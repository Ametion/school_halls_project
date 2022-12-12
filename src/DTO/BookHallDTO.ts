import {IsNumber, Length, Max, Min} from "class-validator";

export class BookHallDTO{

    @IsNumber()
    @Min(1, {message: "number is too small to be a teacher id"})
    @Max(999, {message: "this number is too big for teacher id"})
    public teacherId: number;

    @IsNumber()
    @Min(1, {message: "number is too small to be a hall id"})
    @Max(999, {message: "this number is too big for hall id"})
    public hallId: number

    @IsNumber()
    @Min(1, {message: "number is too small to be a class id"})
    @Max(999, {message: "this number is too big for class id"})
    public classId: number;
}