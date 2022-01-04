import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness/UserBusiness"

export const loginController = async (req: Request, res: Response): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await new UserBusiness().loginBusiness({email, password})

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}