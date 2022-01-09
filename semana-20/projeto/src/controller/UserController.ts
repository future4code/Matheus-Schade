import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    signupController = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body

            const token = await new UserBusiness().signupBusiness({ name, email, password })

            res.status(201).send({ message: "Usuário criado com sucesso!", token })

            return token


        } catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    }

    loginController = async (req: Request, res: Response) => {
        try {

            const { email, password } = req.body

            const token = await new UserBusiness().loginBusiness({ email, password })

            res.status(200).send({ message: "Login realizado com sucesso!", token })

        } catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    }
}