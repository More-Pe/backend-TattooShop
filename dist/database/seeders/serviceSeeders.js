"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceSeeder = void 0;
const db_1 = require("../db");
const Service_1 = require("../models/Service");
const serviceSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const service1 = new Service_1.Service();
        service1.id = 1;
        service1.service_name = "Tatuajes personalizados";
        service1.description = "Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos.";
        yield service1.save();
        const service2 = new Service_1.Service();
        service2.id = 2;
        service2.service_name = "Tatuajes del catálogo";
        service2.description = "Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas.";
        yield service2.save();
        const service3 = new Service_1.Service();
        service3.id = 3;
        service3.service_name = "Restauración y rejuvenecimiento de trabajos";
        service3.description = "Nos especializamos en la restauración y rejuvenecimiento de tatuajes existentes. Nuestros expertos trabajan para mejorar y renovar tatuajes antiguos, devolviéndoles su vitalidad.";
        yield service3.save();
        const service4 = new Service_1.Service();
        service4.id = 4;
        service4.service_name = "Colocación de piercings y dilatadores";
        service4.description = "Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individuales de nuestros clientes.";
        yield service4.save();
        const service5 = new Service_1.Service();
        service5.id = 5;
        service5.service_name = "Venta de piercings y otros artículos";
        service5.description = "Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otros artículos relacionados con el arte.";
        yield service5.save();
        console.log("=======================================");
        console.log("Service seeder successfully");
        console.log("=======================================");
    }
    catch (error) {
        console.log("=======================================");
        console.log("ERROR SERVICE SEEDER", error.message);
        console.log("=======================================");
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.serviceSeeder = serviceSeeder;
