import {DataSource} from "typeorm";
import {Building, Class, Hall, HallType, Profession, Teacher} from "./Entity";
require("dotenv").config()

export const databaseConnection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: process.env.DBName?.toString(),
    entities: [Hall, HallType, Teacher, Class, Profession, Building],
    synchronize: true
})