import {databaseConnection} from "./DatabaseConnection";
import {Hall, HallType} from "./Entity";

export const HallsRepo = databaseConnection.getRepository<Hall>(Hall)
export const HallsTypesRepo = databaseConnection.getRepository<HallType>(HallType)