import express from 'express';
import { body } from "express-validator";
import { handleInputErrors } from '../middleware/handleInputErrors';
import { userController } from '../controllers/user.controller';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post("/create",
    body('userName').notEmpty().withMessage('El nombre de usuario es obligatorio'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    handleInputErrors,
    userController.createUser
);

router.post("/login",
    body('userName').notEmpty().withMessage('El nombre de usuario es obligatorio'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    handleInputErrors,
    userController.login
)

router.post("/logout", auth, userController.logout)

export default router;