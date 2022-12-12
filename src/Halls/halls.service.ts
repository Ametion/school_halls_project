import {Injectable} from "@nestjs/common";
import {ClassesRepo, HallsRepo, TeachersRepo} from "../Database/DatabaseRepositories";
import {BuildingModel, HallModel} from "../Models";
import {BookHallDTO} from "../DTO/BookHallDTO";
import {Teacher} from "../Database/Entity";
import {VacateHallDTO} from "../DTO/VacateHallDTO";

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

    public async BookAHall(bookAHallDTO: BookHallDTO): Promise<boolean>{
        try{
            if(!await this.IsHallExist(bookAHallDTO.hallId)){
                return false
            }

            const hall = await HallsRepo.findOneOrFail({
                where: {
                    id: bookAHallDTO.hallId
                }
            })

            hall.isFree = false
            hall.teacher = await TeachersRepo.findOneOrFail({
                where: {
                    id: bookAHallDTO.teacherId
                }
            })
            hall.class = await ClassesRepo.findOneOrFail({
                where: {
                    id: bookAHallDTO.classId
                }
            })

            await hall.save()

            return true
        }catch{
            return false
        }
    }

    public async VacateHall(vacateHallDTO: VacateHallDTO): Promise<boolean>{
        try{
            if(!await this.IsHallExist(vacateHallDTO.hallId)){
                return false
            }

            const hall = await HallsRepo.findOneOrFail({
                where: {
                    id: vacateHallDTO.hallId
                }
            })

            hall.teacher = null;
            hall.class = null;
            hall.isFree = true

            await hall.save()


            return true
        }catch{
            return false
        }
    }

    private async IsHallExist(hallId: number): Promise<boolean>{
        try{
            await HallsRepo.findOneOrFail({
                where: {
                    id: hallId
                }
            })

            return true
        }catch{
            return false
        }
    }
}