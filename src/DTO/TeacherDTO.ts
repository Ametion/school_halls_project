import {IsNotEmpty, IsString, Length} from "class-validator";

export class TeacherDTO{
    @IsString({message: "its must to be a string"})
    @IsNotEmpty({message: "its must to be a some value"})
    @Length(1, 30, {message: "that name is too long or too short"})
    public firstName: string

    @IsString({message: "its must to be a string"})
    @IsNotEmpty({message: "its must to be a some value"})
    @Length(1, 30, {message: "that name is too long or too short"})
    public secondName: string
}