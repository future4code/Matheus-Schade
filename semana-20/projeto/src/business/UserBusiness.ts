import { UserDatabase } from "../data/UserDatabase";
import { User, login } from "../model/user";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";


export class UserBusiness {
    signupBusiness = async (user: User): Promise<string | undefined> => {
        try {
            if (!user.name || !user.email || !user.password) {
                throw new Error("Você deve preencher os campos 'nome', 'email' e 'password' ")
            }

            if (!user.email.includes("@") || !user.email.includes(".com")) {
                throw new Error('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
            }

            if (!user.password || user.password.length < 6) {
                throw new Error("Senha inválida. Sua senha deve ter pelo menos 6 caracteres!");
            }

            const userDatabase = await new UserDatabase().findUserByEmail(user.email.toLowerCase().trim()) //verifica se o email já existe no banco de dados;

            if (userDatabase) { // se email já existe no banco de dados;
                throw new Error('E-mail já cadastrado no banco de dados!');
            }

            const id: string = new IdGenerator().generate()
            const cypherPassword: string = new HashManager().createHash(user.password) // adicionar para criar o hash da senha

            await new UserDatabase().createUser({ id, name: user.name, email: user.email.toLowerCase().trim(), password: cypherPassword })

            const token: string = new Authenticator().generateToken({ id })

            return token


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    loginBusiness = async (login: login): Promise<string | undefined> => {

        try {

            if (!login.email || !login.password) {
                throw new Error("Você deve preencher os campos 'email' e 'password' ")
            }

            if (!login.email.includes("@") || !login.email.includes(".com")) {
                throw new Error('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
            }

            const userDatabase = await new UserDatabase().findUserByEmail(login.email.toLowerCase().trim())

            if (!userDatabase) {
                throw new Error("Usuário não encontrado!")
            }

            const passwordIsCorrect = await new HashManager().compareHash(login.password, userDatabase?.password)

            if (!passwordIsCorrect) {
                throw new Error("Senha inválida!")
            }

            const token: string = new Authenticator().generateToken({ id: userDatabase.id })

            return token

        } catch (error: any) {
            console.log("loginBusiness", error.sqlMessage || error.message)
            throw new Error(error.sqlMessage || error.message)
        }

    }
}