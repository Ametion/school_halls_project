import {Body, Injectable} from "@nestjs/common";
import {HallsTypesRepo} from "../Database/DatabaseRepositories";
import {HallsTypesModel} from "../Models";
import {AddHallTypeDTO} from "../DTO/AddHallTypeDTO";

@Injectable()
export class HallTypesService {
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

    public async AddHallType(@Body() addHallTypeDTO: AddHallTypeDTO): Promise<boolean> {
        try{
            const hallType = HallsTypesRepo.create({
                type: addHallTypeDTO.hallType
            })

            await hallType.save();

            return true;
        }catch{
            return false;
        }
    }
}