import bcrypt from "bcrypt";
import { AppDataSource } from "../db";
import { User } from "../models/User";

const createPredefinedUsers = async () => {

  const superAdmin = new User();
  superAdmin.id = 1;
  superAdmin.email = "superadmin@superadmin.com";
  superAdmin.password_hash = bcrypt.hashSync("123456789", 10);
  superAdmin.role_id = 1;
  await superAdmin.save();

  const admin = new User();
  admin.id = 2;
  admin.email = "admin@admin.com";
  admin.password_hash = bcrypt.hashSync("123456789", 10);
  admin.role_id = 2;
  await admin.save();

  const user = new User();
  user.id = 3;
  user.email = "user@user.com";
  user.password_hash = bcrypt.hashSync("123456789", 10);
  user.role_id = 3;
  await user.save();
};

const createUsers = async (count: number) => {
  for (let i = 1; i <= count; i++) {
      const user = new User();
      user.id = i + 3;
      user.email = `user${i + 3}@example.com`;
      user.password_hash = bcrypt.hashSync(`password${i}`, 10);
      user.role_id = 3;
      await user.save();
  }
};

export const userSeeder = async () => {
  try {
      await AppDataSource.initialize();

      await createPredefinedUsers();
      await createUsers(10);

      console.log("=======================================");
      console.log("Users seeder successfully");
      console.log("=======================================");
  } catch (error: any) {
      console.log("=======================================");
      console.log("ERROR USERS SEEDER", error.message);
      console.log("=======================================");
  } finally {
      await AppDataSource.destroy();
  }
};