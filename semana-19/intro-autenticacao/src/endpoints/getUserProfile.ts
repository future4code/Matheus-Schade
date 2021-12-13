import { Request, Response } from "express";
import { getData, getUserById } from "../data/UserDatabase"

export const getUserProfile = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization as string

        if (!token) {
            res.statusCode = 422
            throw new Error("Insira um token válido!")
        }

        const auth = getData(token)

        const userProfile = await getUserById(auth.id)

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