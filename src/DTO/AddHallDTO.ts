import {IsNotEmpty, IsNumber, IsString, Length, Max, Min} from "class-validator";

export class AddHallDTO{

    @IsNumber()
    @Max(999, {message: "type id is too big"})
    @Min(1, {message: "type id is too small"})
    public hallTypeId: number;

    @IsString({message: "its must to be a string"})
    @IsNotEmpty({message: "its must to be a some value"})
    @Length(1, 30, {message: "that name is too long or too short"})
    public hallNumber: string;

    @IsNumber()
    @Max(9999, {message: "seats amount is too big"})
    @Min(1, {message: "seats amount is too small"})
    public seatsAmount: number;

    @IsNumber()
    @Max(999, {message: "building id is too big"})
    @Min(1, {message: "building id is too small"})
    public buildingId: number;
}