import { app } from "./app"
import { Request, Response } from "express"
import { signupController } from "./controller/SignupController"
import { loginController } from "./controller/LoginController"
import { GetAllController } from "./controller/GetAllController"
import { DeleteUserController } from "./controller/deleteUserController"



app.get("/", (req: Request, res: Response) => { res.send("Hello World!") }) 

app.post("/signup", signupController)
app.post("/login", loginController)
app.get("/all", GetAllController)
app.delete("/:id", DeleteUserController)

