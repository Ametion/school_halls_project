export class TeacherModel{
    public readonly teacherId: number;
    public readonly teacherFirstName: string;
    public readonly teacherSecondName: string;

    constructor(teacherId: any, teacherFirstName: any, teacherSecondName: any) {
        this.teacherId = teacherId;
        this.teacherFirstName = teacherFirstName;
        this.teacherSecondName = teacherSecondName;
    }
}