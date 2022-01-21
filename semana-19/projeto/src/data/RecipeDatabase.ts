import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    public async createRecipe(recipe: Recipe): Promise<void> {
        try {

            await BaseDatabase.connection(`cookenu_recipe`).insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                userId: recipe.getUserId(),
                created_at: recipe.getCriatedAt()
            })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getRecipeById(id: string): Promise<Recipe> {
        try {

            const recipe = await BaseDatabase.connection(`cookenu_recipe`).select(`id`, `title`, `description`, 'created_at').where({ id })
            return recipe[0] && Recipe.toRecipeModel(recipe[0])


        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}