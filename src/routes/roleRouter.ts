import express from 'express';
import {
	createRole,
	getAllRoles,
	updateRole,
	deleteRole,
} from '../controllers/roles.controller';
import { auth } from '../middlewares/auth';
import { isSuperAdmin } from '../middlewares/isSuperAdmin';

const router = express.Router();

router.post('/', auth, isSuperAdmin, createRole);
router.get('/', auth, isSuperAdmin, getAllRoles);
router.put('/:id', auth, isSuperAdmin, updateRole); 
router.delete('/:id', auth, isSuperAdmin, deleteRole); 

export default router;
