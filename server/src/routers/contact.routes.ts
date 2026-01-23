import express from 'express';
import { body } from "express-validator";
import { handleInputErrors } from '../middleware/handleInputErrors';
import { ContactController } from '../controllers/contact.controller';

const router = express.Router();

router.post("/sendEmail",
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').notEmpty().withMessage('El email es obligatorio').isEmail().withMessage('El email no es válido'),
    body('subject').notEmpty().withMessage('El tema es obligatorio'),
    body('message').notEmpty().withMessage('El mensaje es obligatorio').isLength({ max: 450 }).withMessage("La cantidad máxima de caracteres del mensaje son 450"),
    handleInputErrors,
    ContactController.contactEmail
);

router.get("/downloadCV",
    ContactController.downloadCV
);

export default router;