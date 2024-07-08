import { roleSeeder } from "./roleSeeders";
import { serviceSeeder } from "./serviceSeeders";

(async () => {
    console.log("Starting seeders...");
    await roleSeeder();
    await serviceSeeder();
})();