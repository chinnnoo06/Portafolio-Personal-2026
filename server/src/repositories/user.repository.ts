import { User } from "../models/User"
import { TUser } from "../types/user.types"

export const userRepository = {

    async findByUserName(userName: TUser['userName']) {
        return User.findOne({ userName })
    },

    async create(data: TUser) {
        return User.create(data)
    },

}
