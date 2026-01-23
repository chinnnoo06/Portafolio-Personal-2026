import mongoose from 'mongoose'
import colors from 'colors'

export const connectDB = async () => {

    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/portafolio_web");
        const url = `${connection.connection.host}: ${connection.connection.port}`
        console.log(colors.cyan.bold(`Conectado correctamente a la base de datos portafolio_web en: ${url}`));
    } catch (error) {
        if (error instanceof Error) {
            console.log(colors.red.bold(error.message));
        } else {
            console.log(colors.red.bold("Error desconocido al conectar DB"));
        }
        throw new Error("No se ha podido conectar a la base de datos");
    }

}