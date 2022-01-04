import { UserDatabase } from "../../data/UserDatabase";
import { User } from "../../entities/User";
import { Authenticator } from "../../services/authenticator";
import { HashManager } from "../../services/hashManager";
import { IdGenerator } from "../../services/idGenerator";
import { user, login } from "../../types/user"

export class UserBusiness {
    signupBusiness = async (user: user): Promise<string> => {
        try {
            if (!user.name || !user.email || !user.password || !user.role) {
                throw new Error("Você deve preencher os campos 'nome', 'email', 'password' e 'role' ")
            }

            if (!user.email.includes("@") || !user.email.includes(".com")) {
                throw new Error('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
            }

            if (!user.password || user.password.length < 6) {
                throw new Error("Senha inválida. Sua senha deve ter pelo menos 6 caracteres!");
            }

            const userDatabase = await new UserDatabase().findUserByEmail(user.email) //verifica se o email já existe no banco de dados;

            if (userDatabase) { // se email já existe no banco de dados;
                throw new Error('E-mail já cadastrado no banco de dados!');
            }

            const id: string = new IdGenerator().generatedId()
            const cypherPassword: string = new HashManager().createHash(user.password) // adicionar para criar o hash da senha

            const newUser = new User(id, user.name, user.email, cypherPassword, user.role)
            await new UserDatabase().createUser(newUser)
            const token = new Authenticator().generateToken({ id, role: user.role })

            return token
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    loginBusiness = async (login: login): Promise<string> => {
        try {
            if (!login.email || !login.password) {
                throw new Error("Você deve preencher os campos 'email' e 'password' ")
            }

            if (!login.email.includes("@") || !login.email.includes(".com")) {
                throw new Error('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
            }

            const userDatabase = await new UserDatabase().findUserByEmail(login.email.toLowerCase())

            if (userDatabase === undefined) {
                throw new Error("Usuário ou senha inválidos!")
            }

            const passwordIsCorrect = await new HashManager().compareHash(login.password, userDatabase?.getPassword())

            if (!passwordIsCorrect) {
                throw new Error("Usuário ou senha inválidos!")
            }

            const token = new Authenticator().generateToken({ id: userDatabase.getId(), role: userDatabase.getRole() })

            return token
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}