import express from 'express';
import {
	createService,
	getAllServices,
	updateService,
	deleteService,
} from '../controllers/services.controller';
import { auth } from '../middlewares/auth';
import { isSuperAdmin } from '../middlewares/isSuperAdmin';

const router = express.Router();

router.post('/', auth, isSuperAdmin, createService); // Crear servicio (solo para superadmin)
router.get('/', getAllServices); // Ver todos los servicios
router.put('/:id', auth, isSuperAdmin, updateService); // Modificar servicio (solo para superadmin)
router.delete('/:id', auth, isSuperAdmin, deleteService); // Eliminar servicio (solo para superadmin)

export default router;
