import bcrypt from 'bcrypt'
import { HttpError } from "../helpers";
import { userRepository } from "../repositories/user.repository";
import { TUser } from "../types/user.types";

export const createUserService = async (data: TUser) => {
    const userExist = await userRepository.findByUserName(data.userName)

    if (userExist) throw new HttpError(409, "Este usuario ya esta registrado");

    const pwd = await bcrypt.hash(data.password, 10);

    await userRepository.create({...data, password: pwd})
}

export const loginService = async (data: TUser) => {
    const user = await userRepository.findByUserName(data.userName)

    if (!user) throw new HttpError(401, "Usuario o contraseña incorrectos");

    let pwd = bcrypt.compareSync(data.password, user.password)

    if (!pwd) throw new HttpError(401, "Usuario o contraseña incorrectos");

    return user._id
};
