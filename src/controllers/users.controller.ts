import { Request, Response } from 'express';
import { User } from '../database/models/User';

//READ all users
export const getAllUsers = async (req: Request, res: Response) => {
	try {
		//1. Get information
		const users = await User.find({
			select: {
				email: true,
			},
		});

		//2. Response
		res.status(200).json({
			success: true,
			message: 'Users retrived successfully',
			data: users,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Cannot show all users',
			error: error,
		});
	}
};

//READ profile
export const getUserProfile = async (req: Request, res: Response) => {
	try {
		//1. Get information
		const userId = req.tokenData.id;

		//2. Find in database
		const user = await User.findOne({
			where: { id: userId },
		});
		//2. Response
		res.status(200).json({
			success: true,
			message: 'Profile retrived successfully',
			data: user,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Cannot access to profile',
			error: error,
		});
	}
};

//UPDATE
export const updateUserById = async (req: Request, res: Response) => {
	try {
		//1. Get info
		const userIdToUpdate = req.tokenData.id;
		const body = req.body;

		//2. Save in database
		const userUpdated = await User.update({ id: userIdToUpdate }, body);

		//3. Response
		res.status(200).json({
			success: true,
			message: 'User updated successfully',
			data: userUpdated,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'User cannot be updated',
			error: error,
		});
	}
};

//DELETE
export const deleteUserById = async (req: Request, res: Response) => {
	try {
		//1. Get info
		const userIdToDelete = Number(req.params.id);

		//2. Remove from the database
		const userDeleted = await User.delete(userIdToDelete);

		if (!userDeleted.affected) {
			return res.status(400).json({
				success: false,
				message: "User doesn't exist",
			});
		}

		//3. Response
		res.status(200).json({
			success: true,
			message: 'User was deleted succesfully',
			data: userDeleted,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error deleting user',
			error: error,
		});
	}
};
