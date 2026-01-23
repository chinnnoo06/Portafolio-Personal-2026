import { TProject } from "./project.types"

export type TGetInitialProjectsParams = {
    excluded?: string
}

export type TGetOneProjectParams = Pick<TProject, 'slug'>