export class ProfessionModel{
    public readonly professionId: number;
    public readonly profession: string;

    constructor(professionId: number, profession: string) {
        this.professionId = professionId;
        this.profession = profession;
    }
}