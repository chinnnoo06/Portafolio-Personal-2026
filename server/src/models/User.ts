import { Schema, model } from "mongoose"
import { TUser } from "../types/user.types"

const UserSchema = new Schema<TUser>(
    {
        userName: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
)

export const User = model<TUser>("User", UserSchema, "users");
