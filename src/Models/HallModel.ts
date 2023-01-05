import {TeacherModel} from "./TeacherModel";
import {ClassModel} from "./ClassModel";
import {BuildingModel} from "./BuildingModel";

export class HallModel{
    public readonly hallId: number;
    public readonly hallType: string;
    public readonly hallNumber: string;
    public readonly isFree: boolean;
    public readonly seatsAmount: number;
    public readonly teacher: TeacherModel | null;
    public readonly class: ClassModel | null;
    public readonly building: BuildingModel | null;

    constructor(hallId: number, hallType: string, hallNumber: string, isFree: boolean, seatsAmount: number,
                teacher: TeacherModel | null, _class: ClassModel | null,  building: BuildingModel | null) {
        this.hallId = hallId
        this.hallType = hallType
        this.hallNumber = hallNumber
        this.isFree = isFree
        this.seatsAmount = seatsAmount
        this.teacher = teacher
        this.class = _class;
        this.building = building
    }
}