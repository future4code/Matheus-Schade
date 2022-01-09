import { User } from "../model/user";
import { Authenticator } from "../services/authenticator";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public async createUser(user: User): Promise<void> {
        try {

            await BaseDatabase.connection(`labook_users`).insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                // role: user.getRole()
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserById(id: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection(`labook_users`).select(`*`).where({ id })

            return user[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection(`labook_users`).select(`*`).where({ email })
            return user[0]

        } catch (error: any) {
            console.log("findUserByEmail:::::::", error.sqlMessage || error.message)
            throw new Error("E-mail ou senha incorretos")
        }
    }

    public async getAllUsers(): Promise<User[]> {
        try {

            const users = await BaseDatabase.connection(`labook_users`).select(`id`, `name`, `email`, `role`)
            return users[0]

        } catch (error: any) {
            console.log(error.sqlMessage || error.message)
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getUserId (token: string): Promise<string> {
        try {
            
            if (!token) {
                throw new Error("Informe um token válido!")
            }

            const tokenData = new Authenticator().getTokenData(token)

            if (!tokenData) { throw new Error("Insira um token válido!") }

            const userId = tokenData.id as string

            return userId

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}