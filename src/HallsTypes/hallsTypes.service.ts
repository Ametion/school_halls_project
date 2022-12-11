import {Injectable} from "@nestjs/common";
import {HallsTypesRepo} from "../Database/DatabaseRepositories";
import {HallsTypesModel} from "../Models";

@Injectable()
export class HallsTypesService{
    public async GetAllHallsTypes(): Promise<Array<HallsTypesModel>>{
        try{
            const arr = new Array<HallsTypesModel>()

            const hallsTypes = await HallsTypesRepo.find()

            hallsTypes.forEach(h => arr.push(new HallsTypesModel(h.id, h.type)))

            return arr
        }catch{
            return []
        }
    }
}