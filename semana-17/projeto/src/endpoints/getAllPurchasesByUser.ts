import { Request, Response } from "express"
import { connection } from "../data/connection";
import { purchase } from "../types";
import { getUsers } from "../services/getUsers"

export const getAllPurchasesByUser = async (req: Request, res: Response) => {
   try {

      const user_id = (req.params.user_id).toString()
      const user = await getUsers(user_id)

      if (!isNaN(user)) {
         const result = await connection("labecommerce_purchases")
            .select("*")
            .where({ user_id })

         if (!result) {
            res.statusCode = 404
            throw new Error(`Nenhuma compra foi encontrada para esse usuário!`)
         }
         const purchases = result && result.map(tuPurchase)
         res.status(200).send(purchases[0])
      } else {
         res.statusCode = 404
         throw new Error(`Nenhuma compra foi encontrada para esse usuário!`)
      }

   } catch (error) {

      if (res.statusCode === 200)
         res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!")
      else
         res.send(error.sqlMessage || error.message)
   }

};

const tuPurchase = (input: any): purchase => {
   return {
      id: input.id,
      user_id: input.user_id,
      product_id: input.product_id,
      quantity: input.quantity,
      total_price: input.total_price,
   }
}

export default getAllPurchasesByUser