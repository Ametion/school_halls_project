import {TeacherModel} from "./TeacherModel";
import {HallModel} from "./HallModel";

export class HallHistoryModel{
    public readonly historyId: number;
    public readonly reservedDate: string;
    public readonly vacateDate: string;
    public readonly teacher: TeacherModel;
    public readonly hall: HallModel;

    constructor(historyId: number, reservedDate: string, vacateDate: string, teacher: TeacherModel, hall: HallModel) {
        this.historyId = historyId;
        this.reservedDate = reservedDate;
        this.vacateDate = vacateDate;
        this.teacher = teacher;
        this.hall = hall;
    }
}