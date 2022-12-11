import {Injectable} from "@nestjs/common";
import {HallsRepo} from "../Database/DatabaseRepositories";
import {BuildingModel, HallModel} from "../Models";
@Injectable()
export class HallsService {
    public async GetAllFreeHalls(): Promise<Array<HallModel>>{
        try{
            const arr = new Array<HallModel>()

            const halls = await HallsRepo.find({
                where: {
                    isFree: true
                },
                relations: {
                    building: true,
                    teacher: true,
                    hallType: true,
                    class: {
                        classTeacher: true,
                        profession: true,
                    }
                }
            })

            halls.forEach(h => arr.push(new HallModel(h.id, h.hallType.type, h.hallNumber, h.isFree,
                null, null,  new BuildingModel(h.building.id, h.building.buildingName))))

            return arr
        }catch{
            return []
        }
    }
}