import express, { Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import createNewUser from "./endpoints/createNewUser"
import { getAllUsers } from "./endpoints/getAllUsers"
import createNewProduct from "./endpoints/createNewProduct"
import getAllProducts from "./endpoints/getAllProducts"
import newPurchase from "./endpoints/newPurchase"
import getAllPurchasesByUser from "./endpoints/getAllPurchasesByUser"

export const app = express()
app.use(express.json())
app.use(cors())

app.post("/users", createNewUser)
app.get("/users", getAllUsers)
app.post("/products", createNewProduct)
app.get("/products", getAllProducts)
app.post("/purchases", newPurchase)
app.get("/purchases", getAllPurchasesByUser)

app.get("/", (req: Request, res: Response) => { res.send("Hello World!") })

const server = app.listen(process.env.PORT || 3333, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})