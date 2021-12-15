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

    // public async findUserByEmail(email: string): Promise<User> {
    //     try {
    //         const user = await BaseDatabase.connection(`cookenu_user`).select(`*`).where({ email })

    //         return user[0] && User.toUserModel(user[0])

    //     } catch (error) {
    //         throw new Error(error.sqlMessage || error.message)
    //     }
    // }


    // public async getUserById(id: string): Promise<User[]> {
    //     try {

    //         const user = await BaseDatabase.connection(`cookenu_user`).select(`id`, `name`, `email`).where({ id })

    //         return user[0]


    //     } catch (error) {
    //         throw new Error(error.sqlMessage || error.message)
    //     }
    // }
}