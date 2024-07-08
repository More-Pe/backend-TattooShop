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
exports.deleteUserById = exports.updateUserById = exports.getUserProfile = exports.getAllUsers = void 0;
const User_1 = require("../database/models/User");
//READ all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Obtener información
        const users = yield User_1.User.find();
        //2. Responder
        res.status(200).json({
            success: true,
            message: "Users retrived successfully",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Cannot create user",
            error: error,
        });
    }
});
exports.getAllUsers = getAllUsers;
//READ profile
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Obtener información
        const userId = req.tokenData.id;
        //2. Bucarlo en DB
        const user = yield User_1.User.findOne({
            where: { id: userId },
        });
        //2. Responder
        res.status(200).json({
            success: true,
            message: "Profile retrived successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Cannot access to profile",
            error: error,
        });
    }
});
exports.getUserProfile = getUserProfile;
//UPDATE
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Obtener el id del usuario a modificar
        const userIdToUpdate = req.params.userIdToUpdate;
        const body = req.body;
        //2. Validar la información (no es necesario)
        //3. Tratar la info si es necesario (no)
        //4. Guardar la información en la DB
        const userUpdated = yield User_1.User.update({
            id: parseInt(userIdToUpdate),
        }, body);
        //5. Responder
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: userUpdated,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User cannot be updated",
            error: error,
        });
    }
});
exports.updateUserById = updateUserById;
//DELETE
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //1. Obtener el id a eliminar
        const userIdToDelete = Number(req.params.id);
        //2. Eliminar de la DB
        const userDeleted = yield User_1.User.delete(userIdToDelete);
        if (!userDeleted.affected) {
            return res.status(400).json({
                success: false,
                message: "User doesn't exist",
            });
        }
        //3. Responder
        res.status(200).json({
            success: true,
            message: "User was deleted succesfully",
            data: userDeleted,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error,
        });
    }
});
exports.deleteUserById = deleteUserById;
