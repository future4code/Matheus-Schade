import { Request, Response } from "express"
import { connection } from "../data/connection";
import { product } from "../types";

export const getAllProducts = async (req: Request, res: Response) => {
   try {

      const query = req.query.query || "%" // % faz com que, quando nada for colocado na query, ele retorne todos os itens;
      const sort = req.query.sort === "name" ? "name" : "id"
      const order = req.query.order === "DESC" ? "DESC" : "ASC"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.size) || 10
      const offset = size * (page - 1)

      const result = await connection("labecommerce_products")
      .where("name", "LIKE", `%${query}%`)
      .orWhere("id", "LIKE", `%${query}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

      const products = result.map(toProduct)
      res.status(200).send(products)

   } catch (error) {

      if (res.statusCode === 200)
         res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!")

      else
         res.send(error.sqlMessage || error.message)
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
