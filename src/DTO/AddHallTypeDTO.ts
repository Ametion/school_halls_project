import {IsNotEmpty, IsString, Length} from "class-validator";

export class AddHallTypeDTO{
    @IsString({message: "its must to be a string"})
    @IsNotEmpty({message: "its must to be a some value"})
    @Length(1, 30, {message: "hall type is too long or too short"})
    public hallType: string;
}