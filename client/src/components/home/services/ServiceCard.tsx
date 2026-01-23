import { accordionMotion } from "../../../helpers/animations"
import type { TService } from "../../../types/services.types"
import { AnimatePresence, motion } from 'framer-motion'

type TServiceCardProps = {
    service: TService,
    isActive: boolean,
    onClick: () => void
}

export const ServiceCard = ({ service, isActive, onClick }: TServiceCardProps) => {

    return (
        <div
            className='contenedor-dato bg-[#272727] border-t-4 border-[#b03a3a] shadow-md p-6 rounded-lg flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer'
            onClick={onClick}
        >
            <h3 className='font-semibold text-lg lg:text-xl pb-3 text-[#b03a3a] flex items-center gap-3'>
                <span className="bg-[#932f2f] text-[#dde1e9] rounded-full p-1.5 flex justify-center items-center">
                    <service.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </span>
                {service.tittle}
            </h3>

            <div className='contenido-dato mb-4'>
                <p className="text-[#dde1e9] text-sm lg:text-base font-light leading-relaxed">
                    {service.description}
                </p>
            </div>

            {/* Información adicional que se muestra al hacer clic */}
            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div {...accordionMotion} className="detalles-adicionales mt-4 pt-4 border-t border-gray-600">
                        <h4 className="text-[#dde1e9] font-semibold mb-2">Lo que incluye:</h4>
                        <ul className="list-disc list-inside text-[#dde1e9] text-sm space-y-1 mb-4">
                            {service.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>

                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}
