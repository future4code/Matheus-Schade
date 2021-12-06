import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"
import { Character, Dog, GENDER } from "./types"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

// EXERCÍCIO 1

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?

// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.

// b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, 
// cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

const user = new UserAccount("13222589455", "Henrique", 25);

// Foi criada apenas uma vez, já que apenas uma instância foi criada (e chamada);

// b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf 
//e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

// Utilizando o método da classe chamado get. Por exemplo, no caso do exercício 1 seriam: 
// getCpf(): string {return this.cpf}, getName(): string {return this.name} e getAge(): number {return this.age};

// EXERCÍCIO 2

type transaction = {
    description: string,
    value: number,
    date: string
}

class Transaction {
    private description: string;
    private value: number;
    private date: string

    constructor(description: string, value: number, date: string) {
        console.log("Chamando o construtor da classe TRANSACTION")
        this.description = description;
        this.value = value;
        this.date = date;
    }

    getDescription(): string { return this.description }
    getValue(): number { return this.value }
    getDate(): string { return this.date }
}

const transaction1 = new Transaction("Venda", 125.50, "2021-12-06");

// EXERCÍCIO 3

class Bank {
    private accounts: UserAccount[];


    constructor(accounts: UserAccount[]) {
        console.log("Chamando o construtor da classe Bank")
        this.accounts = accounts;
    }

    getAccounts(): UserAccount[] { return this.accounts }
}

const bank1 = new Bank([user]);



