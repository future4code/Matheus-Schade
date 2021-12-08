import { Request, Response } from "express"
import { connection } from "../data/connection";
import { user } from "../types";
import { product } from "../types";
import { purchase } from "../types";

export const newPurchase = async (req: Request, res: Response) => {
   try {
      const { product_id, user_id, quantity } = req.body

      const [result]: user[] = await connection("labecommerce_users")
         .select()
         .where({ id: user_id })

      if (!result) {
         throw new Error("Usuário não encontrado(user_id)")
      }

      const [product]: product[] = await connection("labecommerce_products")
         .select()
         .where({ id: product_id })

      if (!product) {
         throw new Error("Produto não encontrado(product_id)")
      }

      const total_price = product.price * quantity

      console.log(result)
      console.log(product)
      console.log(total_price)

      const purchase: purchase = {
         id: Date.now().toString(),
         product_id,
         user_id,
         quantity,
         total_price
      }

      await connection("labecommerce_purchases").insert(purchase)

      res.status(200).send({ message: `Compra realizada com sucesso!` })

   } catch (error) {

      if (res.statusCode === 200)
         // res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!")
         res.send(error.sqlMessage || error.message)
      else
         res.send(error.sqlMessage || error.message)
   }

};

export default newPurchase
