import { Request, Response } from "express"
import { getUserByEmail } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

// EXERCÍCIO 6/ a)
export default async function login(req: Request, res: Response): Promise<void> {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Os campos 'email' e 'password' são obrigatórios!")
        }

        // EXERCÍCIO 6/ b)
        if (!email.includes("@") || !email.includes(".com")) {
            res.statusCode = 422
            throw new Error("Formato de e-mail inválido. O e-mail deve conter '@' e '.com'");
        }

        const user = await getUserByEmail(email.toLowerCase())

        if (!user || user.password !== password) {
            res.statusCode = 401
            throw new Error("Senha inválida!")
        }

        const token = new Authenticator().generateToken({ id: user.id })

        res.status(200).send({ token })

    } catch (error) {

        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}