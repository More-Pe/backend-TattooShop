import bcrypt from "bcrypt";
import { AppDataSource } from "../db";
import { User } from "../models/User";
export const userSeeder = async () => {
  try {
    await AppDataSource.initialize();

    const superAdmin = new User();
    superAdmin.id = 1;
    superAdmin.email = "super_admin@super_admin.com";
    superAdmin.password_hash = bcrypt.hashSync("super_admin", 10);
    superAdmin.role_id = 1;
    await superAdmin.save();

    const admin = new User();
    admin.id = 2;
    admin.email = "admin@admin.com";
    admin.password_hash = bcrypt.hashSync("admin", 10);
    admin.role_id = 2;
    await admin.save();

    const user1 = new User();
    user1.id = 3;
    user1.email = "juan.perez@example.com";
    user1.password_hash = bcrypt.hashSync("juan123", 10);
    user1.role_id = 3;
    await user1.save();

    const user2 = new User();
    user2.id = 4;
    user2.email = "maria.rodriguez@example.com";
    user2.password_hash = bcrypt.hashSync("maria123", 10);
    user2.role_id = 3;
    await user2.save();

    const user3 = new User();
    user3.id = 5;
    user3.email = "luis.gonzalez@example.com";
    user3.password_hash = bcrypt.hashSync("luis123", 10);
    user3.role_id = 3;
    await user3.save();

    const user4 = new User();
    user4.id = 6;
    user4.email = "ana.sanchez@example.com";
    user4.password_hash = bcrypt.hashSync("ana123", 10);
    user4.role_id = 3;
    await user4.save();

    const user5 = new User();
    user5.id = 7;
    user5.email = "pedro.martinez@example.com";
    user5.password_hash = bcrypt.hashSync("pedro123", 10);
    user5.role_id = 3;
    await user5.save();

    const user6 = new User();
    user6.id = 8;
    user6.email = "sofia.hernandez@example.com";
    user6.password_hash = bcrypt.hashSync("sofia123", 10);
    user6.role_id = 3;
    await user6.save();

    const user7 = new User();
    user7.id = 9;
    user7.email = "carlos.gomez@example.com";
    user7.password_hash = bcrypt.hashSync("carlos123", 10);
    user7.role_id = 3;
    await user7.save();

    const user8 = new User();
    user8.id = 10;
    user8.email = "isabel.diaz@example.com";
    user8.password_hash = bcrypt.hashSync("isabel123", 10);
    user8.role_id = 3;
    await user8.save();

    const user9 = new User();
    user9.id = 11;
    user9.email = "fernando.rojas@example.com";
    user9.password_hash = bcrypt.hashSync("fernando123", 10);
    user9.role_id = 3;
    await user9.save();

    const user10 = new User();
    user10.id = 12;
    user10.email = "claudia.moreno@example.com";
    user10.password_hash = bcrypt.hashSync("claudia123", 10);
    user10.role_id = 3;
    await user10.save();

    console.log("=======================================");
    console.log("Users seeder successfully");
    console.log("=======================================");

  } catch (error: any) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("=======================================");
    console.error("ERROR IN USERS SEEDER:", message);
    console.error("=======================================");
  } finally {
    await AppDataSource.destroy();
  }
};
