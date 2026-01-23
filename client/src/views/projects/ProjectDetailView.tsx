import { useParams } from "react-router-dom"
import { ProjectDetails } from "../../components/projects/ProjectDetails"
import { useProjectStore } from "../../store/projectStore"
import { useEffect } from "react"
import { Spinner } from "../../components/ui/Spinner"
import { Contact } from "../../components/home/contact/Contact"
import { InitialsProjects } from "../../components/projects/InitialsProjects"

export const ProjectDetailView = () => {
  const { slug } = useParams<{ slug: string }>()
  const { getProjects, getOneProject, projects, projectSelected } = useProjectStore()

  useEffect(() => {
    if (!projects.length) {
      getProjects()
    }
  }, [projects.length, getProjects])

  useEffect(() => {
    if (!slug) return

    getOneProject(slug)
  }, [slug, getOneProject])

  if (!projectSelected || !projects.length) {
    return <Spinner />
  }

  return (
    <div className="background-light">
      <section id="detalles-proyecto" className="pt-36 lg:pt-44 pb-18 lg:pb-24 w-full">
        <ProjectDetails />
      </section>

      <section id="contacto" className="py-18 lg:py-24 w-full background-dark">
        <Contact />
      </section>

      <section id="proyectos-iniciales" className="py-18 lg:py-24 w-full ">
        <InitialsProjects projectSelected={projectSelected._id}/>
      </section>


    </div>
  )
}
