import app from "./app"
import login from "./endpoints/login"
import { Request, Response } from "express"
import createUser from "./endpoints/createUser"
import { getUserProfile } from "./endpoints/getUserProfile"

app.get("/", (req: Request, res: Response) => { res.send("Hello World!") })
app.get("/user/profile", getUserProfile)

app.post("/user/signup", createUser)
app.post('/user/login', login)




