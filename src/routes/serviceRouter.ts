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

router.post('/', auth, isSuperAdmin, createService);
router.get('/', getAllServices);
router.put('/:id', auth, isSuperAdmin, updateService); 
router.delete('/:id', auth, isSuperAdmin, deleteService);

export default router;
