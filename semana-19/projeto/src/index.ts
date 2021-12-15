import app from "./app"
import { Request, Response } from "express"
import { signup } from "./endpoints/signup"
import { login } from "./endpoints/login"
import { getUserProfile } from "./endpoints/getUserProfile"
import { getUserProfileById } from "./endpoints/getUserProfileById"
import { createRecipes } from "./endpoints/createRecipes"


app.get("/", (req: Request, res: Response) => { res.send("Hello World!") }) 
app.get("/user/profile", getUserProfile) //03
app.get("/user/:id", getUserProfileById)
// app.get("/recipe/:id", getRecipe)

app.post("/signup", signup) // 01
app.post("/login", login) // 02
app.post("/recipe", createRecipes)

