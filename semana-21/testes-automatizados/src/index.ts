import { Request, Response } from "express";
import { app } from "./controller/app";

app.get("/", (req: Request, res: Response) => { res.send("Servidor rodando na porta 3003!") })

