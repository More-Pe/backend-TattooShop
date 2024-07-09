import express from 'express';
import { getAllUsers, getUserProfile, updateUserById, deleteUserById } from '../controllers/users.controller';
import { auth } from '../middlewares/auth';
import { isSuperAdmin } from '../middlewares/isSuperAdmin';

const router = express.Router();

router.get('/all', auth, isSuperAdmin, getAllUsers); // Ver todos los usuarios (solo para superadmin)
router.get('/profile', auth, getUserProfile); // Ver perfil del usuario
router.put('/profile/update', auth, updateUserById); // Modificar perfil del usuario
router.delete('/:id', auth, isSuperAdmin, deleteUserById); // Eliminar usuario (solo para superadmin)

export default router;
