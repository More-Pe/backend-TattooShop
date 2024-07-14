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

router.post('/', auth, isSuperAdmin, createRole); // Crear rol (solo para superadmin)
router.get('/', auth, isSuperAdmin, getAllRoles); // Ver todos los roles (solo para superadmin)
router.put('/:id', auth, isSuperAdmin, updateRole); // Modificar rol (solo para superadmin)
router.delete('/:id', auth, isSuperAdmin, deleteRole); // Eliminar rol (solo para superadmin)

export default router;
