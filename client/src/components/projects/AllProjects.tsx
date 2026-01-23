import { useProjectStore } from "../../store/projectStore"
import { motion } from 'framer-motion'
import { slideInBottom, slideInItemInView } from "../../helpers/animations"
import { ProjectCard } from "./project-card/ProjectCard"

export const AllProjects = () => {
    const { projects } = useProjectStore()

    return (
        <div className="flex flex-col gap-6 mx-auto max-w-7xl px-4">
            
            <motion.div {...slideInBottom}>
                <h2 className='font-bold text-3xl lg:text-4xl relative inline-block mb-6'>
                    Todos Los Proyectos
                    <span className="absolute left-0 -bottom-1.5 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                </h2>
            </motion.div>

            <motion.div {...slideInItemInView} className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {projects.slice(1).map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}

            </motion.div>


        </div>
    )
}
