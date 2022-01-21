import { JwtPayload, sign, verify } from "jsonwebtoken"
import { config } from 'dotenv'
import { AuthenticationData } from "../model/AuthenticationData"

config()

export class Authenticator {

   generateToken = (payload: AuthenticationData) => {
      const token = sign(payload, process.env.JWT_SECRET as string,
         {
            expiresIn: "168h"
         })

      return token;
   }

   getTokenData = (token: string): AuthenticationData | null => {
      try {
         const tokenData = verify(token, process.env.JWT_SECRET!) as JwtPayload

         return {
            id: tokenData.id,
            // role: tokenData.role
         }
      } catch (error) {
         console.log(error)
         return null
      }
   }

}