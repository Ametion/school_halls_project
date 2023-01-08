import {IsNotEmpty, IsString, Length} from "class-validator";

export class AddProfessionDTO{
    @IsString({message: "its must to be a string"})
    @IsNotEmpty({message: "its must to be a some value"})
    @Length(1, 30, {message: "profession is too long or too short"})
    public profession: string;
}