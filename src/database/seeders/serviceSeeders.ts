import { AppDataSource } from "../db";
import { Service } from "../models/Service";

export const serviceSeeder = async () => {
    try {
        await AppDataSource.initialize();

        const service1 = new Service();
        service1.id = 1;
        service1.service_name = "Custom Tattoos";
        service1.description = "Customers will have the freedom to select unique motifs and designs, completely customizing their tattoo experience according to their preferences and tastes.";
        service1.image_url = "https://i.postimg.cc/sQ2JTGrW/personalizado.png";
        await service1.save();

        const service2 = new Service();
        service2.id = 2;
        service2.service_name = "Catalog Tattoos";
        service2.description = "We offer the realization of tattoos based on predefined designs in our catalog. Customers can choose from a variety of stylized and tested options.";
        service2.image_url = "https://i.postimg.cc/qtwLcX90/cata-logo.png";
        await service2.save();

        const service3 = new Service();
        service3.id = 3;
        service3.service_name = "Tattoo Restoration and Rejuvenation";
        service3.description = "We specialize in the restoration and rejuvenation of existing tattoos. Our experts work to enhance and renew old tattoos, restoring their vitality.";
        service3.image_url = "https://i.postimg.cc/bGpg2FV3/restauracio-n.png";
        await service3.save();

        const service4 = new Service();
        service4.id = 4;
        service4.service_name = "Piercing and Gauging Placement";
        service4.description = "We offer professional services for the placement of piercings and gauges. Our team ensures safe procedures and various styles to meet the individual preferences of our clients.";
        service4.image_url = "https://i.postimg.cc/SnWVRpdn/piercings.png";
        await service4.save();

        const service5 = new Service();
        service5.id = 5;
        service5.service_name = "Sale of Piercings and Other Items";
        service5.description = "In addition to our application services, we offer a selection of piercings and other items related to the art.";
        service5.image_url = "https://i.postimg.cc/TLHJF2d4/joyeri-a.png";
        await service5.save();

        console.log("=======================================");
        console.log("Services seeder successfully");
        console.log("=======================================");

    } catch (error: any) {
        console.log("=======================================");
        console.log("ERROR SERVICES SEEDER", error.message);
        console.log("=======================================");
    } finally {
        await AppDataSource.destroy();
    }
};
