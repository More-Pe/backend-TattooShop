import { Request, Response } from 'express';
import { Role } from '../database/models/Role';

//CREATE
export const createRole = async (req: Request, res: Response) => {
	try {
		//1. Get information
		const roleId = req.body.id;
		const roleName = req.body.name;

		//2. Validate information
		if (!roleId || !roleName) {
			return res.status(400).json({
				success: false,
				message: 'Role Id and role name are required',
			});
		}

		//3. Save in the database
		const newRole = await Role.create({
			id: roleId,
			name: roleName,
		}).save();

		//4. Response
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
		//1. Get information
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
		// 1. Get information
		const roleIdToUpdate = req.body.id;
		const body = req.body;
		//2. Update in database
		const roleUpdated = await Role.update(
			{
				id: parseInt(roleIdToUpdate),
			},
			body,
		);
		// 3. Response
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
		//1. Get information
		const roleToDelete = Number(req.params.id);
		const body = req.body;

		//2. Remove from the database
		const roleDeleted = await Role.delete(roleToDelete);

		if (!roleDeleted.affected) {
			return res.status(404).json({
				success: false,
				message: "Role doesn't exist",
			});
		}

		//3. Response
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
