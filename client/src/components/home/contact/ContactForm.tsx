import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import type { TContact } from "../../../types/contact.types";
import { ContactSchema } from "../../../schemas/contact.schemas";
import { inputStyle } from "../../../helpers/styles";
import { sendContactEmail } from "../../../services/contact.service";

export const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TContact>({
        resolver: zodResolver(ContactSchema)
    })

    const onSubmit = async (data: TContact) => {
        try {
            await sendContactEmail(data)
            reset()
            toast.success('Mensaje enviado correctamente', {
                className: 'toast-success',
                toastId: 'emailContact',
            });
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Error inesperado"
            );
        }
    }

    return (
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group ">
                <label htmlFor="name" className="block font-semibold text-[#dde1e9] mb-2 text-sm lg:text-base ">
                    Nombre
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Ej. Francsico Inda"
                    {...register("name")}
                    className={inputStyle}
                />

                {errors.name && (
                    <div className="mt-1"><span className="text-sm text-[#b03a3a]">{errors.name?.message}</span></div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="email" className="block font-semibold text-[#dde1e9] mb-2 text-sm lg:text-base ">
                    Correo Electrónico
                </label>
                <input
                    type="text"
                    id="email"
                    placeholder="Ej. correo@ejemplo.com"
                    {...register("email")}
                    className={inputStyle}
                />

                {errors.email && (
                    <div className="mt-1"><span className="text-sm text-[#b03a3a]">{errors.email?.message}</span></div>
                )}

            </div>


            <div className="form-group">
                <label htmlFor="Subject" className="block font-semibold text-[#dde1e9] mb-2 text-sm lg:text-base ">
                    Tema
                </label>
                <input
                    type="text"
                    id="Subject"
                    placeholder="Ej. Cotización Proyecto"
                    {...register("subject")}
                    className={inputStyle}
                />

                {errors.subject && (
                    <div className="mt-1"><span className="text-sm text-[#b03a3a]">{errors.subject?.message}</span></div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="Message" className="block font-semibold text-[#dde1e9] mb-2 text-sm lg:text-base ">
                    Mensaje
                </label>
                <textarea

                    maxLength={450}
                    id="Message"
                    placeholder="Escribe tu mensaje"
                    {...register("message")}
                    className={inputStyle}
                />

                {errors.message && (
                    <div className="mt-1"><span className="text-sm text-[#b03a3a]">{errors.message?.message}</span></div>
                )}
            </div>

   
            <button
                className='text-sm lg:text-base px-3 py-2 bg-[#b03a3a] text-white rounded hover:bg-[#932f2f] transition-colors duration-300 cursor-pointer'
                type="submit">
                Mandar Mensaje
            </button>
        </form>
    )
}
