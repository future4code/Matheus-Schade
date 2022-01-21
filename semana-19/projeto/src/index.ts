import app from "./app"
import { Request, Response } from "express"
import { signup } from "./endpoints/signup"
import { login } from "./endpoints/login"
import { getUserProfile } from "./endpoints/getUserProfile"
import { getUserProfileById } from "./endpoints/getUserProfileById"
import { createRecipes } from "./endpoints/createRecipes"
import { getRecipe } from "./endpoints/getRecipe"
import { followUser } from "./endpoints/followUser"
import { unfollowUser } from "./endpoints/unfollowUser"
import { getFeed } from "./endpoints/getFeed"

app.get("/", (req: Request, res: Response) => { res.send("Hello World!") }) 
app.get("/user/profile", getUserProfile) //03
app.get("/user/feed", getFeed) // 09
app.get("/user/:id", getUserProfileById) // 04
app.get("/recipe/:id", getRecipe) // 06

app.post("/signup", signup) // 01
app.post("/login", login) // 02
app.post("/recipe", createRecipes) // 05
app.post("/user/follow", followUser) // 07
app.post("/user/unfollow", unfollowUser) // 08

