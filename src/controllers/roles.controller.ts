import { Request, Response } from 'express';
import { Role } from '../database/models/Role';

//CREATE
export const createRole = async (req: Request, res: Response) => {
	try {
		//1. Obtener info
		const roleId = req.body.id;
		const roleName = req.body.name;

		//2. Validar info
		if (!roleId || !roleName) {
			return res.status(400).json({
				success: false,
				message: 'Role Id and role name are required',
			});
		}

		//3. Guardar en la DB
		const newRole = await Role.create({
			id: roleId,
			name: roleName,
		}).save();

		//4. Responder
		res.status(201).json({
			success: true,
			message: 'Role have been created succesfully',
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error creating role',
			error: error,
		});
	}
};

//READ
export const getAllRoles = async (req: Request, res: Response) => {
	try {
		//1. Recupero info
		const role = await Role.find();

		res.json({
			success: true,
			message: 'All roles retrieved succesfully',
			data: role,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error getting roles',
			error: error,
		});
	}
};

//UPDATE
export const updateRole = async (req: Request, res: Response) => {
	try {
		// 1. Recuperar la info
		const roleIdToUpdate = req.body.id;
		const body = req.body;
		// 2. Validar la info (no es necesario)
		// 3. Tratar la info si es necesario (no)
		// 4. Actualizar en DB
		const roleUpdated = await Role.update(
			{
				id: parseInt(roleIdToUpdate),
			},
			body,
		);
		// 5. Responder
		res.status(200).json({
			success: true,
			message: 'Role updated succesfully',
			data: roleUpdated,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Role cannot be updated',
			error: error,
		});
	}
};

//DELETE
export const deleteRole = async (req: Request, res: Response) => {
	try {
		//1. Obtener el id a eliminar
		const roleToDelete = Number(req.params.id);
		const body = req.body;

		//2. Eliminar de la DB
		const roleDeleted = await Role.delete(roleToDelete);

		if (!roleDeleted.affected) {
			return res.status(404).json({
				success: false,
				message: "Role doesn't exist",
			});
		}

		//3. Responder
		res.status(200).json({
			succes: true,
			message: 'Role was deleted succesfully',
			data: roleDeleted,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error deleting role',
			error: error,
		});
	}
};
