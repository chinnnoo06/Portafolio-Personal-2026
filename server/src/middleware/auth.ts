import { NextFunction, Request, Response } from "express";
import jwt from 'jwt-simple'
import moment from "moment";
import { SECRET_KEY } from "../config/env";
import { TUser } from "../types/user.types";

declare global {
    namespace Express {
        interface Request {
            user?: TUser
        }
    }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    let token = null;
    // Buscar token en cookies
    if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }
    if (!token && req.headers.authorization) {
        token = req.headers.authorization.replace(/['"]+/g, '');
    }

    if (!token) {
        return res.status(403).json({ status: "error", mensaje: "No hay token de autenticación" });
    }

    try {
        const payload = jwt.decode(token, SECRET_KEY);

        // Validar expiración
        if (payload.exp <= moment().unix()) {
            return res.status(401).json({ status: "error", mensaje: "Token expirado" });
        }

        req.user = payload;

        next();
    } catch (err) {
        return res.status(401).json({ status: "error", mensaje: "Token inválido" });
    }
}