import { app } from "./app"
import { Request, Response } from "express"
import { signupController } from "./controller/SignupController"
import { loginController } from "./controller/LoginController"


app.get("/", (req: Request, res: Response) => { res.send("Hello World!") }) 

app.post("/signup", signupController)
app.post("/login", loginController)
// app.get("/all", getAllUsers)
// app.delete("/:id", deleteUserById)