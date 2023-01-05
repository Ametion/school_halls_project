import {IsNumber, Max, Min} from "class-validator";

export class AddHallDTO{

    @IsNumber()
    @Max(999, {message: "type id is too big"})
    @Min(1, {message: "type id is too small"})
    public hallTypeId: number;

    @IsNumber()
    @Max(9999, {message: "hall number is too big"})
    @Min(1, {message: "hall number is too small"})
    public hallNumber: number;

    @IsNumber()
    @Max(9999, {message: "seats amount is too big"})
    @Min(1, {message: "seats amount is too small"})
    public seatsAmount: number;

    @IsNumber()
    @Max(999, {message: "building id is too big"})
    @Min(1, {message: "building id is too small"})
    public buildingId: number;
}