import jwt from 'jwt-simple'
import moment from 'moment';
import { TMongoId } from '../types/mongo.types';
import { SECRET_KEY } from '../config/env';

export const createToken = (userId: TMongoId['_id']) => {
    const payload = {
        _id: userId,
        iat: moment().unix(),
        exp: moment().add(1, "days").unix()
    }

    return jwt.encode(payload, SECRET_KEY);
}

