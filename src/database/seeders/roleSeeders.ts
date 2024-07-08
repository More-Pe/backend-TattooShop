import { AppDataSource } from "../db";
import { Role } from "../models/Role";

export const roleSeeder = async () => {
    try {
        await AppDataSource.initialize()

        const role1 = new Role()
        role1.id = 1;
        role1.name = "super_admin";
        await role1.save()

        const role2 = new Role()
        role2.id = 2;
        role2.name = "admin";
        await role2.save()

        const role3 = new Role()
        role3.id = 3;
        role3.name = "user";
        await role3.save()

        console.log("=======================================");
        console.log("Roles seeder successfully");
        console.log("=======================================");


    } catch (error: any) {
        console.log("=======================================");
        console.log("ERROR ROLE SEEDER", error.message);
        console.log("=======================================");
    } finally {
        await AppDataSource.destroy();
    }
}