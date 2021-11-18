import express, { Express, Request, Response } from 'express'
import cors from "cors"
import { countries } from './data'
import { country } from "./types";

const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(3030, () => { // ou apenas app.listen(3030) já funcionará! O segundo argumento é pra certificar que está funcionando
    console.log("Servidor pronto / Server is running in http://localhost:3003");
});

// Exercício 1 - Get All Countries

app.get("/countries", (req: Request, res: Response) => {//req é request e res é response
    const result = countries.map((country) => ({
        id: country.id,
        name: country.name
    }))


    res.status(200).send(result)
})

// Exercício 3 - Get Country by Filter

app.get("/countries/search", (req: Request, res: Response) => {
    let result: country[] = countries

    try {

        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Você não informou nenhum parâmetro");
        }

        if (req.query.name) {
            result = result.filter(
                country => country.name.includes(req.query.name as string)
            )
        }

        if (req.query.capital) {
            result = result.filter(
                country => country.capital.includes(req.query.capital as string)
            )
        }

        if (req.query.continent) {
            result = result.filter(
                country => country.continent.includes(req.query.continent as string)
            )
        }

        res.status(200).send(result)

    } catch (error: any) {
        res.status(400).send("Nenhum parâmetro informado...Você deve informar ao menos 1 parâmetro para prosseguir com a busca!")
    }
})

// Exercício 2 - Get Country by ID

app.get("/countries/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const result = countries.find(
        (country) => country.id === Number(id)
    )

    if (result)
        res.status(200).send(result)
    else
        res.status(404).send("País não encontrado!")
})

// Exercício 4 - Edit Country by ID

app.put("/countries/:id", (req: Request, res: Response) => {

    try {
        const id = req.params.id

        const index = countries.findIndex((country) => {
            return country.id === Number(id)
        })

        if (index === -1) {
            res.statusCode = 404
            throw new Error("País não encontrado!")
        }

        if (!req.body.name && !req.body.capital) {
            res.statusCode = 404
            throw new Error("Não foram informados nomes e capitais de países para substituí-los no nosso banco de dados!")
        }

        if (req.body.name) {
            countries[index].name = req.body.name
        }

        if (req.body.capital) {
            countries[index].capital = req.body.capital
        }

        res.status(200).send("Informações alteradas com sucesso!");

    } catch (error: any) {
        if (res.statusCode === 200) {
            return res.status(500).end()
        } else {
            res.end()
        }
    }

})
