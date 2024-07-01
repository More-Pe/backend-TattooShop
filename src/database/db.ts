import "reflect-metadata"
import { DataSource } from "typeorm"
export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT),
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
entities: [],
synchronize: false,
logging: false,
})