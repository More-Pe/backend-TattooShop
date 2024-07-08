import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Roles1720115431212 } from "./migrations/1720115431212-roles";
import { Services1720115451410 } from "./migrations/1720115451410-services";
import { Users1720115460024 } from "./migrations/1720115460024-users";
import { Appointments1720115474398 } from "./migrations/1720115474398-appointments";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${__dirname}/models/**/*{.ts,.js}`],
  migrations: [
    Roles1720115431212,
    Services1720115451410,
    Users1720115460024,
    Appointments1720115474398,
  ],
  synchronize: false,
  logging: false,
});
