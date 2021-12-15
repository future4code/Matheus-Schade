import { JwtPayload, sign, verify } from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export interface AuthenticationData {
    id: string
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
                id: tokenData.id
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

}

