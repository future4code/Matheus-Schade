import { Request, Response } from "express"
import { createNewUser } from "./endpoints/createNewUser"
import { mailTransporter } from "./services/mailTransporter"
import app from "./app"

app.post("/users", createNewUser)

app.get("/", (req: Request, res: Response) => { res.send("Hello World!") })

// mailTransporter.sendMail({
//    from: "<schade.dev.teste@gmail.com>",
//    to: "lbn_report_lovelace-aaaad37cn7wjenxehl4g4qe34e@labenualunos.slack.com",
//    subject: "Testando",
//    text: "Teste aula",
//    html: `<p>Teste de envio automático de e-mail!<p>`
// }).then(console.log)