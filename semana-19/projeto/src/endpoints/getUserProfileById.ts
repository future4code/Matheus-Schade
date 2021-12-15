import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"


export const getUserProfileById = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization
        const id: string = req.params.id

        if (!token || !id) {
            res.statusCode = 422
            throw new Error("Informe um 'token' e um 'id' válidos!")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 403
            throw new Error("Não autorizado!")
        }

        const user = await new UserDatabase().getUserById(id)

        if (!user) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado!")
        }

        res.status(200).send(user)

    } catch (error) {

        if (res.statusCode === 200) { res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!") }
        else { res.send(error.sqlMessage || error.message) }

    }
}