"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const _1719911334961_roles_1 = require("./migrations/1719911334961-roles");
const _1719911390995_services_1 = require("./migrations/1719911390995-services");
const _1719907653311_user_1 = require("./migrations/1719907653311-user");
const _1719911378237_appointments_1 = require("./migrations/1719911378237-appointments");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [`${__dirname}/models/**/*{.ts,.js}`],
    migrations: [
        _1719911334961_roles_1.Roles1719911334961,
        _1719911390995_services_1.Services1719911390995,
        _1719907653311_user_1.User1719907653311,
        _1719911378237_appointments_1.Appointments1719911378237
    ],
    synchronize: false,
    logging: false,
});
