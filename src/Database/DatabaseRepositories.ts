import {databaseConnection} from "./DatabaseConnection";
import {Class, Hall, HallType, Teacher} from "./Entity";

export const HallsRepo = databaseConnection.getRepository<Hall>(Hall)
export const HallsTypesRepo = databaseConnection.getRepository<HallType>(HallType)
export const TeachersRepo = databaseConnection.getRepository<Teacher>(Teacher)

export const ClassesRepo = databaseConnection.getRepository<Class>(Class)