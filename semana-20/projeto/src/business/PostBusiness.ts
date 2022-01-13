import { PostDatabase } from "../data/PostDatabase"
import { post, POST_TYPES } from "../model/post"

export class PostBusiness {

    createPostBusiness = async (post: post): Promise<post | undefined> => {
        try {

            if (!post.image || !post.description || !post.type.toUpperCase()) {
                throw new Error("Prencha os campos 'image','description' e `type` para criar um novo post!")
            }

            if (!post.image.includes(".com") && !post.image.includes(".org") && !post.image.includes("upload")) {
                throw new Error("Insira um link de imagem válido")
            }

            if (post.type.toUpperCase().trim() !== POST_TYPES.EVENT && post.type.toUpperCase().trim() !== POST_TYPES.NORMAL) {

                throw new Error("Assinale se o post é do tipo `NORMAL` ou `EVENT`")
            }

            const newPost: post = { userId: post.userId, id: post.id, image: post.image, description: post.description, createdAt: post.createdAt, type: post.type.toUpperCase().trim() as POST_TYPES }
            await new PostDatabase().newPost(newPost)

            return post

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getPostByIdBusiness = async (id: string): Promise<post | undefined> => {
        try {

            const post = await new PostDatabase().getPostById(id)

            if (!post) {
                throw new Error("Insira um id válido");
            }

            return post


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}