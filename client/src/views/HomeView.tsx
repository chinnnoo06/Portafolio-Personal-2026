import { AboutMe } from "../components/home/aboutmy/AboutMe"
import { Contact } from "../components/home/contact/Contact"
import { Home } from "../components/home/Home"
import { InitialsProjects } from "../components/projects/InitialsProjects"
import { Services } from "../components/home/services/Services"

export const HomeView = () => {

  return (
    <>
      <section id="inicio" className="pt-36 lg:pt-44 pb-18 lg:pb-24 w-full background-light">
        <Home />
      </section>

      <section id="sobremi" className="py-18 lg:py-24 w-full background-dark">
        <AboutMe />
      </section>

      <section id="servicios" className="py-18 lg:py-24 w-full background-light">
        <Services />
      </section>

      <section id="contacto" className="py-18 lg:py-24 w-full background-dark">
        <Contact />
      </section>

      <section id="proyectos" className="py-18 lg:py-24 w-full background-light">
        <InitialsProjects />
      </section>

    </>
  )
}
