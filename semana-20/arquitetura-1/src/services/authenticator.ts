import { JwtPayload, sign, verify } from "jsonwebtoken"
import dotenv from 'dotenv'
import { USER_ROLES } from "../types/user"

dotenv.config()

export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}

export class Authenticator {

    generateToken = (payload: AuthenticationData) => {
        const token = sign(payload, process.env.JWT_SECRET)

        return token;
    }

    getTokenData = (token: string): AuthenticationData | null => {
        try {
            const tokenData = verify(token, process.env.JWT_SECRET) as JwtPayload

            return {
                id: tokenData.id,
                role: tokenData.role
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

}

