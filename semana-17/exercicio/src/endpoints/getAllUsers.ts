import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {

      const name = req.query.name || "%" // % faz com que, quando nada for colocado na query, ele retorne todos os itens;
      const type = req.params.type || "%"
      // let sort = req.query.sort === "type" ? "type" : "name" // define qual coluna da tabela ele vai se basear;
      const sort: any = req.query.sort === "type" ? "type" : ("name" ? "name" : "email") // define qual coluna da tabela ele vai se basear;
      const order = req.query.order === "ASC" ? "DESC" : "DESC"
      const size = Number(req.query.size) || 5
      const page = Number(req.query.page) || 1
      const offset = size * (page - 1)

      // ordenar por name ou type, padrao email
      const results = await connection(`aula49_exercicio`)
         .where(`name`, `LIKE`, `%${name}%`)
         .where(`type`, `LIKE`, `%${type}%`)
         .orderBy(sort, order)
         .limit(size)
         .offset(offset)

      if (typeof name !== "string" || typeof type !== "string") {
         res.statusCode = 422
         throw new Error("Expected string")
      }

      if (isNaN(size) || isNaN(page)) {
         res.statusCode = 422 //unprocessable entity
         throw new Error(`Invalid value for age. Please send a number`)
       }

      if (!results.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      const recipes = results.map(toUser)
      res.status(200).send(results)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

const toUser = (input: any): user => { // nomeia os inputs e coloca os types
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      password: input.password
   }
}