import imagen from '../../assets/hero-image.jpg'
import { motion } from 'framer-motion'
import { slideInLeft, slideInRight } from '../../helpers/animations'
import { TypewriterEffect } from '../ui/typewritter-effect';
import { words } from '../../data/word';
import { Global } from '../../helpers/config/env';

export const Home = () => {

  const handleDownload = async () => {
    window.open(`${Global.url}/api/contact/downloadCV`, "_self");
  }

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-10 mx-auto max-w-7xl w-full px-4'>

      <motion.div {...slideInLeft()} className='flex flex-col'>
        <div className='contenedor-texto'>
          <h2 className='font-semibold text-lg lg:text-xl'>
            Hola, soy Francisco Inda
          </h2>

          <TypewriterEffect words={words} />

          <span className='text-sm lg:text-base font-light leading-relaxed mt-2 block'>
            Me apasiona transformar ideas en soluciones digitales que realmente importan. A lo largo de mi formación,
            he adquirido habilidades sólidas en desarrollo web y software, y las he puesto en práctica creando proyectos
            modernos, funcionales y centrados en la experiencia del usuario.
          </span>

          <span className='text-sm lg:text-base font-light leading-relaxed mt-2 block'>
            Mi objetivo es crear tecnología que inspire, resuelva problemas reales y genere valor. Soy una persona
            autodidacta, curiosa por naturaleza y con una fuerte orientación al detalle. Siempre busco mejorar y
            aprender nuevas herramientas que me permitan llevar cada proyecto al siguiente nivel.
          </span>
        </div>

        <div className='contenedor-botones flex flex-wrap gap-4 pt-4'>

          <button 
          onClick={handleDownload}
          className='text-sm lg:text-base px-3 py-2 bg-[#b03a3a] text-white rounded hover:bg-[#932f2f] transition-colors duration-300 cursor-pointer' >
            Descargar CV
          </button>

          <a
            href="#contacto"
            className="text-sm lg:text-base px-3 py-2 border border-[#b03a3a] text-[#b03a3a] rounded hover:bg-[#b03a3a] hover:text-white transition-colors duration-300"
          >
            Contactar
          </a>
        </div>

        <div className='redes-sociales flex gap-4 pt-4 text-xl lg:text-2xl'>
          <a href='https://www.linkedin.com/in/francisco-gabriel-inda-lomeli-3ab9b0323' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-linkedin'></i></a>
          <a href='https://github.com/chinnnoo06' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-github'></i></a>
          <a href='https://wa.me/523318237277?text=Hola%20Francisco%2C%20quiero%20más%20información.' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-whatsapp'></i></a>
          <a href='mailto:franciscoinda@codemx.net' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fas fa-envelope'></i></a>
        </div>
      </motion.div>

      <motion.div {...slideInRight()}>
        <div className='relative rounded-full overflow-hidden w-75 h-75 lg:w-80 lg:h-80 border-2 border-[#b03a3a] shadow-lg'>
          <img src={imagen} alt='foto de francisco inda' className='object-cover w-full h-full' />
        </div>
      </motion.div>
    </div>
  )
}
