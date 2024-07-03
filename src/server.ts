import express from "express";
import "dotenv/config";
import { AppDataSource } from "./database/db";
import { register, login } from "./controllers/auth.controller";
import { deleteUserById, getAllUsers, updateUserById } from "./controllers/users.controller";
import { createService, getAllServices } from "./controllers/services.controller";

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
app.get("/api/users/profile", getAllUsers); //A esto solo debe poder acceder el superadmin
app.put("/api/users/profile", updateUserById);
app.delete("/api/users/{id}", deleteUserById); //A esto solo debe poder acceder el superadmin

// SERVICES CRUD
app.post("/create", createService);
app.get("/services", getAllServices);
