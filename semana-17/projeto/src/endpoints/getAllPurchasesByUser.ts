import { Request, Response } from "express"
import { connection } from "../data/connection";
import { user } from "../types";

export const getAllPurchasesByUser = async (req: Request, res: Response) => {
   try {

      const { user_id } = req.params

      const [result]: user[] = await connection("labecommerce_users")
         .where({ id: user_id })

      if (!result) {
         throw new Error("Usuário não encontrado(user_id)")
      }

      const data = await connection("labecommerce_purchases")
         .select(
            "labecommerce_purchases.id as purchase_id",
            "labecommerce_purchases.product_id",
            "labecommerce_products.name as product_name",
            "labecommerce_products.image_url",
            "labecommerce_products.price as product_price",
            "labecommerce_purchases.quantity",
            "labecommerce_purchases.total_price"
         )
         .innerJoin(
            "labecommerce_users", // JOIN
            "labecommerce_users.id", //ON = ESSE É IGUAL AO DE BAIXO
            "labecommerce_purchases.user_id" // ON
         )
         .innerJoin(
            "labecommerce_products", //JOIN
            "labecommerce_products.id", // ON = ESSE É IGUAL AO DE BAIXO
            "labecommerce_purchases.product_id" // ON
         )
         .where({ user_id })

      res.status(200).send({ purchases: data })

   } catch (error) {

      if (res.statusCode === 200)
         res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!")
      else
         res.send(error.sqlMessage || error.message)
   }
};

export default getAllPurchasesByUser