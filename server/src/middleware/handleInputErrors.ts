import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { deleteUploadedFiles } from "../helpers";


export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {

    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        if (req.files) {
            deleteUploadedFiles(req.files as Express.Multer.File[]);
        }

        return res.status(400).json({ errors: errors.array() })
    }

    next()
}

