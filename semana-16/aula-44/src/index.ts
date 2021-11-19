import express, { Request, Response } from 'express'
import cors from 'cors'

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/teste", (req: Request, res: Response) => {
  res.status(200).send("Deu certo!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

// EXERCÍCIO 1

// a. Qual método HTTP você deve utilizar para isso? GET

// b. Como você indicaria a entidade que está sendo manipulada? USERS

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users)
})

// EXERCÍCIO 2

app.get("/users/searchtype", (req: Request, res: Response) => {
  let codeError: number = 400

  try {
    const usertype: string = (req.query.type as string).toUpperCase()
    const acceptedTypes: boolean = usertype === UserType.ADMIN || usertype === UserType.NORMAL
    const userTypeFiltered: User[] | undefined = users.filter((user) => {
      return user.type === usertype
    })

    if (!acceptedTypes) {
      codeError = 404
      throw new Error("Query not found. The accepted types are: ADMIN and NORMAL")
    }

    res.status(200).send(userTypeFiltered)

  } catch (error: any) {
    res.status(codeError).send({ message: error.message })
  }
})

// a. Como você passou os parâmetros de type para a requisição? Por quê?
// Poderia ter usado um path params, porém como é uma busca, acho que faz mais sentido usar uma query;

// b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
// Criando um ENUM, que só permite ADMIN e NORMAL;

// EXERCÍCIO 3

app.get("/users/searchname", (req: Request, res: Response) => {
  let codeError: number = 400

  try {

    const username: string = (req.query.name as string).toLowerCase()
    const user: User | undefined = users.find((user) => (user.name).toLowerCase() === username)
    if (!user) {
      codeError = 404
      throw new Error("User not found")
    }

    res.status(200).send(user)

  } catch (error: any) {
    res.status(codeError).send({ message: error.message })
  }
})

// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// Query para buscas

// EXERCÍCIO 4

app.post("/users", (req: Request, res: Response) => {
  let codeError: number = 400

  try {
    let { name, email, type, age } = req.body
    const acceptedTypes: boolean = type === UserType.ADMIN || type === UserType.NORMAL
    Number(age)

    if (!name || !email || !type || !age) {
      codeError = 422 //unprocessable entity
      throw new Error(`Please, complete the fields...`)
    }

    if (isNaN(age)) {
      codeError = 422 //unprocessable entity
      throw new Error(`Invalid value for age. Please send a number`)
    }

    if (!acceptedTypes) {
      codeError = 404
      throw new Error("Query not found. The accepted types are: ADMIN and NORMAL")
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      type,
      age,
    }

    users.push(newUser)
    res.status(201).send({ message: "User created successfully" })

  } catch (error: any) {
    res.status(codeError).send({ message: error.message }) //define que será exibida a mensagem do new Error
  }
})

// a. Mude o método do endpoint para `PUT`. O que mudou? Nada

// b. Você considera o método `PUT` apropriado para esta transação? Por quê? Não, pois não é uma boa prática, já que a comunidade utiliza put e patch para alterações e post para criações nas requisições

// EXERCÍCIO 5

app.put("/users/:id", (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const id = req.params.id
    const acceptedTypes: boolean = req.body.type === UserType.ADMIN || req.body.type === UserType.NORMAL
    const index = users.findIndex((user) => {
      return user.id === Number(id)
    })

    if (index === -1) {
      codeError = 404
      throw new Error("País não encontrado!")
    }

    if (!req.body.name && !req.body.email && !req.body.type && !req.body.age) {
      codeError = 404
      throw new Error("Error. You need to complete some field!")
    }

    if (req.body.type && !acceptedTypes) {
      codeError = 404
      throw new Error("Query not found. The accepted types are: ADMIN and NORMAL")
    }

    if (req.body.name) {
      users[index].name = req.body.name
    }

    if (req.body.email) {
      users[index].email = req.body.email
    }

    if (req.body.type) {
      users[index].type = req.body.type
    }

    if (req.body.age) {
      users[index].age = req.body.age
    }

    res.status(201).send({ message: "Successfully" })

  } catch (error: any) {
    res.status(codeError).send({ message: error.message }) //define que será exibida a mensagem do new Error
  }

})

// EXERCÍCIO 7

app.delete("/users/:id", (req: Request, res: Response) => {
  let codeError: number = 400
  try {

    const id = Number(req.params.id)

    if (isNaN(id)) {
      codeError = 422 //unprocessable entity
      throw new Error("Invalid id")
    }

    const index = users.findIndex((user) => {
      return user.id === Number(id)
    })

    if (index === -1) {
      codeError = 404
      throw new Error("User not found")
    }

    users.splice(index, 1)

    res.status(200).send({ message: "User deleted successfully" })

  } catch (error: any) {
    res.status(codeError).send({ message: error.message }) //define que será exibida a mensagem do new Error
  }
})
