import express from 'express';
import multer from 'multer';
import path from "path";
import fs from "fs";
import { auth } from '../middleware/auth';
import { ProjectController } from '../controllers/project.controller';
import { body, param } from 'express-validator';
import { handleInputErrors } from '../middleware/handleInputErrors';
import { converToWebP } from '../middleware/convertToWebP';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, "../uploads/projects");

        if (!fs.existsSync(dir)) { //para que si no existe la crea
            fs.mkdirSync(dir, { recursive: true });
        }

        cb(null, dir);
    },
    filename: (req, file, cb) => {
        if (!req.body._fileIndex) req.body._fileIndex = 0;

        let projectName: string = req.body.name || "project";
        projectName = projectName.toLowerCase().replace(/\s+/g, "_");

        const index = req.body._fileIndex + 1;

        const ext = path.extname(file.originalname);

        const timestamp = Date.now();

        const filename = `${projectName}_${index}-${timestamp}${ext}`;

        req.body._fileIndex++;

        cb(null, filename);
    }
});

const projectsUploads = multer({ storage });

router.post("/create",
    auth,
    projectsUploads.any(),
    body("name")
        .notEmpty().withMessage("El nombre del proyecto es obligatorio")
        .isString().withMessage("El nombre debe ser un string")
        .trim(),

    body("content")
        .notEmpty().withMessage("El contenido es obligatorio")
        .custom((value) => {
            let contentArray;
            try {
                contentArray = typeof value === "string" ? JSON.parse(value) : value;
            } catch (err) {
                throw new Error("Content debe ser un JSON válido");
            }

            if (!Array.isArray(contentArray)) {
                throw new Error("Content debe ser un array");
            }

            for (const item of contentArray) {
                if (!["paragraph", "heading", "quote"].includes(item.type)) {
                    throw new Error("Cada item del contenido debe tener un type válido: paragraph, heading o quote");
                }

                if (!item.text || typeof item.text !== "string") {
                    throw new Error("Cada item debe tener un text string");
                }

                if (item.type === "heading" && ![2, 3].includes(item.level)) {
                    throw new Error("Los headings deben tener level 2 o 3");
                }
            }

            return true;
        }),

    body("technologies")
        .custom((value) => {
            const techArray = typeof value === "string" ? value.split(",") : value;
            if (!Array.isArray(techArray)) throw new Error("Technologies debe ser un array o string separado por comas");
            return true;
        }),

    body("excerpt")
        .notEmpty().withMessage("El excerpt del proyecto es obligatorio")
        .isString().withMessage("El excerpt debe ser un string")
        .trim(),

    handleInputErrors,
    converToWebP,
    ProjectController.createProject
);

router.put("/update/:id",
    auth,
    projectsUploads.any(),
    param("id").isMongoId().withMessage("Id del proyecto invalido"),
    body("name")
        .notEmpty().withMessage("El nombre del proyecto es obligatorio")
        .isString().withMessage("El nombre debe ser un string")
        .trim(),

    body("content")
        .notEmpty().withMessage("El contenido es obligatorio")
        .custom((value) => {
            let contentArray;
            try {
                contentArray = typeof value === "string" ? JSON.parse(value) : value;
            } catch (err) {
                throw new Error("Content debe ser un JSON válido");
            }

            if (!Array.isArray(contentArray)) {
                throw new Error("Content debe ser un array");
            }

            for (const item of contentArray) {
                if (!["paragraph", "heading", "quote"].includes(item.type)) {
                    throw new Error("Cada item del contenido debe tener un type válido: paragraph, heading o quote");
                }

                if (!item.text || typeof item.text !== "string") {
                    throw new Error("Cada item debe tener un text string");
                }

                if (item.type === "heading" && ![2, 3].includes(item.level)) {
                    throw new Error("Los headings deben tener level 2 o 3");
                }
            }

            return true;
        }),

    body("technologies")
        .custom((value) => {
            const techArray = typeof value === "string" ? value.split(",") : value;
            if (!Array.isArray(techArray)) throw new Error("Technologies debe ser un array o string separado por comas");
            return true;
        }),
        
    body("excerpt")
        .notEmpty().withMessage("El excerpt del proyecto es obligatorio")
        .isString().withMessage("El excerpt debe ser un string")
        .trim(),

    handleInputErrors,
    converToWebP,
    ProjectController.updateProject
);

router.delete("/delete/:id",
    auth,
    param("id").isMongoId().withMessage("Id del proyecto invalido"),
    handleInputErrors,
    ProjectController.deleteProject
);

router.get("/get",
    ProjectController.getProjects
);

router.get("/get-initials",
    ProjectController.getInitialsProjects
);

router.get("/get-initials/:excluded",
    param('excluded').isMongoId().withMessage('El ID es incorrecto'),
    handleInputErrors,
    ProjectController.getInitialsProjects
)

router.get("/get/:slug",
    param('slug').notEmpty().withMessage("El slug es obligatorio"),
    handleInputErrors,
    ProjectController.getOneProject
);


export default router;