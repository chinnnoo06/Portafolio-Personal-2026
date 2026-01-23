import type { NextFunction, Request, Response } from "express"
import colors from 'colors'
import { TUser } from "../types/user.types";
import { createUserService, loginService } from "../services/user.service";
import { createToken } from "../services/jwt.service";

export class userController {

    static createUser = async (req: Request<{}, {}, TUser>, res: Response, next: NextFunction) => {
        if (process.env.NODE_ENV === "production") {
            return res.status(404).end()
        }

        let data = req.body

        try {
            await createUserService(data)

            return res.status(200).json({
                status: "success",
                mensaje: "Usuario creado con éxito"
            });

        } catch (error) {
            console.log(colors.red.bold("Error al crear usuario"));
            next(error);
        }
    }

    static login = async (req: Request<{}, {}, TUser>, res: Response, next: NextFunction) => {
        let data = req.body

        try {
            const userId = await loginService(data)

            const token = createToken(userId);

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: 'lax',
                maxAge: 24 * 60 * 60 * 1000
            });

            return res.status(200).json({
                status: "success",
                mensaje: "Login con éxito"
            });

        } catch (error) {
            console.log(colors.red.bold("Error al iniciar sesión"));
            next(error);
        }
    }

    static logout = async (req: Request, res: Response) => {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        });
        return res.status(200).json({
            status: "success",
            mensaje: "Sesión cerrada correctamente"
        });
    }
}