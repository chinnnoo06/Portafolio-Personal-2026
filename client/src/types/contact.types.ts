import z from "zod";
import type { ContactSchema } from "../schemas/contact.schemas";

export type TContact = z.infer<typeof ContactSchema>