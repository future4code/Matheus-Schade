import { Request, Response } from "express";

// controller lida com req (requisições) e res (respostas)

import { UserBusiness } from "../business/UserBusiness/UserBusiness"

export const signupController = async (req: Request, res: Response) => {
   try {
    const { name, email, password, role } = req.body

      const token = await new UserBusiness().signupBusiness({ name, email, password, role })

      res.status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}