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

router.post('/', auth, createAppointment); 
router.put('/', auth, updateAppointment);   
router.get('/', auth, getAllAppointmentsForUser); 
router.delete('/', auth, deleteAppointment); 
router.get('/:id', auth, getAppointmentById); 
export default router;
