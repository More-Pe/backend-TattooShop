import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from "typeorm"
import { Roles1719911334961 } from "./migrations/1719911334961-roles"
import { Services1719911390995 } from "./migrations/1719911390995-services"
import { User1719907653311 } from "./migrations/1719907653311-user"
import { Appointments1719911378237 } from "./migrations/1719911378237-appointments"


export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT),
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
entities: [],
migrations: [
    Roles1719911334961,
    Services1719911390995,
    User1719907653311,
    Appointments1719911378237
],
synchronize: false,
logging: false,
})