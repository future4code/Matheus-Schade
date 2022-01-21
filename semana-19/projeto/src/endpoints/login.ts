import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(422).send("Você deve preencher os campos 'email' e 'password' ")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            res.statusCode = 422
            throw new Error('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
        }
        const userDatabase = await new UserDatabase().findUserByEmail(email.toLowerCase())
        
        if (!userDatabase) {
            res.statusCode = 401
            throw new Error("E-mail inválido!")
        }

        const passwordIsCorrect = await new HashManager().compareHash(password, userDatabase?.getPassword())

        if (!passwordIsCorrect) {
            res.statusCode = 401
            throw new Error("Senha inválida!")
        }

        const access_token = new Authenticator().generateToken({ id: userDatabase.getId() })

        res.status(200).send({ message: "Login realizado com sucesso!", access_token })

    } catch (error) {

        if (res.statusCode === 200) { res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!") }
        else { res.send(error.sqlMessage || error.message) }
    }
}