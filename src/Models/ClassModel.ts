import {TeacherModel} from "./TeacherModel";

export class ClassModel{
    public readonly classId: number;
    public readonly className: string;
    public readonly classProfession: string;
    public readonly classStudentsAmount: number;
    public readonly classTeacher: TeacherModel | null;

    constructor(classId: number, className: string, classProfession: string, classStudentsAmount: number, classTeacher: TeacherModel | null) {
        this.classId = classId;
        this.className = className;
        this.classProfession = classProfession;
        this.classStudentsAmount = classStudentsAmount;
        this.classTeacher = classTeacher
    }
}