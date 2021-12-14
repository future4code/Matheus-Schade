import { Request, Response } from "express";
import { getData, getUserById } from "../data/UserDatabase"
import { HashManager } from "../services/HashManager";
import { USER_ROLES } from "../types";

export const getUserProfile = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization as string
        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'password' ")
        }

        if (!token) {
            res.statusCode = 422
            throw new Error("Insira um token válido!")
        }

        const auth = getData(token)

        const userProfile = await getUserById(auth.id)

        const passwordIsCorrect = new HashManager().compareHash(password, userProfile?.password)

        if (!passwordIsCorrect && userProfile.role !== USER_ROLES.ADMIN) {
            res.statusCode = 403 // forbidden
            throw new Error("Sem autorização válida!")
        }

        res.status(200).send({
            id: userProfile.id,
            email: userProfile.email,
        })

    } catch (error) {

        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}