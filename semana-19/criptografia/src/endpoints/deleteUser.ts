import { Request, Response } from "express";
import { deleteUserById, getData } from "../data/UserDatabase";
import { USER_ROLES } from "../types";

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const id = req.params.id;

        const auth = getData(token)

        if (!token || !id) {
            res.statusCode = 422
            throw new Error("Os campos 'token' e 'id' são obrigatórios")
        }

        if (auth.role !== "ADMIN" || auth.role !== USER_ROLES.ADMIN) {
            console.log("auth.role.toLowerCase()", auth.role.toLowerCase())
            res.statusCode = 403
            throw new Error("Sem autorização válida!")
        }

        await deleteUserById(id)

        res.status(200).send({ message: "Usuário deletado com sucesso!" })

    } catch (error) {

        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}