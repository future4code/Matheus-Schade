import { Request, Response } from "express"
import { FollowDatabase } from "../data/FollowDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { Follow } from "../entities/Follow"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export const followUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization

        if (!token) {
            res.statusCode = 422
            throw new Error("Informe um token válido!")
        }

        const { userToFollowId } = req.body
        const user = await new UserDatabase().getUserById(userToFollowId)

        if (!userToFollowId || !user) {
            res.statusCode = 422
            throw new Error("Informe um 'userToFollowId' válido para seguir!")
        }

        const id: string = new IdGenerator().generatedId()
        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 403
            throw new Error("Não autorizado!")
        }

        const follow = new Follow(id, tokenData.id, userToFollowId)
        const history = await new FollowDatabase().getAllFollows(follow)

        if (history) {
            res.statusCode = 403
            throw new Error("Você já segue esse usuário!")
        }

        if (tokenData.id === userToFollowId) {
            res.statusCode = 403
            throw new Error("Você não pode seguir você mesmo!")
        }

        await new FollowDatabase().followUser(follow)

        res.status(201).send({ message: "Followed successfully!" })


    } catch (error) {

        if (res.statusCode === 200) { res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!") }
        else { res.send(error.sqlMessage || error.message) }

    }
}
