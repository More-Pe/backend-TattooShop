import express from 'express';
import {
	createAppointment,
	updateAppointment,
	getAllAppointmentsForUser,
	getAppointmentById,
	deleteAppointment,
} from '../controllers/appointments.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.post('/', auth, createAppointment); // Crear cita
router.put('/', auth, updateAppointment); // Modificar cita
router.get('/', auth, getAllAppointmentsForUser); // Ver citas del usuario
router.delete('/', auth, deleteAppointment); // Eliminar cita
router.get('/:id', auth, getAppointmentById); // Recuperar cita

export default router;
