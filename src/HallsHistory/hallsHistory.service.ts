import {Injectable} from "@nestjs/common";
import {HallsHistoryRepo} from "../Database/DatabaseRepositories";
import {HallHistoryModel} from "../Models/HallHistoryModel";
import {BuildingModel, HallModel, TeacherModel} from "../Models";

@Injectable()
export class HallsHistoryService{
    public async AddHistory(hallId: number, teacherId: number): Promise<boolean> {
        try{
            const hall = HallsHistoryRepo.create({
                hall: {
                    id: hallId
                },
                teacher: {
                    id: teacherId
                },
                reservedDate: new Date().toISOString(),
            });

            await hall.save();

            return true;
        }catch{
            return false;
        }
    }

    public async VacateHistory(hallId: number): Promise<boolean> {
        try{
            const halls = await HallsHistoryRepo.find({
                where: {
                    hall: {
                        id: hallId
                    }
                }
            })

            for (const h of halls) {
                if(h.vacateDate == null){
                    h.vacateDate = new Date().toISOString()
                    await h.save()
                }
            }

            return true
        }catch{
            return false;
        }
    }

    public async GetHallsHistory(): Promise<Array<HallHistoryModel>>{
        try{
            const arr = new Array<HallHistoryModel>()

            const history = await HallsHistoryRepo.find({
                relations: {
                    hall: {
                        hallType: true,
                        building: true
                    },
                    teacher: true
                }
            })

            history.forEach(h => arr.push(new HallHistoryModel(h.id, h.reservedDate, h.vacateDate!,
                new TeacherModel(h.teacher.id, h.teacher.firstName, h.teacher.secondName),
                new HallModel(h.hall.id, h.hall.hallType.type, h.hall.hallNumber, h.hall.isFree, h.hall.seatsAmount, null, null, new BuildingModel(h.hall.building.id, h.hall.building.buildingName)))))

            return arr
        }catch{
            return []
        }
    }
}