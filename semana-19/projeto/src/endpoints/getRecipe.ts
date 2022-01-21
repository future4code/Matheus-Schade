import { Request, Response } from "express"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Authenticator } from "../services/Authenticator"
import formatDate from "../services/formatDate"

export const getRecipe = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization
        const id: string = req.params.id

        if (!token || !id) {
            res.statusCode = 422
            throw new Error("Informe um 'token' e um 'id' válidos!")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 403
            throw new Error("Não autorizado!")
        }

        const recipe = await new RecipeDatabase().getRecipeById(id)

        if (!recipe) {
            res.statusCode = 404
            throw new Error("Receita não encontrada!")
        }

        res.status(200).send({ id: recipe.getId(), title: recipe.getTitle(), description: recipe.getDescription(), created_at: formatDate(recipe.getCriatedAt()) })

    } catch (error) {

        if (res.statusCode === 200) { res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!") }
        else { res.send(error.sqlMessage || error.message) }

    }
}
