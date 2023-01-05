import {Injectable} from "@nestjs/common";
import {ClassesRepo, HallsRepo, TeachersRepo} from "../Database/DatabaseRepositories";
import {BuildingModel, HallModel} from "../Models";
import {BookHallDTO} from "../DTO/BookHallDTO";
import {VacateHallDTO} from "../DTO/VacateHallDTO";
import {AddHallDTO} from "../DTO/AddHallDTO";
import {HallsHistoryService} from "../HallsHistory/hallsHistory.service";

@Injectable()
export class HallsService {

    private readonly hallsHistoryService: HallsHistoryService;

    constructor(hallsHistoryService: HallsHistoryService) {
        this.hallsHistoryService =  hallsHistoryService;
    }

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

            halls.forEach(h => arr.push(new HallModel(h.id, h.hallType.type, h.hallNumber, h.isFree, h.seatsAmount,
                null, null,  new BuildingModel(h.building.id, h.building.buildingName))))

            return arr
        }catch{
            return []
        }
    }

    public async GetAllOccupiedHall(): Promise<Array<HallModel>>{
        try{
            const arr = new Array<HallModel>();

            const halls = await HallsRepo.find({
                where: {
                    isFree: false
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

            halls.forEach(h => arr.push(new HallModel(h.id, h.hallType.type, h.hallNumber, h.isFree, h.seatsAmount,
                null, null,  new BuildingModel(h.building.id, h.building.buildingName))))

            return arr;
        }catch{
            return []
        }
    }

    public async GetAllHalls(): Promise<Array<HallModel>>{
        try{
            const arr = new Array<HallModel>()

            const halls = await HallsRepo.find({
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

            halls.forEach(h => arr.push(new HallModel(h.id, h.hallType.type, h.hallNumber, h.isFree, h.seatsAmount,
                null, null,  new BuildingModel(h.building.id, h.building.buildingName))))

            return arr
        }catch{
            return []
        }
    }

    public async BookAHall(bookHallDTO: BookHallDTO): Promise<boolean>{
        try{
            if(!await this.IsHallExist(bookHallDTO.hallId)){
                return false
            }

            if(!await this.IsHallFree(bookHallDTO.hallId)){
                return false
            }

            const hall = await HallsRepo.findOneOrFail({
                where: {
                    id: bookHallDTO.hallId
                }
            })

            hall.isFree = false
            hall.teacher = await TeachersRepo.findOneOrFail({
                where: {
                    id: bookHallDTO.teacherId
                }
            })
            hall.class = await ClassesRepo.findOneOrFail({
                where: {
                    id: bookHallDTO.classId
                }
            })

            await hall.save()

            await this.hallsHistoryService.AddHistory(hall.id, hall.teacher.id);

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

            await this.hallsHistoryService.VacateHistory(hall.id)

            return true
        }catch{
            return false
        }
    }

    public async AddHall(addHallDTO: AddHallDTO): Promise<boolean>{
        try{
            const hall = HallsRepo.create({
                hallType: {
                    id: addHallDTO.hallTypeId
                },
                building: {
                    id: addHallDTO.buildingId
                },
                hallNumber: addHallDTO.hallNumber,
                seatsAmount: addHallDTO.seatsAmount
            })

            await hall.save()

            return true
        }catch{
            return false;
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

    private async IsHallFree(hallId: number): Promise<boolean> {
        try {
            const hall = await HallsRepo.findOneOrFail({
                where: {
                    id: hallId
                }
            })

            return hall.isFree;
        }catch {
            return false;
        }
    }
}