import express from "express";
import dotenv from 'dotenv';
import { AppDataSource } from "./database/db";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import { register, login } from "./controllers/auth.controller";
import {
  deleteUserById,
  getAllUsers,
  updateUserById,
  getUserProfile,
} from "./controllers/users.controller";
import {
  createService,
  getAllServices,
  updateService,
  deleteService,
} from "./controllers/services.controller";
import {
  createAppointment,
  deleteAppointment,
  getAllAppointmentsForUser,
  getAppointmentById,
  updateAppointment,
} from "./controllers/appointments.controller";
import {
  createRole,
  updateRole,
  getAllRoles,
  deleteRole,
} from "./controllers/role.controller";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.port || 4000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  }
);

// AUTH CRUD
app.post("/api/auth/register", register); //OBLIGATORIO (Funciona)
app.post("/api/auth/login", login); //OBLIGATORIO (Funciona)

// USERS CRUD
app.get("/api/users/all", auth, isSuperAdmin, getAllUsers); //Ver todos los usuarios. A esto solo debe poder acceder el superadmin OBLIGATORIO (Funciona)
app.get("/api/users/profile", auth, getUserProfile); //Ver perfil del usuario OBLIGATORIO (Funciona)
app.put("/api/users/profile/update", auth, updateUserById); //Modificar los datos del perfil OBLIGATORIO (Funciona)
app.delete("/api/users/:id", auth, isSuperAdmin, deleteUserById); //Eliminar el usuario. A esto solo debe poder acceder el superadmin EXTRA (Funciona)

//app.get("/users?email=ejemplo@ejemplo.com", filterUserById) TODO filtrar usuario por email (superadmin) EXTRA
//app.put("/users/{id}/role", changeRoles) TODO cambiar de roles (superadmin) EXTRA

// SERVICES CRUD
app.post("/api/services/create", auth, isSuperAdmin, createService); //Crar servicio - A esto solo debe poder acceder el superadmin EXTRA
app.get("/api/services/all", auth, getAllServices); //Ver todos los servicios OBLIGATORIO (Funciona)
app.put("/api/services/update/:id", auth, isSuperAdmin, updateService); //Modificar servicio - A esto solo debe poder acceder el superadmin EXTRA
app.delete("/api/services/delete/:id", auth, isSuperAdmin, deleteService); //Eliminar servicio - A esto solo debe poder acceder el superadmin EXTRA

// APPOINTMENTS CRUD
app.post("/api/appointments/create", auth, createAppointment); //Crear nueva cita OBLIGATORIO
app.put("/api/appointments/update", auth, updateAppointment); //Modificar cita OBLIGATORIO
app.get("/api/appointments/scheduled", auth, getAllAppointmentsForUser); //Ver mis citas OBLIGATORIO
app.delete("/api/appointments/delete", auth, deleteAppointment); // Borrar cita
app.get("/api/appointments/:id", auth, getAppointmentById); //Recuperar cita OBLIGATORIO

// ROLES CRUD
app.post("/api/roles/create", auth, isSuperAdmin, createRole); //Crar rol - A esto solo debe poder acceder el superadmin EXTRA
app.get("/api/roles/all", auth, isSuperAdmin, getAllRoles); //Ver todos los roles - Superadmin
app.put("/api/roles/update/:id", auth, isSuperAdmin, updateRole); //Modificar rol - A esto solo debe poder acceder el superadmin
app.delete("/api/roles/delete/:id", auth, isSuperAdmin, deleteRole); //Eliminar rol - A esto solo debe poder acceder el superadmin
