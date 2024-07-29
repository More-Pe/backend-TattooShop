import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../database/models/User';
import jwt from 'jsonwebtoken';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//CREATE
export const register = async (req: Request, res: Response) => {
	try {
		// 1. Get information
		const email = req.body.email;
		const passwordHash = req.body.password_hash;

		// 2. Validate information
		if (!email || !passwordHash) {
			return res.status(400).json({
				success: false,
				message: 'Email and password are required',
			});
		}

		// Validate email format
		if (!emailRegex.test(email)) {
			return res.status(400).json({
				success: false,
				message: 'Email format is not valid',
			});
		}

		if (passwordHash.length < 8 || passwordHash.length > 12) {
			return res.status(400).json({
				success: false,
				message: 'Password is not valid, 8 to 12 characters are required',
			});
		}

		// 3. Process information
		const hashedPassword = bcrypt.hashSync(passwordHash, 10);

		// 4. Save in database
		const newUser = await User.create({
			email: email,
			password_hash: hashedPassword,
		}).save();

		// 5. Response
		return res.status(201).json({
			success: true,
			message: 'User registered successfully',
			data: newUser,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'User cannot be registered',
			error: error
		});
	}
};

//LOGIN
export const login = async (req: Request, res: Response) => {
	try {
		// 1. Get information
		const { email, password_hash } = req.body;

		// 2. Validate information
		if (!email || !password_hash) {
			return res.status(400).json({
				success: false,
				message: 'Email and password are needed',
			});
		}

		// 3. Check if user exists
		const user = await User.findOne({
			where: { email: email },
		});

		if (!user) {
			return res.status(400).json({
				success: false,
				message: 'Email or password not valid',
			});
		}

		// 4. Check password
		const isPasswordValid = bcrypt.compareSync(password_hash, user.password_hash);

		if (!isPasswordValid) {
			return res.status(400).json({
				success: false,
				message: 'Email or password not valid',
			});
		}

		// 5. Create token
		const token = jwt.sign(
			{
				id: user.id,
				role_id: user.role_id,
				email: user.email,
			},
			process.env.JWT_SECRET as string, // Ensure to replace with your JWT secret
			{
				expiresIn: '2h',
			},
		);

		res.status(200).json({
			success: true,
			message: 'User logged',
			token: token,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'User cannot be logged in',
			error: error,
		});
	}
};