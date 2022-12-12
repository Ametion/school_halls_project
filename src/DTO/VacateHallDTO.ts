import {IsNumber, Max, Min} from "class-validator";

export class VacateHallDTO{
    @IsNumber()
    @Min(1, {message: "number is too small to be a hall id"})
    @Max(999, {message: "this number is too big for hall id"})
    hallId: number
}