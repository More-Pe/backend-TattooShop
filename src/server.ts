import express from "express";
import "dotenv/config";
import { AppDataSource } from "./database/db";
import { register, login } from "./controllers/auth.controller";
import { deleteUserById, getAllUsers, updateUserById } from "./controllers/users.controller";
import { createService, getAllServices, updateService, deleteService } from "./controllers/services.controller";
import { auth } from "./middlewares/auth";

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
app.get("/api/users", auth, getAllUsers); //A esto solo debe poder acceder el superadmin
//TODO OBLIGATORIO ver perfil de usuario app.get("/api/users/profile",getUserProfile)
app.put("/api/users/profile", auth, updateUserById);
app.delete("/api/users/{id}", auth, deleteUserById); //A esto solo debe poder acceder el superadmin
//TODO extra filtrar usuario por email (superadmin) app.get("/api/users?email=ejemplo@ejemplo.com", filterUserById)
//TODO extra cambiar de roles (superadmin) app.put("/api/users/{id}/role", changeRoles)

// SERVICES CRUD
app.post("/api/services", auth, createService); //A esto solo debe poder acceder el superadmin
app.get("/api/services", auth, getAllServices);
app.put("/api/services/{id}", auth, updateService); //A esto solo debe poder acceder el superadmin
app.delete("/api/services/{id}", auth, deleteService); //A esto solo debe poder acceder el superadmin
