import { motion } from 'framer-motion'
import { slideInBottomInView, slideInLeftInView, slideInRightInView } from '../../../helpers/animations'
import { ContactForm } from './ContactForm'

export const Contact = () => {
    return (
        <div className='flex flex-col gap-6 mx-auto max-w-7xl px-4'>

            <motion.div {...slideInBottomInView}>
                <h2 className='font-bold text-3xl lg:text-4xl relative inline-block text-[#dde1e9] mb-6'>
                    Trabajemos Juntos
                    <span className="absolute left-0 -bottom-1.5 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                </h2>
            </motion.div>

            <div className='flex flex-col lg:flex-row gap-10 items-center'>
                <motion.div {...slideInLeftInView()} className='flex flex-col w-full lg:w-1/2'>
                    <ContactForm />
                </motion.div>

                <motion.div {...slideInRightInView()} className='flex flex-col w-full lg:w-1/2 gap-4 text-[#dde1e9]'>

                    <h3 className='font-semibold text-lg lg:text-xl '>
                        ¿Tienes un proyecto o una idea?
                    </h3>
                    <p className='text-sm lg:text-base font-light leading-relaxed'>
                        Ya seas una empresa, una startup o un particular con una idea, estoy listo para ayudarte a convertirla en una solución tecnológica real.
                        Me especializo en desarrollo web moderno, diseño de interfaces intuitivas y construcción de plataformas escalables.
                    </p>

                    <p className='text-sm lg:text-base font-light leading-relaxed'>
                        Estoy abierto a colaborar con agencias, equipos de desarrollo, emprendedores y empresas de cualquier tamaño. No dudes en enviarme un mensaje con tu propuesta, o simplemente saludar.
                    </p>

                    <div className='text-sm lg:text-base'>
                        <p className='mb-1'><span className='font-semibold text-[#b03a3a]'>Ubicación:</span> Zapopan, Jalisco</p>
                        <p className=' mb-1'><span className='font-semibold text-[#b03a3a]'>Modalidad:</span> Remoto, híbrido o presencial (dependiendo del proyecto)</p>
                        <p><span className='font-semibold text-[#b03a3a]'>Colaboraciones:</span> Freelance, contratos por proyecto, asociaciones tecnológicas</p>
                    </div>

                    <div className='redes-sociales flex gap-5 pt-2 text-xl lg:text-2xl'>
                        <a href='https://www.linkedin.com/in/francisco-gabriel-inda-lomeli-3ab9b0323' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-linkedin'></i></a>
                        <a href='https://github.com/chinnnoo06' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-github'></i></a>
                        <a href='https://wa.me/523318237277?text=Hola%20Francisco%2C%20quiero%20más%20información.' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-whatsapp'></i></a>
                        <a href='mailto:franciscoinda@codemx.net' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fas fa-envelope'></i></a>
                    </div>
                </motion.div>

            </div>

        </div>
    )
}
