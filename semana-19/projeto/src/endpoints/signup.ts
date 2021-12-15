import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../entities/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const signup = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(422).send("Você deve preencher os campos 'nome', 'email' e 'password' ")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            res.statusCode = 422
            throw new Error('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
        }

        if (password.length < 6) {
            res.statusCode = 401
            throw new Error("Senha inválida. Sua senha deve ter pelo menos 6 caracteres!");
        }

        const userDatabase = await new UserDatabase().findUserByEmail(email)

        if (userDatabase) {
            res.statusCode = 409
            throw new Error('E-mail já cadastrado no banco de dados!');
        }

        const id: string = new IdGenerator().generatedId()
        const cypherPassword: string = new HashManager().createHash(password)

        const newUser = new User(id, name, email, cypherPassword)
        await new UserDatabase().createUser(newUser)
        const access_token = new Authenticator().generateToken({ id })

        res.status(201).send({ message: "Usuário criado com sucesso!", access_token })

    } catch (error) {

        if (res.statusCode === 200) { res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!") }
        else { res.send(error.sqlMessage || error.message) }
    }
}