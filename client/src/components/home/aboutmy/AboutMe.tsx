import { TechologiesCart } from "./TechologiesCart"
import { CircleUser, IdCard, Flag } from "lucide-react"
import { motion } from 'framer-motion'
import { slideInBottomInView, slideInLeftInView, slideInRightInView } from "../../../helpers/animations"

export const AboutMe = () => {
    return (
        <div className='flex flex-col gap-6 mx-auto max-w-7xl px-4'>

            <motion.div {...slideInBottomInView}>
                <h2 className='font-bold text-3xl lg:text-4xl relative inline-block text-[#dde1e9] mb-6'>
                    Sobre Mí
                    <span className="absolute left-0 -bottom-1.5 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                </h2>
            </motion.div>


            <motion.div {...slideInLeftInView()} className='grid grid-col-1 lg:grid-cols-3 gap-6'>

                <div className='flex-1 flex flex-col bg-[#272727] border-t-4 border-[#b03a3a] shadow-md p-4 rounded'>
                    <h3 className='font-semibold text-lg lg:text-xl pb-2 text-[#b03a3a] flex items-center gap-2'>
                        <span className="bg-[#932f2f] text-[#dde1e9] rounded-full p-1.5 flex justify-center items-center">
                            <CircleUser className="w-4 h-4 lg:w-5 lg:h-5" />
                        </span>
                        ¿Quién soy?
                    </h3>

                    <div className='overflow-hidden'>
                        <span className='text-[#dde1e9] text-sm lg:text-base font-light leading-relaxed block'>
                            Soy un estudiante de 20 años de Ingeniería en Desarrollo de Software, cuento con un título
                            de tecnólogo en la carrera, altamente motivado por superarme día a día con sólidos conocimientos
                            en desarrollo y diseño web, así como en aplicaciones de escritorio y móviles.
                        </span>
                    </div>
                </div>

                <div className='flex-1 flex flex-col bg-[#272727] border-t-4 border-[#b03a3a] shadow-md p-4 rounded'>
                    <h3 className='font-semibold text-lg lg:text-xl pb-2 text-[#b03a3a] flex items-center gap-2'>
                        <span className="bg-[#932f2f] text-[#dde1e9] rounded-full p-1.5 flex justify-center items-center">
                            <IdCard className="w-4 h-4 lg:w-5 lg:h-5" />
                        </span>
                        Mi perfil
                    </h3>

                    <div className='overflow-hidden'>
                        <span className='text-[#dde1e9] text-sm lg:text-base font-light leading-relaxed block'>
                            Me caracterizo por aprender de forma autodidacta y adaptarme rápidamente a nuevos entornos
                            y tecnologías emergentes. Cuento con nivel de inglés B1 y actualmente estudio ingeniería.
                        </span>
                    </div>
                </div>

                <div className='flex-1 flex flex-col bg-[#272727] border-t-4 border-[#b03a3a] shadow-md p-4 rounded'>
                    <h3 className='font-semibold text-lg lg:text-xl pb-2 text-[#b03a3a] flex items-center gap-2'>
                        <span className="bg-[#932f2f] text-[#dde1e9] rounded-full p-1.5 flex justify-center items-center">
                            <Flag className="w-4 h-4 lg:w-5 lg:h-5" />
                        </span>
                        Mi objetivo
                    </h3>

                    <div className='overflow-hidden'>
                        <span className='text-[#dde1e9] text-sm lg:text-base font-light leading-relaxed block'>
                            Mi objetivo es seguir aprendiendo nuevas tecnologías y aplicar mis conocimientos actuales
                            para ganar experiencia tanto en Frontend como Backend. Me apasiona crear soluciones elegantes.
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Sección habilidades técnicas */}
            <motion.div {...slideInRightInView()} className='contenedor-dato flex flex-col items-center justify-center bg-[#272727] shadow-md p-4 h-auto rounded border-t-4 border-[#b03a3a]'>
                <h3 className='font-semibold text-lg lg:text-xl pb-2 text-[#b03a3a] relative inline-block'>
                    Mis habilidades Técnicas
                    <span className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                </h3>

                <TechologiesCart />

            </motion.div>
        </div>
    )
}
