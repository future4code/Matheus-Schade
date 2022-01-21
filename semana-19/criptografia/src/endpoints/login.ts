import { Request, Response } from "express"
import { getUserByEmail } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function login(req: Request, res: Response): Promise<void> {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Os campos 'email' e 'password' são obrigatórios!")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            res.statusCode = 422
            throw new Error("Formato de e-mail inválido. O e-mail deve conter '@' e '.com'");
        }

        const user = await getUserByEmail(email.toLowerCase())

        const passwordIsCorrect = new HashManager().compareHash(password, user?.password)

        if (!user || !passwordIsCorrect) {
            res.statusCode = 401
            throw new Error("Senha inválida!")
        }

        const token = new Authenticator().generateToken({ id: user.id, role: user.role  })

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