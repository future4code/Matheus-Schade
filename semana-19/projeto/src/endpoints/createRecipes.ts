import { Request, Response } from "express"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Recipe } from "../entities/Recipe"
import { Authenticator } from "../services/Authenticator"
import formatDate from "../services/formatDate"
import { IdGenerator } from "../services/IdGenerator"

export const createRecipes = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization
        const { title, description } = req.body

        if (!token) {
            res.statusCode = 422
            throw new Error("Informe um token válido!")
        }

        if (!title || !description) {
            res.statusCode = 422
            throw new Error("Prencha os campos 'title' e 'description' para criar uma nova receita!")
        }

        const id: string = new IdGenerator().generatedId()
        const created_at = new Date().toISOString()
        const tokenData = new Authenticator().getTokenData(token)

        const recipe = new Recipe(id, title, description, tokenData.id, created_at)
        await new RecipeDatabase().createRecipe(recipe)

        res.status(201).send({ message: "Receita criada com sucesso!", title, description, created_at:formatDate(created_at) })

    } catch (error) {
        if (res.statusCode === 200) { res.status(500).send("Sistema temporariamente indisponível. Tente novamente mais tarde!") }
        else { res.send(error.sqlMessage || error.message) }
    }
}
