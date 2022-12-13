import {Injectable} from "@nestjs/common";
import {TeacherModel} from "../Models";
import {TeachersRepo} from "../Database/DatabaseRepositories";
import {TeacherDTO} from "../DTO/TeacherDTO";

@Injectable()
export class TeacherService{
    public async GetAllTeachers(): Promise<Array<TeacherModel>>{
        try{
            const arr = new Array<TeacherModel>()

            const teachers = await TeachersRepo.find()

            teachers.forEach(t => arr.push(new TeacherModel(t.id, t.firstName, t.secondName)))

            return arr
        }catch{
            return []
        }
    }

    public async AddTeacher(teacherDTO: TeacherDTO): Promise<boolean>{
        try{
            const teacher = TeachersRepo.create({
                firstName: teacherDTO.firstName,
                secondName: teacherDTO.secondName
            })

            return true
        }catch{
            return false
        }
    }
}