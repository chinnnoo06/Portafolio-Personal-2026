import type { NextFunction, Request, Response } from "express"
import colors from 'colors'
import { TContact } from "../types/contact.types";
import { contactEmailService, verifyCVService } from "../services/contact.service";

export class ContactController {

    static contactEmail = async (req: Request<{}, {}, TContact>, res: Response, next: NextFunction) => {
        let data = req.body

        try {
            await contactEmailService(data)

            return res.status(200).json({
                status: "success",
                mensaje: "Correo enviado correctamente"
            });

        } catch (error) {
            console.log(colors.red.bold("Error al enviar correo de contacto"));
            next(error);
        }
    }

    static downloadCV = async (req: Request, res: Response, next: NextFunction) => {

        try {
            const filePath = await verifyCVService()

            return res.download(filePath, "CV_FranciscoInda.pdf");

        } catch (error) {
            console.log(colors.red.bold("No se pudo descargar el CV"));
            next(error);
        }
    }

}