import { AppDataSource } from "../db";
import { Service } from "../models/Service";
export const serviceSeeder = async () => {
    try {
        await AppDataSource.initialize()

        const service1 = new Service();
        service1.id = 1;
        service1.service_name = "Tatuajes personalizados";
        service1.description = "Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos.";
        service1.image_url="../../img/personalizado.png"
        await service1.save();
        
        const service2 = new Service();
        service2.id = 2;
        service2.service_name = "Tatuajes del catálogo";
        service2.description = "Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas.";
        service2.image_url="../../img/catálogo.png"
        await service2.save();
        
        const service3 = new Service();
        service3.id = 3;
        service3.service_name = "Restauración y rejuvenecimiento de trabajos";
        service3.description = "Nos especializamos en la restauración y rejuvenecimiento de tatuajes existentes. Nuestros expertos trabajan para mejorar y renovar tatuajes antiguos, devolviéndoles su vitalidad.";
         service3.image_url="../../img/borrado.png"
        await service3.save();
        
        const service4 = new Service();
        service4.id = 4;
        service4.service_name = "Colocación de piercings y dilatadores";
        service4.description = "Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individuales de nuestros clientes.";
         service4.image_url="../../img/piercing.png"
        await service4.save();
        
        const service5 = new Service();
        service5.id = 5;
        service5.service_name = "Venta de piercings y otros artículos";
        service5.description = "Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otros artículos relacionados con el arte.";
        service5.image_url="../../img/joyería.png"
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
}