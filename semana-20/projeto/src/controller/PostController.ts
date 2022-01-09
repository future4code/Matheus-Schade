import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { UserDatabase } from "../data/UserDatabase"
import { Token } from "../model/AuthenticationData"
import { post } from "../model/post"
import { IdGenerator } from "../services/idGenerator"

export class PostController {

    getPostByIdController = async (req: Request, res: Response): Promise<void> => {
        try {

            const { id } = req.params

            const post = await new PostBusiness().getPostByIdBusiness(id)

            res.status(200).send(post)

        } catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    }

    createPostController = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization
            const { image, description, type } = req.body

            const id: string = new IdGenerator().generate()
            const createdAt = new Date().toISOString()

            const userId: string = await new UserDatabase().getUserId(token as string)

            const post: post | undefined = await new PostBusiness().createPostBusiness({ userId, createdAt, id, description, type, image })

            res.status(201).send({ message: "Post criado com sucesso!", post })
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    }


}