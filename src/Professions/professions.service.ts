import {Injectable} from "@nestjs/common";
import {ProfessionModel} from "../Models/ProfessionModel";
import {ProfessionsRepo} from "../Database/DatabaseRepositories";
import {AddProfessionDTO} from "../DTO/AddProfessionDTO";

@Injectable()
export class ProfessionsService{
    public async GetAllProfessions(): Promise<Array<ProfessionModel> | never> {
        try{
            const arr = new Array<ProfessionModel>();

            const professions = await ProfessionsRepo.find();

            professions.forEach(p => arr.push(new ProfessionModel(p.id, p.profession)))

            return arr;
        }catch(e: any){
            throw new Error(e);
        }
    }

    public async AddProfession(addProfessionDTO: AddProfessionDTO): Promise<boolean>{
        try{
            const profession = ProfessionsRepo.create({
                profession: addProfessionDTO.profession
            })

            await profession.save()

            return true;
        }catch{
            return false;
        }
    }
}