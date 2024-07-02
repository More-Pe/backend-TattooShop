import "reflect-metadata"
import { DataSource, Migration } from "typeorm"
import { User1719907653311 } from "./migrations/1719907653311-user"
export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT),
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
entities: [],
migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
synchronize: false,
logging: false,
})