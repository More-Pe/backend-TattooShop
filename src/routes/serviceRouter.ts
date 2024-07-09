import express from 'express';
import { createService, getAllServices, updateService, deleteService } from '../controllers/services.controller';
import { auth } from '../middlewares/auth';
import { isSuperAdmin } from '../middlewares/isSuperAdmin';

const router = express.Router();

router.post('/create', auth, isSuperAdmin, createService); // Crear servicio (solo para superadmin)
router.get('/all', auth, getAllServices); // Ver todos los servicios
router.put('/update/:id', auth, isSuperAdmin, updateService); // Modificar servicio (solo para superadmin)
router.delete('/delete/:id', auth, isSuperAdmin, deleteService); // Eliminar servicio (solo para superadmin)

export default router;
