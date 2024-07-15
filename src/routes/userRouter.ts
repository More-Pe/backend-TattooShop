import express from 'express';
import {
	getAllUsers,
	getUserProfile,
	updateUserById,
	deleteUserById,
} from '../controllers/users.controller';
import { auth } from '../middlewares/auth';
import { isSuperAdmin } from '../middlewares/isSuperAdmin';

const router = express.Router();

router.get('/', auth, isSuperAdmin, getAllUsers); 
router.get('/profile', auth, getUserProfile); 
router.put('/profile', auth, updateUserById); 
router.delete('/:id', auth, isSuperAdmin, deleteUserById);

export default router;
