"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./database/db");
const auth_controller_1 = require("./controllers/auth.controller");
const users_controller_1 = require("./controllers/users.controller");
const services_controller_1 = require("./controllers/services.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.port || 4000;
db_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.log(error);
});
// AUTH CRUD
app.post("/api/auth/register", auth_controller_1.register);
app.post("/api/auth/login", auth_controller_1.login);
// USERS CRUD
app.get("/api/users/profile", users_controller_1.getAllUsers); //A esto solo debe poder acceder el superadmin
app.put("/api/users/profile", users_controller_1.updateUserById);
app.delete("/api/users/{id}", users_controller_1.deleteUserById); //A esto solo debe poder acceder el superadmin
// SERVICES CRUD
app.post("/create", services_controller_1.createService);
app.get("/services", services_controller_1.getAllServices);
