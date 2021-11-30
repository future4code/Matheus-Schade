import { Request, Response } from "express"
import { connection } from "../data/connection";

export const getAllPurchasesByUser = async (req: Request, res: Response) => {
   try {


   }  catch (error) {

    if (res.statusCode === 200)
       res.status(500).send("Um erro inesperado ocorreu =/")

    else
       res.send(error.message)
 }

};

export default getAllPurchasesByUser