import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../database/models/User";

//READ
export const getAllUsers = async (req: Request, res: Response) => { //TODO A esto solo debe poder acceder el superadmin
    try {
        //1. Obtener información
        const users = await User.find()

        //2. Responder
         res.status(200).json(
            {
                success: true,
                message: "Users retrived successfully!",
                data: users
            }
         )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Cannot create user",
                error: error
            }
        )
    }
}

//UPDATE

export const updateUserById = async (req: Request, res: Response) => {
    try {
        //1. Obtener el id del usuario a modificar
        const userIdToUpdate = req.params.userIdToUpdate
        const body = req.body

        //2. Validar la información (no es necesario)
        //3. Tratar la info si es necesario (no)

        //4. Guardar la información en la DB
        const userUpdated = await User.update(
            {
                id: parseInt(userIdToUpdate)
            },
            body
        )

        //5. Responder
        res.status(200).json(
            {
                success: true,
                message: "User updated successfully!",
                data: userUpdated
            }
        )
    } catch (error) {
      res.status(500).json(
        {
            success: false,
            message: "User cannot be updated! Try again!",
            error: error
        }
      )
    }
}

//DELETE
export const deleteUserById = async (req: Request, res: Response) => { //TODO A esto solo debe poder acceder el superadmin
    try {
        //1. Obtener el id a eliminar

        const userIdToDelete = Number(req.params.id)

        //2. Eliminar de la DB
        const userDeleted = await User.delete(userIdToDelete)

        if(!userDeleted.affected) {
        return res.status(400).json(
            {
                success: false,
                message: "User doesn't exist"
            }
        )
        }

        //3. Responder
        res.status(200).json(
        {
            success: true,
            message: "User was deleted succesfully",
            data: userDeleted
        }
        )
    } catch(error){
        res.status(500).json(
            {
                success: false,
                message: "Error deleting user",
                error: error
            }
        )
    }
}