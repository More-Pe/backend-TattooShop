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
exports.deleteAppointment = exports.getAllAppointmentsForUser = exports.getAppointmentById = exports.updateAppointment = exports.createAppointment = void 0;
const Appointment_1 = require("../database/models/Appointment");
//CREATE
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Obtener info
        const appointmentDate = req.body.appointment_date;
        const userId = req.tokenData.id;
        const serviceId = req.body.service_id;
        //2. Validar info
        if (!appointmentDate || !serviceId) {
            return res.status(400).json({
                success: false,
                message: "Date and service are required",
            });
        }
        //3. Guardar en la DB
        const newAppointment = yield Appointment_1.Appointment.create({
            appointment_date: appointmentDate,
            user_id: userId,
            service_id: serviceId,
        }).save();
        //4. Responder
        res.status(201).json({
            success: true,
            message: "Appointment have been created succesfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating appointment",
            error: error,
        });
    }
});
exports.createAppointment = createAppointment;
//UPDATE
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1. Obtener info
        const appointmentId = parseInt(req.params.id);
        const appointmentDate = req.body.appointment_date;
        const serviceId = req.body.service_id;
        const userId = req.tokenData.id;
        // 2. Validar info
        if (!appointmentId || !appointmentDate || !serviceId) {
            return res.status(400).json({
                success: false,
                message: "Appointment ID, date, and service are required",
            });
        }
        // 3. Buscar la cita en la DB
        const appointment = yield Appointment_1.Appointment.findOne({
            where: {
                id: appointmentId,
                user_id: userId,
            },
        });
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }
        // 4. Actualizar la cita en la DB
        appointment.appointment_date = appointmentDate;
        appointment.service_id = serviceId;
        yield appointment.save();
        // 5. Responder
        res.status(200).json({
            success: true,
            message: "Appointment has been updated successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating appointment",
            error: error,
        });
    }
});
exports.updateAppointment = updateAppointment;
//READ appointment by ID
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1. Obtener el ID de la cita
        const appointmentId = req.body.id;
        const userId = req.tokenData.id;
        // 2. Validar info
        if (!appointmentId) {
            return res.status(400).json({
                success: false,
                message: "Appointment Id is required",
            });
        }
        // 3. Buscar la cita en la DB
        const appointment = yield Appointment_1.Appointment.findOne({
            select: {
                id: true,
                appointment_date: true,
                user: {
                    id: true,
                    email: true,
                },
                service: {
                    id: true,
                    service_name: true,
                },
            },
            where: {
                id: parseInt(appointmentId, 10),
                user_id: userId,
            },
        });
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }
        // 4. Responder
        res.status(200).json({
            success: true,
            message: "The appointment was found: ",
            data: appointment,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving appointment",
            error: error,
        });
    }
});
exports.getAppointmentById = getAppointmentById;
//READ user appointments
const getAllAppointmentsForUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1. Obtener el ID del usuario
        const userId = req.tokenData.id;
        // 2. Buscar todas las citas del usuario en la DB
        const appointments = yield Appointment_1.Appointment.find({
            select: {
                id: true,
                appointment_date: true,
                user: {
                    id: true,
                    email: true,
                },
                service: {
                    id: true,
                    service_name: true,
                },
            },
            where: {
                user_id: userId,
            },
            relations: { user: true, service: true }, //Dice con qué tablas relaciono para selccionar (select) la info que que quiero ver
        });
        // 3. Responder
        res.status(200).json({
            success: true,
            message: "You have reserved the following appointments: ",
            data: appointments,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving appointments",
            error: error,
        });
    }
});
exports.getAllAppointmentsForUser = getAllAppointmentsForUser;
// DELETE
const deleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1. Obtener el id a eliminar
        const appointmentId = parseInt(req.params.id, 10);
        const userId = req.tokenData.id;
        // 2. Validar que la cita existe y pertenece al usuario
        const appointmentToDelete = yield Appointment_1.Appointment.findOne({
            where: {
                id: appointmentId,
                user_id: userId,
            },
        });
        if (!appointmentToDelete) {
            return res.status(404).json({
                success: false,
                message: "Appointment doesn't exist or doesn't belong to the user",
            });
        }
        // 3. Eliminar la cita de la DB
        yield Appointment_1.Appointment.delete(appointmentId);
        // 4. Responder
        res.status(200).json({
            success: true,
            message: "Appointment was deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting appointment",
            error: error,
        });
    }
});
exports.deleteAppointment = deleteAppointment;
