import {BuildingModel} from "../Models";
import {BuildingsRepo} from "../Database/DatabaseRepositories";
import {BuildingDTO} from "../DTO/BuildingDTO";
import {Injectable} from "@nestjs/common";

@Injectable()
export class BuildingsService{
    public async GetAllBuildings(): Promise<Array<BuildingModel>>{
        try{
            const arr = new Array<BuildingModel>()

            const buildings = await BuildingsRepo.find()

            buildings.forEach(b => arr.push(new BuildingModel(b.id, b.buildingName)))

            return arr
        }catch{
            return []
        }
    }

    public async AddBuilding(buildingDTO: BuildingDTO): Promise<boolean>{
        try{
            const building = BuildingsRepo.create({
                buildingName: buildingDTO.buildingName
            })

            await building.save()

            return true
        }catch{
            return false
        }
    }
}