import { roleSeeder } from "./roleSeeders";

(async () => {
    console.log("Starting seeders...");
    await roleSeeder();
})();