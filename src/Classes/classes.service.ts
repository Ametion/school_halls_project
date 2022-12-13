import {Injectable} from "@nestjs/common";
import {ClassModel, TeacherModel} from "../Models";
import {ClassesRepo} from "../Database/DatabaseRepositories";
import {ClassDTO} from "../DTO/ClassDTO";

@Injectable()
export class ClassesService{
    public async GetAllClasses(): Promise<Array<ClassModel>>{
        try{
            const arr = new Array<ClassModel>()

            const classes = await ClassesRepo.find({
                relations: {
                    classTeacher: true,
                    profession: true,
                }
            })

            classes.forEach(c => arr.push(new ClassModel(c.id, c.className, c.profession.profession, c.studentsAmount,
                new TeacherModel(c.classTeacher.id, c.classTeacher.firstName, c.classTeacher.secondName))))

            return arr
        }catch{
            return []
        }
    }

    public async AddClass(classDTO: ClassDTO): Promise<boolean>{
        try {
            const _class = ClassesRepo.create({
                className: classDTO.className,
                studentsAmount: classDTO.studentsAmount,
                classTeacher: {
                    id: classDTO.teacherId
                },
                profession: {
                    id: classDTO.professionId
                }
            })

            await _class.save()

            return true
        }catch{
            return false
        }
    }
}