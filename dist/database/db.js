"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const _1720115431212_roles_1 = require("./migrations/1720115431212-roles");
const _1720115451410_services_1 = require("./migrations/1720115451410-services");
const _1720115460024_users_1 = require("./migrations/1720115460024-users");
const _1720115474398_appointments_1 = require("./migrations/1720115474398-appointments");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [`${__dirname}/models/**/*{.ts,.js}`],
    migrations: [
        _1720115431212_roles_1.Roles1720115431212,
        _1720115451410_services_1.Services1720115451410,
        _1720115460024_users_1.Users1720115460024,
        _1720115474398_appointments_1.Appointments1720115474398,
    ],
    synchronize: false,
    logging: false,
});
