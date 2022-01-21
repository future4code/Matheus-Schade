import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { createNewUser } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator";
import { connection } from "../data/connection";
import { HashManager } from "../services/HashManager";

// EXERCÍCIO 4/ a)
export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { email, password, role } = req.body // role não é obrigatório, já que tenho valor default

        if (!email || !password || !role) {
            res.statusCode = 422
            throw new Error("Os campos 'email', 'role' e 'password' são obrigatórios")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            res.statusCode = 422
            throw new Error("Formato de e-mail inválido. O e-mail deve conter '@' e '.com'");
        }

        const [user] = await connection('User')
            .where({ email })

        if (user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado')
        }

        if (!password || password.length < 6) {
            res.statusCode = 401
            throw new Error("Senha inválida. Sua senha deve ter pelo menos 6 caracteres!");
        }

        const id: string = new generateId().generatedId();

        const cypherPassword: string = new HashManager().createHash(password) // adicionar para criar o hash da senha

        await createNewUser(id, email.toLowerCase(), cypherPassword, role.toLowerCase());

        const token = new Authenticator().generateToken({ id, role });

        res.status(200).send({
            token
        });

    } catch (error) {

        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}