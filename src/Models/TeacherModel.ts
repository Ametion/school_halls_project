import {ClassModel} from "./ClassModel";

export class TeacherModel{
    public readonly teacherId: number;
    public readonly teacherFirstName: string;
    public readonly teacherSecondName: string;

    constructor(teacherId: number, teacherFirstName: string, teacherSecondName: string) {
        this.teacherId = teacherId;
        this.teacherFirstName = teacherFirstName;
        this.teacherSecondName = teacherSecondName;
    }
}