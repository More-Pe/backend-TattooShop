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
exports.deleteService = exports.updateService = exports.getAllServices = exports.createService = void 0;
const Service_1 = require("../database/models/Service");
//CREATE
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Obtener info
        const service_name = req.body.service_name;
        const description = req.body.description;
        //2. Validar info
        if (!service_name || !description) {
            return res.status(400).json({
                success: false,
                message: "Name and description are required"
            });
        }
        //3. Guardar en la DB
        const newService = yield Service_1.Service.create({
            service_name: service_name,
            description: description
        }).save();
        //4. Responder
        res.status(201).json({
            success: true,
            message: "Service have been created succesfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error
        });
    }
});
exports.createService = createService;
//READ
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Recupero info
        const service = yield Service_1.Service.find();
        res.json({
            success: true,
            message: "All services retrieved succesfully",
            data: service
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting services",
            error: error
        });
    }
});
exports.getAllServices = getAllServices;
//UPDATE
const updateService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1. Recuperar la info
        const serviceIdToUpdate = req.params.id;
        const body = req.body;
        // 2. Validar la info (no es necesario)
        // 3. Tratar la info si es necesario (no)
        // 4. Actualizar en DB
        const serviceUpdated = yield Service_1.Service.update({
            id: parseInt(serviceIdToUpdate)
        }, body);
        // 5. Responder
        res.status(200).json({
            success: true,
            message: "Service updated succesfully",
            data: serviceUpdated
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Service cannot be updated",
            error: error
        });
    }
});
exports.updateService = updateService;
//DELETE
const deleteService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Obtener el id a eliminar
        const serviceToDelete = Number(req.params.id);
        const body = req.body;
        //2. Eliminar de la DB
        const serviceDeleted = yield Service_1.Service.delete(serviceToDelete);
        if (!serviceDeleted.affected) {
            return res.status(404).json({
                success: false,
                message: "Service doesn't exist"
            });
        }
        //3. Responder
        res.status(200).json({
            succes: true,
            message: "Service was deleted succesfully",
            data: serviceDeleted
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting service",
            error: error
        });
    }
});
exports.deleteService = deleteService;
