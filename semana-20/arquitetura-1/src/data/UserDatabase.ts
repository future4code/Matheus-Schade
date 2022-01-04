import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public async createUser(user: User): Promise<void> {
        try {

            await BaseDatabase.connection(`User_Arq`).insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserById(id: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection(`User_Arq`).select(`*`).where({ id })

            return user[0] && User.toUserModel(user[0])

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection(`User_Arq`).select(`*`).where({ email })
            return user[0] && User.toUserModel(user[0])

        } catch (error) {
            console.log("findUserByEmail:::::::", error.sqlMessage || error.message)
            throw new Error("E-mail ou senha incorretos")
        }
    }

    public async getAllUsers(): Promise<User[]> {
        try {

            const users = await BaseDatabase.connection(`User_Arq`).select(`id`, `name`, `email`, `role`)
            return users.map((user) => User.toUserModel(user))
            
        } catch (error) {
            console.log(error.sqlMessage || error.message)
            throw new Error(error.sqlMessage || error.message)
        }
    }
}