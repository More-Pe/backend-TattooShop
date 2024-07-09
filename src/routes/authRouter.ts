import express from 'express';
import { register, login } from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', register); // Ruta para registrar un nuevo usuario
router.post('/login', login); // Ruta para iniciar sesión

export default router;
