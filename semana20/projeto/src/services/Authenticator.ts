import * as jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { AuthenticationD } from '../type';

dotenv.config();

export class Authenticator {
    generateToken(
        payload: AuthenticationD
    ): string {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
    };

    getTokenData(
        token: string
    ): AuthenticationD {
        return jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationD;
    }
}