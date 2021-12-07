import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

// HERANÇA

// EXERCÍCIO 1 

export class User {
    constructor(
        private id: string,
        private email: string,
        private name: string,
        private password: string
    ) {
        console.log("Chamando o construtor da classe User")
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!` // EXERCÍCIOS 4 E 5
    }
}

const newUser1 = new User("12123", "ed@gmail.com", "Eduardo", "123456789")

// a. Teoricamente não, já que é um atributo do tipo private, apenas sendo possível se chamado através de uma função get. Porém, por algum motivo, o hot reload está driblando essa propriedade e possibilitando imprimir no terminal.

// Uma vez a cada instância criada.

// console.log(newUser1.password)

// EXERCÍCIO 2

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

// Uma vez a cada instância criada.

// 2 vezes, uma referente a classe Customer e outra referente ao Customer herdar as informações da classe User, a qual Customer é filha.


export const newCostumer1 = new Customer("13515", "sandro@email.com", "Sandro", "123123", "65651651618")

// Apenas com o console.log() no customer criado, já que não foi criado nenhum método público getPassword(), detalhar o atributo password não é possível.

console.log(newCostumer1.introduceYourself())

// POLIMORFISMO

// EXERCÍCIO 1

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária, como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}
console.log(client)

// a. Foi possível visualizar todas, já que nenhuma delas é privada

// EXERCÍCIO 2

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// a. Cannot create an instance of an abstract class.
// const newPlace1 = new Place("84440-300")

// console.log(newPlace1)

// b. Criar uma outra classe, a qual será filha de Place, não sendo essa outra classe abstrata, e então criar uma instância dessa nova classe (filha). Como no exemplo abaixo:
export class APlace extends Place {
    // qualquer coisa
}

const newPlace1 = new APlace("84440-300")

console.log(`newPlace1: `, newPlace1.getCep())

// EXERCÍCIO 3

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number, // Refere-se ao número de moradores da casa
        cep: string
    ) {
        super(cep);
    }

    getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

const newResidence1 = new Residence(3, "84030-300")
console.log(`newResidence1: `, newResidence1.getCep(), newResidence1.getResidentsQuantity(), `residências`)

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number, // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

const newCommerce1 = new Commerce(23, "64000-800")
console.log(`newCommerce1: `, newCommerce1.getCep(), newCommerce1.getFloorsQuantity(), `andares`)

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number, // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

const newIndustry1 = new Industry(118, "64000-800")
console.log(`newIndustry1: `, newIndustry1.getCep(), newIndustry1.getMachinesQuantity(), `máquinas`)

// EXERCÍCIO 4

// a. Todas os atributos e métodos abaixo, advindos da classe Pai, classe Avô e interface;

export class ResidentialClient extends Residence implements Client {
    constructor(
        private cpf: number, // solicitado no enunciado
        public name: string, // veio da interface Client
        public registrationNumber: number, // veio da interface Client
        public consumedEnergy: number, // veio da interface Client

        residentsQuantity: number, // veio de Residence
        cep: string // veio de Place
    ) {
        super(residentsQuantity, cep); // chama os parâmetros das classes pai (Residence) e avô (Place)
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }

    getCpf(): number {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

// EXERCÍCIO 5

export class CommercialClient extends Commerce implements Client {
    constructor(
        private cnpj: number, // solicitado no enunciado
        public name: string, // veio da interface Client
        public registrationNumber: number, // veio da interface Client
        public consumedEnergy: number, // veio da interface Client

        floorsQuantity: number, // veio de Commerce
        cep: string // veio de Place
    ) {
        super(floorsQuantity, cep); // chama os parâmetros das classes pai (Commerce) e avô (Place)
    }

    getFloorsQuantity(): number {
        return this.floorsQuantity
    }

    public getCnpj(): number {
        return this.cnpj;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }
}

// a. Também herda todos os atributos e métodos advindos da classe Pai, classe Avô e interface;

// b. Enquanto a ResidentialClient herda atributos e métodos da classe Residence, a CommercialClient herda atributos e métodos da classe Commerce;

// EXERCÍCIO 6

export class IndustrialClinet extends Industry implements Client {
    constructor(
        public name: string, // veio da interface Client
        public registrationNumber: number, // veio da interface Client
        public consumedEnergy: number, // veio da interface Client
        private industryNumber: number, // solicitado no enunciado

        machinesQuantity: number, // veio de Industry
        cep: string // veio de Place
    ) {
        super(machinesQuantity, cep); // chama os parâmetros das classes pai (Industry) e avô (Place)
    }

    public getIndustryNumber(): number {
        return this.industryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + (this.machinesQuantity * 100);
    }
}





