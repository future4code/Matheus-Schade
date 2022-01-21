import { Request, Response } from "express"
import { FollowDatabase } from "../data/FollowDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { Unfollow } from "../entities/Unfollow"
import { Authenticator } from "../services/Authenticator"

export const unfollowUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization

        if (!token) {
            res.statusCode = 422
            throw new Error("Informe um token válido!")
        }

        const { userToUnfollowId } = req.body
        const user = await new UserDatabase().getUserById(userToUnfollowId)

        if (!userToUnfollowId || !user) {
            res.statusCode = 422
            throw new Error("Informe um 'userToFollowId' válido para deixar de seguir!")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 403
            throw new Error("Não autorizado!")
        }

        const followHistory = await new FollowDatabase().getFollow(tokenData.id, userToUnfollowId)

        if (!followHistory) {
            res.statusCode = 403
            throw new Error("Você ainda não segue esse usuário!")
        }

        const unfollow = new Unfollow(tokenData.id, userToUnfollowId)
        await new FollowDatabase().unfollowUser(unfollow)
        res.status(201).send({ message: "Unfollowed successfully!"})

    } catch (error) {
        if (res.statusCode === 200) { res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!") }
        else { res.send(error.sqlMessage || error.message) }
    }
}
