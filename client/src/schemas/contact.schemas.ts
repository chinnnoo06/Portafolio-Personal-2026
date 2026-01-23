import z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "El tema es obligatorio"),
  message: z.string().min(1, "El mensaje es obligatorio").max(450, "Máximo 250 caracteres"),
});