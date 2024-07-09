"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./database/db");
const auth_1 = require("./middlewares/auth");
const isSuperAdmin_1 = require("./middlewares/isSuperAdmin");
const auth_controller_1 = require("./controllers/auth.controller");
const users_controller_1 = require("./controllers/users.controller");
const services_controller_1 = require("./controllers/services.controller");
const appointments_controller_1 = require("./controllers/appointments.controller");
const role_controller_1 = require("./controllers/roles.controller");
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
app.post("/auth/register", auth_controller_1.register); //OBLIGATORIO
app.post("/auth/login", auth_controller_1.login); //OBLIGATORIO
// USERS CRUD
app.get("/api/users", auth_1.auth, isSuperAdmin_1.isSuperAdmin, users_controller_1.getAllUsers); //Ver todos los usuarios. A esto solo debe poder acceder el superadmin OBLIGATORIO
app.get("/api/users/profile", auth_1.auth, users_controller_1.getUserProfile); //Ver perfil del usuario OBLIGATORIO
app.put("/api/users/profile", auth_1.auth, users_controller_1.updateUserById); //Modificar los datos del perfil OBLIGATORIO
app.delete("/api/users/{id}", auth_1.auth, isSuperAdmin_1.isSuperAdmin, users_controller_1.deleteUserById); //Eliminar el usuario. A esto solo debe poder acceder el superadmin EXTRA
//app.get("/users?email=ejemplo@ejemplo.com", filterUserById) TODO filtrar usuario por email (superadmin) EXTRA
//app.put("/users/{id}/role", changeRoles) TODO cambiar de roles (superadmin) EXTRA
// SERVICES CRUD
app.post("/api/services", auth_1.auth, isSuperAdmin_1.isSuperAdmin, services_controller_1.createService); //Crar servicio - A esto solo debe poder acceder el superadmin EXTRA
app.get("/api/services", auth_1.auth, services_controller_1.getAllServices); //Ver todos los servicios OBLIGATORIO
app.put("/api/services/{id}", auth_1.auth, isSuperAdmin_1.isSuperAdmin, services_controller_1.updateService); //Modificar servicio - A esto solo debe poder acceder el superadmin EXTRA
app.delete("/api/services/{id}", auth_1.auth, isSuperAdmin_1.isSuperAdmin, services_controller_1.deleteService); //Eliminar servicio - A esto solo debe poder acceder el superadmin EXTRA
// APPOINTMENTS CRUD
app.post("/api/appointments", auth_1.auth, appointments_controller_1.createAppointment); //Crear nueva cita OBLIGATORIO
app.put("/api/appointments", auth_1.auth, appointments_controller_1.updateAppointment); //Modificar cita OBLIGATORIO
app.get("/api/appointments", auth_1.auth, appointments_controller_1.getAllAppointmentsForUser); //Ver mis citas OBLIGATORIO
app.get("/api/appointments/{id}", auth_1.auth, appointments_controller_1.getAppointmentById); //Recuperar cita OBLIGATORIO
app.delete("/api/appointments", auth_1.auth, appointments_controller_1.deleteAppointment); // Borrar cita
// ROLES CRUD
app.post("/api/roles", auth_1.auth, isSuperAdmin_1.isSuperAdmin, role_controller_1.createRole); //Crar rol - A esto solo debe poder acceder el superadmin EXTRA
app.get("/api/roles", auth_1.auth, isSuperAdmin_1.isSuperAdmin, role_controller_1.getAllRoles); //Ver todos los roles - Superadmin
app.put("/api/roles/{id}", auth_1.auth, isSuperAdmin_1.isSuperAdmin, role_controller_1.updateRole); //Modificar rol - A esto solo debe poder acceder el superadmin
app.delete("/api/roles/{id}", auth_1.auth, isSuperAdmin_1.isSuperAdmin, role_controller_1.deleteRole); //Eliminar rol - A esto solo debe poder acceder el superadmin
