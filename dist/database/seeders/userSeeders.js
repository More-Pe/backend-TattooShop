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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSeeder = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../db");
const User_1 = require("../models/User");
const userSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const superAdmin = new User_1.User();
        superAdmin.id = 1;
        superAdmin.email = "super_admin@super_admin.com";
        superAdmin.password_hash = bcrypt_1.default.hashSync("super_admin", 10);
        superAdmin.role_id = 1;
        yield superAdmin.save();
        const admin = new User_1.User();
        admin.id = 2;
        admin.email = "admin@admin.com";
        admin.password_hash = bcrypt_1.default.hashSync("admin", 10);
        admin.role_id = 2;
        yield admin.save();
        (() => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 3; i < 10; i++) {
                const user = new User_1.User();
                user.id = i;
                user.email = `user${i}@user${i}.com`;
                user.password_hash = yield bcrypt_1.default.hash(`user${i}`, 10);
                user.role_id = 3;
                yield user.save();
            }
        }))();
        console.log("===========================");
        console.log("Users seeder successfully");
        console.log("===========================");
    }
    catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("=======================================");
        console.error("ERROR IN USERS SEEDER:", message);
        console.error("=======================================");
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.userSeeder = userSeeder;
