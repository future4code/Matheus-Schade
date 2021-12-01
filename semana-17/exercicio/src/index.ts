import express, { Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllUsers } from "./endpoints/getAllUsers"


export const app = express()

app.use(express.json())
app.use(cors())

app.get("/users/:type", getAllUsers)
app.get("/", (req: Request, res: Response) => { res.send("Hello World!") })

const server = app.listen(process.env.PORT || 3333, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})