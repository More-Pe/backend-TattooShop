import express from "express";
import "dotenv/config";
import { AppDataSource } from "./database/db";
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
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import {
  createAppointment,
  deleteAppointment,
  getAllAppointmentsForUser,
  getAppointmentById,
  updateAppointment,
} from "./controllers/appointments.controller";
import { createRole, updateRole, getAllRoles, deleteRole } from "./controllers/role.controller";

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
  });

// AUTH CRUD
app.post("/auth/register", register); //OBLIGATORIO
app.post("/auth/login", login); //OBLIGATORIO

// USERS CRUD
app.get("/api/users", auth, isSuperAdmin, getAllUsers); //Ver todos los usuarios. A esto solo debe poder acceder el superadmin OBLIGATORIO
app.get("/api/users/profile", auth, getUserProfile); //Ver perfil del usuario OBLIGATORIO
app.put("/api/users/profile", auth, updateUserById); //Modificar los datos del perfil OBLIGATORIO
app.delete("/api/users/{id}", auth, isSuperAdmin, deleteUserById); //Eliminar el usuario. A esto solo debe poder acceder el superadmin EXTRA
//app.get("/users?email=ejemplo@ejemplo.com", filterUserById) TODO filtrar usuario por email (superadmin) EXTRA
//app.put("/users/{id}/role", changeRoles) TODO cambiar de roles (superadmin) EXTRA

// SERVICES CRUD
app.post("/api/services", auth, isSuperAdmin, createService); //Crar servicio - A esto solo debe poder acceder el superadmin EXTRA
app.get("/api/services", auth, getAllServices); //Ver todos los servicios OBLIGATORIO
app.put("/api/services/{id}", auth, isSuperAdmin, updateService); //Modificar servicio - A esto solo debe poder acceder el superadmin EXTRA
app.delete("/api/services/{id}", auth, isSuperAdmin, deleteService); //Eliminar servicio - A esto solo debe poder acceder el superadmin EXTRA

// APPOINTMENTS CRUD
app.post("/api/appointments", auth, createAppointment); //Crear nueva cita OBLIGATORIO
app.put("/api/appointments", auth, updateAppointment); //Modificar cita OBLIGATORIO
app.get("/api/appointments/{id}", auth, getAppointmentById); //Recuperar cita OBLIGATORIO
app.get("/api/appointments", auth, getAllAppointmentsForUser); //Ver mis citas OBLIGATORIO
app.delete("/api/appointments", auth, deleteAppointment); // Borrar cita

// ROLES CRUD
app.post("/api/roles", auth, isSuperAdmin, createRole); //Crar rol - A esto solo debe poder acceder el superadmin EXTRA
app.get("/api/roles", auth, isSuperAdmin, getAllRoles); //Ver todos los roles - Superadmin
app.put("/api/roles/{id}", auth, isSuperAdmin, updateRole); //Modificar rol - A esto solo debe poder acceder el superadmin
app.delete("/api/roles/{id}", auth, isSuperAdmin, deleteRole); //Eliminar rol - A esto solo debe poder acceder el superadmin
