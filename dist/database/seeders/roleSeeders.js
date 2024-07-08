"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleSeeder = void 0;
const db_1 = require("../db");
const Role_1 = require("../models/Role");
const roleSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const role1 = new Role_1.Role();
        role1.id = 1;
        role1.name = "super_admin";
        yield role1.save();
        const role2 = new Role_1.Role();
        role2.id = 2;
        role2.name = "admin";
        yield role2.save();
        const role3 = new Role_1.Role();
        role3.id = 3;
        role3.name = "user";
        yield role3.save();
        console.log("=======================================");
        console.log("Roles seeder successfully");
        console.log("=======================================");
    }
    catch (error) {
        console.log("=======================================");
        console.log("ERROR ROLE SEEDER", error.message);
        console.log("=======================================");
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.roleSeeder = roleSeeder;
