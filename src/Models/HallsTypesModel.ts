export class HallsTypesModel{
    public readonly hallTypeId: number;
    public readonly hallType: string;

    constructor(hallTypeId: number, hallType: string) {
        this.hallTypeId = hallTypeId;
        this.hallType = hallType;
    }
}