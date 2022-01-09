import { Request, Response } from "express";
import { app } from "./controller/app";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";

app.get("/", (req: Request, res: Response) => { res.send("Servidor rodando na porta 3003!") })

app.get("/posts/:id", new PostController().getPostByIdController)

app.post("/posts/create", new PostController().createPostController)

app.post("/signup", new UserController().signupController)

app.post("/login", new UserController().loginController)



