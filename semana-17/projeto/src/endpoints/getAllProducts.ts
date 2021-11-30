import { Request, Response } from "express"
import { connection } from "../data/connection";
import { product } from "../types";

export const getAllProducts = async (req: Request, res: Response) => {
   try {

      const result = await connection("labecommerce_products")

      const products = result.map(toProduct)
      res.status(200).send(products)

   }  catch (error) {

    if (res.statusCode === 200)
    res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!")

    else
       res.send(error.message)
 }

};

const toProduct = (input: any): product => {
   return {
      id: input.id,
      name: input.name,
      price: input.price,
      imageUrl: input.image_url
   }
}

export default getAllProducts
