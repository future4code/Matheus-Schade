import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export const getUserProfile = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization

        if (!token) {
            res.statusCode = 422
            throw new Error("Informe um token válido!")
        }

        const tokenData = new Authenticator().getTokenData(token)

        const users = await new UserDatabase().getUserById(tokenData.id)

        res.status(200).send(users)

    } catch (error) {

        if (res.statusCode === 200) { res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!") }
        else { res.send(error.sqlMessage || error.message) }

    }
}