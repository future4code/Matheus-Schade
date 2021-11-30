import { Request, Response } from "express"
import { connection } from "../data/connection";

export const createNewProduct = async (req: Request, res: Response) => {
   try {

      const { name, price, image_url } = req.body

      console.log(`1: `, name, price, image_url)

      if (!name || !price || !image_url) {
         res.statusCode = 422
         throw new Error("Os campos 'name', 'email' e 'password' são obrigatórios")
      }

      if (isNaN(price)) {
         res.statusCode = 422 //unprocessable entity
         throw new Error(`Esse não é um valor válido para price. Digite um valor seguido de um ponto e duas casas como centavos. Exemplo: 180.36`)
      }

      if (!image_url.includes(".jpg") && !image_url.includes(".jpeg")) {
         res.statusCode = 422
         throw new Error("Digite uma url válida para imagens, contendo '.jpeg' ou '.jpg'")
      }

      console.log(`2: `, name, price, image_url)

      await connection("labecommerce_products")
         .insert({
            id: Date.now().toString(),
            name,
            price,
            image_url
         })

      res.status(201).send('Produto cadastrado com sucesso!');

   } catch (error) {
      console.log(`3: `, error)

      if (res.statusCode === 200)
      res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!")

      else
         res.send(error.message)
   }

};

export default createNewProduct
