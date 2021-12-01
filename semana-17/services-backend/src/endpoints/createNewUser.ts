import { Request, Response } from "express"
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAdressInfo"
import { Adress } from "../types";

export const createNewUser = async (req: Request, res: Response) => {
   try {

      const id = Date.now().toString()
      const { name, nickname, email, cep, number, complement } = req.body
      const { address, neighborhood, city, state } = await getAddressInfo(`${cep}`)


      if (!name || !nickname || !email || !cep || !number) {
         res.statusCode = 422
         throw new Error("Os campos 'name', 'nickname', 'email', 'cep' e 'number' são obrigatórios")
      }

      if (!address || !neighborhood || !city || !state) {
         res.statusCode = 422
         throw new Error("Cep inválido")
      }

      if (!email.includes("@") || !email.includes(".com")) {
         res.statusCode = 422
         throw new Error('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
      }

      if (isNaN(number)) {
         res.statusCode = 422
         throw new Error('Formato de número inválido. O número deve conter apenas números. Exemplo correto: "3256"');
      }

      await connection("aula51_users")
         .insert({
            id: id,
            name,
            nickname,
            email
         })

      await connection("aula51_adress")
         .insert({
            cep,
            address,
            number,
            complement,
            neighborhood,
            city,
            state,
            users_id: id
         })

      res.status(201).send('Usuário criado com sucesso!');

   } catch (error) {

      if (res.statusCode === 200)
         res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!")

      else
         res.send(error.message)
   }
};

export default createNewUser