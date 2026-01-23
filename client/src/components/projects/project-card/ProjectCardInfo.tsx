import { Link } from "react-router-dom"
import type { TProjectCartProps } from "../types"

export const ProjectCardInfo = ({ project }: TProjectCartProps) => {
    return (
        <div className="space-y-2 mt-2">

            <div className="flex flex-col">
                <span className="font-medium text-sm lg:text-base opacity-65">
                    {new Date(project.createdAt).toLocaleDateString("es-MX", {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </span>
                <h3 className="font-semibold text-xl lg:text-2xl text-[#272727] group-hover:text-[#b03a3a] transition-colors duration-300">{project.name}</h3>
            </div>

            <p className="font-medium opacity-65 text-base lg:text-lg">{project.excerpt}</p>

            <Link to={`/proyectos/${project.slug}`} className="self-start">
                <span className="font-medium text-[#b03a3a] hover:text-[#932f2f] text-base lg:text-lg flex items-center">Ver Detalles</span>
            </Link>
        </div>
    )
}