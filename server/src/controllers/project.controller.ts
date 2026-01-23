import type { NextFunction, Request, Response } from "express"
import colors from 'colors'
import { TProject } from "../types/project.types";
import { createdProjectService, deleteProjectService, getInitialsProjectsService, getOneProjectService, getProjectsService, updateProjectService } from "../services/project.service";
import { TMongoIdParams } from "../types/mongo.types";
import { TGetInitialProjectsParams, TGetOneProjectParams } from "../types/params.types";

export class ProjectController {

    static createProject = async (req: Request<{}, {}, TProject>, res: Response, next: NextFunction) => {
        const data = req.body

        const files = req.files as Express.Multer.File[];

        try {
            await createdProjectService(data, files)

            return res.status(200).json({
                status: "success",
                mensaje: "Proyecto creado con éxito"
            });

        } catch (error) {
            console.log(colors.red.bold("Error al crear proyecto"));
            next(error)
        }
    }

    static updateProject = async (req: Request<TMongoIdParams, {}, TProject>, res: Response, next: NextFunction) => {
        const id = req.params.id
        const data = req.body

        const files = req.files as Express.Multer.File[];

        try {
            await updateProjectService(id, data, files)

            return res.status(200).json({
                status: "success",
                mensaje: "Proyecto actualizado con éxito"
            });

        } catch (error) {
            console.log(colors.red.bold("Error al actualizar proyecto"));
            next(error)
        }
    }

    static deleteProject = async (req: Request<TMongoIdParams, {}, {}>, res: Response, next: NextFunction) => {
        const id = req.params.id

        try {
            await deleteProjectService(id)

            return res.status(200).json({
                status: "success",
                mensaje: "Proyecto eliminado con éxito"
            });

        } catch (error) {
            console.log(colors.red.bold("Error al eliminar proyecto"));
            next(error)
        }
    }

    static getProjects = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const projects = await getProjectsService()

            return res.status(200).json({
                status: "success",
                mensaje: "Proyectos obtenidos con éxito",
                projects
            });

        } catch (error) {
            console.log(colors.red.bold("Error al obtener proyectos"));
            next(error)
        }
    }


    static getInitialsProjects = async (req: Request<TGetInitialProjectsParams, {}, {}>, res: Response, next: NextFunction) => {
        const { excluded } = req.params

        try {
            const projects = await getInitialsProjectsService(excluded)

            return res.status(200).json({
                status: "success",
                projects
            })
        } catch (error) {
            console.log(colors.red.bold("Error al obtener projectos"))
            next(error);
        }
    }

    static getOneProject = async (req: Request<TGetOneProjectParams, {}, {}>, res: Response, next: NextFunction) => {
        const { slug } = req.params

        try {
            const project = await getOneProjectService(slug)

            return res.status(200).json({
                status: "success",
                project
            })
        } catch (error) {
            console.log(colors.red.bold("Error al obtener projecto"))
            next(error);
        }
    }

}