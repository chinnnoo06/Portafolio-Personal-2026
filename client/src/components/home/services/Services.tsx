import { useState } from "react";
import { services } from "../../../data/Services"
import { ServiceCard } from "./ServiceCard"
import { motion } from 'framer-motion'
import { slideInBottomInView, slideInLeftInView, slideInRightInView } from "../../../helpers/animations";

export const Services = () => {
    const [activeService, setActiveService] = useState<null | number>(null);

    return (
        <div className='flex flex-col gap-6 mx-auto max-w-7xl px-4'>
            <motion.div {...slideInBottomInView}>
                <h2 className='font-bold text-3xl lg:text-4xl relative inline-block  mb-6'>
                    Servicios
                    <span className="absolute left-0 -bottom-1.5 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                </h2>
            </motion.div>

            <motion.div {...slideInLeftInView()} className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        isActive={activeService === index}
                        onClick={() => setActiveService(activeService === index ? null : index)}
                    />
                ))}
            </motion.div>

            <motion.div {...slideInRightInView()} className="contenedor-dato flex flex-col items-center justify-center bg-[#272727] shadow-md p-4 h-auto rounded border-t-4 border-[#b03a3a]">
                <h3 className='font-semibold text-lg md:text-xl pb-2 text-[#b03a3a] relative inline-block mb-2'>
                    Metodología de Trabajo
                    <span className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="etapa text-center p-4">
                        <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-sm lg:text-base ">1</div>
                        <h3 className="font-semibold text-[#dde1e9] text-sm lg:text-base mb-2">Consulta</h3>
                        <p className="text-sm md:text-base font-light leading-relaxed text-[#dde1e9]">Analizo las necesidades y objetivos</p>
                    </div>
                    <div className="etapa text-center p-4">
                        <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-sm lg:text-base ">2</div>
                        <h3 className="font-semibold text-[#dde1e9] text-sm lg:text-base mb-2">Propuesta</h3>
                        <p className="text-sm md:text-base font-light leading-relaxed text-[#dde1e9]">Tengo la capacidad de diseñar una solución a la medida</p>
                    </div>
                    <div className="etapa text-center p-4">
                        <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-sm lg:text-base ">3</div>
                        <h3 className="font-semibold text-[#dde1e9] text-sm lg:text-base mb-2">Desarrollo</h3>
                        <p className="text-sm md:text-base font-light leading-relaxed text-[#dde1e9]">Implemento en mis proyectos tecnologías modernas</p>
                    </div>
                    <div className="etapa text-center p-4">
                        <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-sm lg:text-base ">4</div>
                        <h3 className="font-semibold text-[#dde1e9] text-sm lg:text-base mb-2">Entrega</h3>
                        <p className="text-sm md:text-base font-light leading-relaxed text-[#dde1e9]">Cada proyecto asegura calidad y soporte continuo</p>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}
