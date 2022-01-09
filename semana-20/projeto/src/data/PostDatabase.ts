import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    public newPost = async (post: post): Promise<void> => {

        try {

            await await BaseDatabase.connection(`labook_posts`).insert({
                id: post.id,
                image: post.image,
                description: post.description,
                createdAt: post.createdAt,
                userId: post.userId,
                type: post.type
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public getPostById = async (id: string): Promise<post | undefined> => {
        const [result] = await BaseDatabase.connection("labook_posts").where({ id })
        return result
    }
}