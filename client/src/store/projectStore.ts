import { create } from "zustand";
import { devtools } from "zustand/middleware"
import type { TProject } from "../types/project.types";
import { getInitialsProjects, getOneProject, getProjects } from "../services/project.service";

type TProjectState = {
    projects: TProject[],
    projectsInitials: TProject[],
    projectSelected: TProject | null,
    getProjects: () => Promise<void>
    getProjectsInitials: (id?: TProject['_id']) => Promise<void>
    getOneProject: (slug: TProject['slug']) => Promise<void>
}

export const useProjectStore = create<TProjectState>()(
    devtools(
        (set) => ({
            projects: [],

            projectsInitials: [],

            projectSelected: null,

            getProjects: async () => {
                const response = await getProjects()

                if (response) {
                    set({
                        projects: response
                    })
                }
            },

            getProjectsInitials: async (id) => {
                const response = await getInitialsProjects(id)

                if (response) {
                    set({
                        projectsInitials: response
                    })
                }
            },

            getOneProject: async (slug) => {
                const response = await getOneProject(slug)

                if (response) {
                    set({
                        projectSelected: response
                    })
                }
            }

        })
    )
)