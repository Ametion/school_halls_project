export class BuildingModel{
    public readonly buildingId: number;
    public readonly buildingName: string;

    constructor(buildingId: number, buildingName: string) {
        this.buildingId = buildingId
        this.buildingName = buildingName
    }
}