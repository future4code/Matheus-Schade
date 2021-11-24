import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req: Request, res: Response) => { res.send("Hello!") })

const server = app.listen(process.env.PORT || 3033, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

export default app

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE id = '${id}'`)
    return result[0][0]
}

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
    console.log(await getActorById("001"))
})()

// Ou então podemos chamá-la dentro de um endpoint
app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await getActorById(id)
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// EXERCÍCIO 1

// a. Explique como é a resposta que temos quando usamos o raw.
// Retorna um array com 2 objetos. O primeiro tem os dados solicitados, e o segundo apresenta algumas informações padrão do raw;

// b. Faça uma função que busque um ator pelo nome;

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE name = '${name}'`)
    return result[0][0]
}

app.get("/user/:name", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const name = req.params.name
        const result = await getActorByName(name)
        res.status(200).send(result)

    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message) //define que será exibida a mensagem do new Error
    }
})

// c. Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

const countActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`SELECT COUNT(*), gender as count FROM Actor WHERE gender = "${gender}" `);
    return result[0][0];
};

app.get("/user/:gender", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const gender = req.params.gender
        const result = await countActorByGender(gender)
        res.status(200).send(result)

    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message) //define que será exibida a mensagem do new Error
    }
})

// EXERCÍCIO 2

// a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};

app.put("/user/:id/:salary", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const salary = Number(req.params.salary)
        const { id } = req.params


        // await connection("Actor").update({ salary }).where({ id })
        await updateActor(id, salary)

        res.send("Success!")
    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message)
    }
})

// b. Uma função que receba um id e delete um ator da tabela

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
};

app.delete("/user/:id", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const { id } = req.params

        await deleteActor(id)

        res.send("Deletion successful")

    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message) //define que será exibida a mensagem do new Error
    }
})

// c. Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

const averageSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor").avg(`salary as averageSalary`).where({ gender });
  return result[0];
};

app.get("/user/:gender", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const gender = req.params.gender
        const result = await averageSalary(gender)
        res.status(200).send(result)

    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message) //define que será exibida a mensagem do new Error
    }
})
























