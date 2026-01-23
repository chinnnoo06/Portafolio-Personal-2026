import path from "path"
import fs from "fs";
import slugify from "slugify";
import { projectRepository } from "../repositories/project.repository";
import { TProject } from "../types/project.types";
import { TMongoIdParams } from "../types/mongo.types";
import { deleteUploadedFiles, HttpError } from "../helpers";
import { PipelineStage, Types } from "mongoose";
import { TGetInitialProjectsParams, TGetOneProjectParams } from "../types/params.types";

export const createdProjectService = async (data: TProject, files: Express.Multer.File[]) => {
    const baseSlug = slugify(data.name, { lower: true, strict: true })
    const slug = `${baseSlug}-${Date.now().toString().slice(-5)}`

    try {
        const dataProject: TProject = {
            name: data.name,
            slug: slug,
            excerpt: data.excerpt,
            content: typeof data.content === "string" ? JSON.parse(data.content) : data.content,
            images: [],
            technologies: data.technologies
                ? typeof data.technologies === "string"
                    ? (data.technologies as string).split(",")
                    : (data.technologies as string[])
                : [],
            githubUrl: data.githubUrl
        }

        for (const file of files) {
            dataProject.images.push(file.filename)
        }

        const project = await projectRepository.addProduct(dataProject);
        return project;
    } catch (error) {
        deleteUploadedFiles(files)
        throw error;
    }
}

export const updateProjectService = async (projectId: TMongoIdParams['id'], data: TProject, files: Express.Multer.File[]) => {
    const project = await projectRepository.findById(projectId)

    if (!project) {
        deleteUploadedFiles(files)
        throw new HttpError(404, "No existe el projecto");
    }

    let slug = project.slug

    if (data.name !== project.name) {
        const baseSlug = slugify(data.name, { lower: true, strict: true })
        slug = `${baseSlug}-${Date.now().toString().slice(-5)}`
    }

    const oldImages = [...project.images];

    try {
        project.name = data.name
        project.slug = slug
        project.excerpt = data.excerpt
        project.content = typeof data.content === "string" ? JSON.parse(data.content) : data.content
        project.technologies = data.technologies
            ? typeof data.technologies === "string"
                ? (data.technologies as string).split(",")
                : (data.technologies as string[])
            : []
        project.githubUrl = data.githubUrl
        project.images = []

        for (const file of files) {
            project.images.push(file.filename)
        }

        await projectRepository.save(project)

        for (const img of oldImages) {
            try {
                const filePath = path.join(__dirname, "../uploads/projects", img);
                fs.unlinkSync(filePath);
                console.log("Imagen antigua eliminada:", img);
            } catch (err) {
                console.error("Error eliminando imagen antigua:", img, err);
            }
        }
    } catch (error) {
        deleteUploadedFiles(files)
        throw error;
    }
}

export const deleteProjectService = async (projectId: TMongoIdParams['id']) => {
    const project = await projectRepository.findById(projectId)

    if (!project) {
        throw new HttpError(404, "No existe el projecto");
    }

    await projectRepository.deleteOne(project)

    for (const img of project.images) {
        try {
            const filePath = path.join(__dirname, "../uploads/projects", img);
            fs.unlinkSync(filePath);
            console.log("Imagen antigua eliminada:", img);
        } catch (err) {
            console.error("Error eliminando imagen antigua:", img, err);
        }
    }
}

export const getProjectsService = async () => {
    const projects = await projectRepository.getProjects()

    if (projects.length === 0) throw new HttpError(404, "No hay projectos");

    return projects
}

export const getInitialsProjectsService = async (excluded?: TGetInitialProjectsParams['excluded']) => {
    const pipeline: PipelineStage[] = [];

    // excluir artículo si viene
    if (excluded && Types.ObjectId.isValid(excluded)) {
        pipeline.push({
            $match: {
                _id: { $ne: new Types.ObjectId(excluded) }
            }
        })
    }

    // random + límite
    pipeline.push(
        { $sample: { size: 2 } }
    )

    const projects = await projectRepository.getInitialsProjects(pipeline)

    if (projects.length === 0) throw new HttpError(404, "No hay projectos");

    return projects
}

export const getOneProjectService = async (slug: TGetOneProjectParams['slug']) => {
    const project = await projectRepository.getOneProject(slug)

    if (!project) throw new HttpError(404, "El projecto no existe");

    return project
}