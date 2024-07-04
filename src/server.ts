import express from "express";
import "dotenv/config";
import { AppDataSource } from "./database/db";
import { register, login } from "./controllers/auth.controller";
import { deleteUserById, getAllUsers, updateUserById, getUserProfile } from "./controllers/users.controller";
import { createService, getAllServices, updateService, deleteService } from "./controllers/services.controller";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";

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
app.post("/api/auth/register", register);
app.post("/api/auth/login", login);


// USERS CRUD
app.get("/users", auth, isSuperAdmin, getAllUsers); //Ver todos los usuarios. A esto solo debe poder acceder el superadmin
app.get("/profile", auth, getUserProfile) //Ver perfil del usuario
app.put("/profile", auth, updateUserById); //Modificar los datos del perfil
app.delete("/users/{id}", auth, isSuperAdmin, deleteUserById); //Eliminar el usuario. A esto solo debe poder acceder el superadmin
//app.get("/users?email=ejemplo@ejemplo.com", filterUserById) TODO extra filtrar usuario por email (superadmin)
//app.put("/users/{id}/role", changeRoles) TODO extra cambiar de roles (superadmin)


// SERVICES CRUD
app.post("/services", auth, isSuperAdmin, createService); //A esto solo debe poder acceder el superadmin
app.get("/services", auth, getAllServices);
app.put("/services/{id}", auth, isSuperAdmin, updateService); //A esto solo debe poder acceder el superadmin
app.delete("/services/{id}", auth, isSuperAdmin, deleteService); //A esto solo debe poder acceder el superadmin

// APPOINTMENTS CRUD
app.post('/appointments') //Crear nueva cita
app.put('/appointments')  //Modificar cita
app.get('/appointments/{id}') //Recuperar cita
app.get('/appointments')     //Ver mis citas

