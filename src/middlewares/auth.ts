import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TokenDecoded } from '../types';

export const auth = (req: Request, res: Response, next: NextFunction) => {
	try {
		console.log('Middleware authentication');

		if (!req.headers.authorization) {
			return res.status(401).json({
				succes: false,
				message: 'Unauthorized',
			});
		}

		const token = req.headers.authorization.split(' ')[1]; //Retrieves the token and with 'split' transforms it into an array, uses the element in position 1

		const decoded = jwt.verify(
			token,
			process.env.JWT_SECRET as string,
		) as TokenDecoded; // The 'verify' checks that the token has been signed with the correct word and extracts the requested data (id, email and error). The 'as TokenDecoded' makes it behave like the TokenDecoded interface (see index.d.ts).

		req.tokenData = {
			id: decoded.id,
			role_id: decoded.role_id,
			email: decoded.email,
		};

		next();
	} catch (error) {
		res.status(401).json({
			success: false,
			message: 'Error authenticating user',
		});
	}
};
