import { useEffect } from "react"
import { motion } from 'framer-motion'
import { useProjectStore } from "../../store/projectStore"
import { Spinner } from "../ui/Spinner"
import { slideInBottomInView, slideInLeftInView, slideInRightInView } from "../../helpers/animations"
import { Link } from "react-router-dom"
import { ProjectCard } from "./project-card/ProjectCard"

type TInitialsProjectsProps = {
    projectSelected?: string
}

export const InitialsProjects = ({projectSelected } : TInitialsProjectsProps) => {

    const { getProjectsInitials, projectsInitials } = useProjectStore()

    useEffect(() => {
        getProjectsInitials(projectSelected)
    }, [projectSelected, getProjectsInitials])

    if (!projectsInitials.length) {
        return <Spinner />
    }

    return (
        <div className="flex flex-col gap-6 mx-auto max-w-7xl px-4">
            <div className="flex justify-between items-center mb-6">
                <motion.div {...slideInLeftInView()}>
                    <h2 className='font-bold text-3xl lg:text-4xl relative inline-block'>
                       {projectSelected ? 'Ver Más Proyectos' : "Mis Proyectos"}
                        <span className="absolute left-0 -bottom-1.5 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                    </h2>
                </motion.div>

                <motion.div {...slideInRightInView()} className="hidden sm:block">

                    <Link to='/proyectos'>
                        <button className="text-sm lg:text-base px-3 py-2 border border-[#b03a3a] text-[#b03a3a] rounded hover:bg-[#b03a3a] hover:text-white transition-colors duration-300 cursor-pointer">
                            Ver todos los projectos
                        </button>
                    </Link>

                </motion.div>
            </div>

            <motion.div {...slideInBottomInView} className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {projectsInitials.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}

            </motion.div>

            <motion.div {...slideInBottomInView} className="flex justify-center sm:hidden mt-5">

                <Link to='/proyectos'>
                    <button className="text-sm lg:text-base px-3 py-2 border border-[#b03a3a] text-[#b03a3a] rounded hover:bg-[#b03a3a] hover:text-white transition-colors duration-300 cursor-pointer">
                        Ver todos los projectos
                    </button>

                </Link>

            </motion.div>

        </div>
    )
}
