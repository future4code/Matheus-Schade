import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness/UserBusiness"

export const GetAllController = async (req: Request, res: Response): Promise<void> => {
   try {
   
    const token = req.headers.authorization
    const users = await new UserBusiness().getAllBusiness(token)

    res.status(200).send(users)

   } catch (error) {
      res.status(400).send(error.message)
   }
}