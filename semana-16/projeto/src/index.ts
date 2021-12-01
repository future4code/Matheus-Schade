import app from "./app";
import { Request, Response } from "express";
import connection from "./connection"

// ENDPOINT 1 - CREATE USER
app.post("/user", async (req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try {
        const { name, nickname, email } = req.body
        const id = Date.now().toString()

        if (!name || !nickname || !email) {
            codeError = 422 //unprocessable entity
            throw new Error(`Please, complete the fields...`)
        }

        if (!email.includes("@") || !email.includes(".com")) {
            codeError = 406
            throw new Error(`The email field must contain an "@" and a ".com"`)
        }

        // await connection.raw(`INSERT INTO TodoListUser VALUES ("${id}", "${name}", "${nickname}", "${email}")`)

        await connection("TodoListUser").insert({ id, name, nickname, email })
        res.status(201).send("User created successfully!")

    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message)
    }

})

// ENDPOINT 2 - GET USER BY ID

app.get("/user/:id", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        let id = (req.params.id).toString()
        const result = await connection("TodoListUser").select("id", "nickname").where({ id })

        if (!result) {
            codeError = 404
            throw new Error(`Deu erro`)
        }
        res.status(200).send(result[0])

    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message)
    }
})

// ENDPOINT 3 - UPDATE USER

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try {
        const id = req.params.id
        const { name, nickname, email } = req.body

        if (!name && !nickname && !email) {
            codeError = 422
            throw new Error(`Please, complete at least one of the fields...`)
        }

        { name && await connection("TodoListUser").update({ name }).where({ id }) }
        { nickname && await connection("TodoListUser").update({ nickname }).where({ id }) }
        { email && await connection("TodoListUser").update({ email }).where({ id }) }

        res.status(200).send("Successfully")

    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message)
    }
})

// ENDPOINT 4 - CREATE TASK

app.post("/task", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const id = Date.now().toString()
        let { title, description, limit_date, creator_user_id } = req.body

        if (!title || !description || !limit_date || !creator_user_id) {
            codeError = 422 //unprocessable entity
            throw new Error(`Please, complete the fields "title", "description", "limitDate" and "creator_user_id"...`)
        }

        const formatDefaultDate = (data: any) => {
            let arrayDate = data && data.split("/")
            let [year, month, day] = [arrayDate && arrayDate[2], arrayDate && arrayDate[1], arrayDate && arrayDate[0]]
            let usefullDate = `${year}-${month}-${day}`
            return usefullDate
        }
        formatDefaultDate(limit_date)

        const formatDate = (): any => {
            const todayDate = new Date().toISOString();
            let nwd = todayDate && todayDate.split("-");
            let [year, month, newdt] = [nwd && nwd[0], nwd && nwd[1], nwd && nwd[2].split("T")];
            let [day, newHour] = [newdt && newdt[0], newdt && newdt[1].split(".")];
            let moment = newHour && newHour[0];
            let time: any = moment && moment.split(":");
            let hour = time && time[0] - 3;
            if (hour < 0) { hour = hour + 3 }
            let currentData: string = `${year}-${month}-${day}`;
            return (currentData)
        };
        const date = formatDate()
        limit_date = formatDefaultDate(limit_date)

        if (formatDefaultDate(limit_date).valueOf() < date.valueOf()) {
            codeError = 422 //unprocessable entity
            throw new Error(`A deadline must be later than the current date.`)
        }

        // await connection.raw(`INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id) VALUES ("${id}", "${title}", "${description}, "${limit_date}", "${creator_user_id}")`)
        await connection("TodoListTask").insert({ id, title, description, limit_date, creator_user_id })
        res.status(200).send("Task created successfully")

    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message)
    }
})
function currentData(currentData: any) {
    throw new Error("Function not implemented.");
}

// ENDPOINT 5 - GET TASK BY ID

app.get("/task/:id", async (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        let id = (req.params.id).toString()
        const result = await connection.raw(`
        SELECT TodoListTask.id as "TaskID", TodoListTask.title, TodoListTask.description, TodoListTask.status,
        TodoListTask.limit_date, TodoListUser.id as "CreaterUserID", TodoListUser.nickname as "creatorUserNickname"
        FROM TodoListTask
        JOIN TodoListUser
        ON TodoListUser.id = TodoListTask.creator_user_id
        WHERE TodoListTask.id = "${id}"
        `)

        if (!result) {
            codeError = 404
            throw new Error(`Deu erro`)
        }
        res.status(200).send(result[0][0])

    } catch (error: any) {
        res.status(codeError).send(error.sqlMessage || error.message)
    }
})
