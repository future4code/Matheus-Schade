import { Request, Response } from "express"
import { FollowDatabase } from "../data/FollowDatabase"
import { RecipeFeed } from "../entities/RecipeFeed"
import { Authenticator } from "../services/Authenticator"


export const getFeed = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization

        if (!token) {
            res.statusCode = 422
            throw new Error("Informe um token válido!")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 403
            throw new Error("Não autorizado!")
        }

        const feed = await new FollowDatabase().getFeed(tokenData.id)

        if (!feed) {
            res.statusCode = 403
            throw new Error("Nenhuma receita a exibir!")
        }

        res.status(201).send(feed)

    } catch (error) {

        if (res.statusCode === 200) { res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!") }
        else { res.send(error.sqlMessage || error.message) }

    }
}
