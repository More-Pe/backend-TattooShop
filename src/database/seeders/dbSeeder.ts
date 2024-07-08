import { roleSeeder } from "./roleSeeders";
import { serviceSeeder } from "./serviceSeeders";
import { userSeeder } from "./userSeeders";

(async () => {
    console.log("Starting seeders...");
    await roleSeeder();
    await serviceSeeder();
    await userSeeder();
})();