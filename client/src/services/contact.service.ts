import { Global } from "../helpers/config/env";
import type { TContact } from "../types/contact.types";
import axios, { AxiosError } from "axios";

export const sendContactEmail = async (dataEmail: TContact) => {
    const url = `${Global.url}/api/contact/sendEmail`

    try {
        const data = await axios.post(url, dataEmail);

        console.log(data)
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(
                error.response?.data?.mensaje || "Error al enviar mensaje"
            );
        }

        throw new Error("Error inesperado");
    }
}
