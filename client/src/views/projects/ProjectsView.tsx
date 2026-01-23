import { useEffect } from "react"
import { MainProject } from "../../components/projects/MainProject"
import { Spinner } from "../../components/ui/Spinner"
import { useProjectStore } from "../../store/projectStore"
import { AllProjects } from "../../components/projects/AllProjects"
import { Contact } from "../../components/home/contact/Contact"

export const ProjectsView = () => {
    const { projects, getProjects } = useProjectStore()

    useEffect(() => {
        if (!projects.length) {
            getProjects()
        }
    }, [projects.length, getProjects])

    if (!projects.length) {
        return <Spinner />
    }

    return (
        <div className="background-light">
            <section id="proyecto-principal" className="pt-36 lg:pt-44 pb-18 lg:pb-24 w-full ">
                <MainProject />
            </section>

            <section id="contacto" className="py-18 lg:py-24 w-full background-dark">
                <Contact />
            </section>

            <section id="todos-proyectos" className="py-18 lg:py-24 w-full ">
                <AllProjects />
            </section>


        </div>
    )
}
