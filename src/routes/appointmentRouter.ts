import express from 'express';
import { createAppointment, updateAppointment, getAllAppointmentsForUser, getAppointmentById, deleteAppointment } from '../controllers/appointments.controller';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.post('/create', auth, createAppointment); // Crear cita
router.put('/update', auth, updateAppointment); // Modificar cita
router.get('/scheduled', auth, getAllAppointmentsForUser); // Ver citas del usuario
router.delete('/delete', auth, deleteAppointment); // Eliminar cita
router.get('/:id', auth, getAppointmentById); // Ver cita por ID

export default router;
