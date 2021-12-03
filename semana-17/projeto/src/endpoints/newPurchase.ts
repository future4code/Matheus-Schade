import { Request, Response } from "express"
import { connection } from "../data/connection";
import { getProducts } from "../services/getProducts";
import { getUsers } from "../services/getUsers";

export const newPurchase = async (req: Request, res: Response) => {
   try {

      const { user_id, product_id, quantity } = req.body

      if (!product_id || !quantity || !user_id) {
         res.statusCode = 422
         throw new Error("Os campos 'product_id', 'quantity' e 'user_id' são obrigatórios | 'quantity' não pode ter valor igual a 0!")
      }

      const productPrice = await getProducts(product_id)
      const user = await getUsers(user_id)

      if (typeof productPrice === "number" && !isNaN(user)) {
         const total_price = productPrice && (productPrice * quantity).toFixed(2)

         await connection("labecommerce_purchases")
            .insert({
               id: Date.now().toString(),
               user_id,
               product_id,
               quantity,
               total_price
            })

         res.status(200).send(`Compra finalizada com sucesso! Valor total da compra: R$ ${total_price}`)
         
      } else {
         if (typeof productPrice === "number") {
            res.statusCode = 404
            throw new Error("O 'user_id' não existe em nosso banco de dados!")
         } else {
            res.statusCode = 404
            throw new Error("O 'product_id' não existe em nosso banco de dados!")
         }
      }

   } catch (error) {

      if (res.statusCode === 200)
         res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!")
      else
         res.send(error.sqlMessage || error.message)
   }
};

export default newPurchase
