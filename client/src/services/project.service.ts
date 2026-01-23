import z from "zod";
import { Global } from "../helpers/config/env";
import axios, { AxiosError } from "axios";
import type { TProject } from "../types/project.types";
import { ProjectSchema } from "../schemas/project.schemas";

export const getProjects = async (): Promise<TProject[]> => {
    const url = `${Global.url}/api/project/get`

    try {
        const { data } = await axios.get(url);

        if (data.status !== "success") {
            throw new Error("Respuesta inválida del servidor");
        }

        const result = z.array(ProjectSchema).safeParse(data.projects);

        if (!result.success) {
            throw new Error("Respuesta inválida del servidor");
        }

        return result.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.mensaje || "Error al obtener projectos"
            );
        }

        throw new Error("Error inesperado");
    }
}

export const getInitialsProjects = async (id?: TProject['_id']): Promise<TProject[]> => {
    const url = id
        ? `${Global.url}/api/project/get-initials/${id}`
        : `${Global.url}/api/project/get-initials`

    try {
        const { data } = await axios.get(url);

        if (data.status !== "success") {
            throw new Error("Respuesta inválida del servidor");
        }

        const result = z.array(ProjectSchema).safeParse(data.projects);

        if (!result.success) {
            throw new Error("Respuesta inválida del servidor");
        }

        return result.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.mensaje || "Error al obtener projectos iniciales"
            );
        }

        throw new Error("Error inesperado");
    }
}

export const getOneProject = async (slug: TProject['slug']): Promise<TProject> => {
    const url = `${Global.url}/api/project/get/${slug}`

    try {
        const { data } = await axios.get(url);

        if (data.status !== "success") {
            throw new Error("Respuesta inválida del servidor");
        }

        const result = ProjectSchema.safeParse(data.project);

        if (!result.success) {
            throw new Error("Respuesta inválida del servidor");
        }

        return result.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.mensaje || "Error al obtener projectos iniciales"
            );
        }

        throw new Error("Error inesperado");
    }
}