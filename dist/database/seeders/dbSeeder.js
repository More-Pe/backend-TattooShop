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
const roleSeeders_1 = require("./roleSeeders");
const serviceSeeders_1 = require("./serviceSeeders");
const userSeeders_1 = require("./userSeeders");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Starting seeders...");
    yield (0, roleSeeders_1.roleSeeder)();
    yield (0, serviceSeeders_1.serviceSeeder)();
    yield (0, userSeeders_1.userSeeder)();
}))();
