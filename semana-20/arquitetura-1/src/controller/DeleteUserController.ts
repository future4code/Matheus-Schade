import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness/UserBusiness"

export const DeleteUserController = async (req: Request, res: Response): Promise<void> => {
    try {

        const token = req.headers.authorization
        const id = req.params.id

        await new UserBusiness().deleteUserBusiness({ token, id })

        res.status(200).send({ message: "Usuário deletado com sucesso" });

    } catch (error) {
        res.status(400).send(error.message)
    }
}