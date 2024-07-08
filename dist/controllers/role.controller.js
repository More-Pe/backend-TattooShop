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
exports.deleteRole = exports.updateRole = exports.getAllRoles = exports.createRole = void 0;
const Role_1 = require("../database/models/Role");
//CREATE
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Obtener info
        const roleId = req.body.id;
        const roleName = req.body.name;
        //2. Validar info
        if (!roleId || !roleName) {
            return res.status(400).json({
                success: false,
                message: "Role Id and role name are required",
            });
        }
        //3. Guardar en la DB
        const newRole = yield Role_1.Role.create({
            id: roleId,
            name: roleName,
        }).save();
        //4. Responder
        res.status(201).json({
            success: true,
            message: "Role have been created succesfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating role",
            error: error,
        });
    }
});
exports.createRole = createRole;
//READ
const getAllRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Recupero info
        const role = yield Role_1.Role.find();
        res.json({
            success: true,
            message: "All roles retrieved succesfully",
            data: role,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting roles",
            error: error,
        });
    }
});
exports.getAllRoles = getAllRoles;
//UPDATE
const updateRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1. Recuperar la info
        const roleIdToUpdate = req.params.id;
        const body = req.body;
        // 2. Validar la info (no es necesario)
        // 3. Tratar la info si es necesario (no)
        // 4. Actualizar en DB
        const roleUpdated = yield Role_1.Role.update({
            id: parseInt(roleIdToUpdate),
        }, body);
        // 5. Responder
        res.status(200).json({
            success: true,
            message: "Role updated succesfully",
            data: roleUpdated,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Role cannot be updated",
            error: error,
        });
    }
});
exports.updateRole = updateRole;
//DELETE
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Obtener el id a eliminar
        const roleToDelete = Number(req.params.id);
        const body = req.body;
        //2. Eliminar de la DB
        const roleDeleted = yield Role_1.Role.delete(roleToDelete);
        if (!roleDeleted.affected) {
            return res.status(404).json({
                success: false,
                message: "Role doesn't exist",
            });
        }
        //3. Responder
        res.status(200).json({
            succes: true,
            message: "Role was deleted succesfully",
            data: roleDeleted,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting role",
            error: error,
        });
    }
});
exports.deleteRole = deleteRole;
