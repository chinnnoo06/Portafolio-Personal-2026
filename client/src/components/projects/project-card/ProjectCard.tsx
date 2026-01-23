import { GlobalImageProject } from "../../../helpers/config/env"
import type { TProjectCartProps } from "../types"
import { ProjectCardInfo } from "./ProjectCardInfo"

export const ProjectCard = ({ project }: TProjectCartProps) => {
    return (
        <div className="group flex flex-col gap-2 cursor-pointer">
            <div className="relative overflow-hidden rounded-lg w-full border-2 border-[#272727]">
                <img
                    src={`${GlobalImageProject.url}${project.images[0]}`}
                    alt="Producto"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:hover:scale-[1.02]"
                />

                {/* Overlay oscuro leve */}
                <div className="absolute inset-0 bg-black opacity-5 pointer-events-none"></div>
            </div>
           
            <ProjectCardInfo project={project} />
        </div>
    )
}
