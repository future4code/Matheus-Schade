import { Request, Response } from "express"
import { connection } from "../data/connection";

export const createNewUser = async (req: Request, res: Response) => {
   try {

      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 422
         throw new Error("Os campos 'name', 'email' e 'password' são obrigatórios")
      }

      if (password.length < 6) {
         res.statusCode = 422
         throw new Error('A senha deve conter no mínimo seis caracteres');
      }

      if (!email.includes("@") || !email.includes(".com")) {
         res.statusCode = 422
         throw new Error('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
      }

      await connection("labecommerce_users")
         .insert({
            id: Date.now().toString(),
            name,
            email,
            password
         })

      res.status(201).send('Usuário criado com sucesso!');

   } catch (error) {

      if (res.statusCode === 200)
         res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!")

      else
         res.send(error.sqlMessage || error.message)
   }
};

export default createNewUser
