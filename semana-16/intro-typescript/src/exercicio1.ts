// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a 
// esta variável. O que acontece?

// let minhaString: string = 0

// resposta: o código quebra, pois não é possível atribuir um valor do tipo number a uma variável do tipo string;

// --------------------------------------------------------------------------------------

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer 
// para que essa variável também aceite strings?

let meuNumero: number | string = 0

// Basta adicionar um union type | string

// --------------------------------------------------------------------------------------

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

let RegrasObjeto: { nome: string, idade: number, corFavorita: string };

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string,
}

enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Ararelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta",
}


let pessoa1: Pessoa = {
    corFavorita: "Azul",
    idade: 26,
    nome: "Marcelo"
}

let pessoa2: Pessoa = {
    corFavorita: "Verde",
    idade: 28,
    nome: "Lúcia"
}

let pessoa3: Pessoa = {
    corFavorita: "Roxo",
    idade: 20,
    nome: "Eduarda"
}

let pessoa4: Pessoa = {
    corFavorita: "Cinza",
    idade: 38,
    nome: "João"
}

type Pessoa2 = { nome: string, idade: number, corFavorita: Cores };

let pessoa5: Pessoa2 = {
    corFavorita: Cores.VERMELHO,
    idade: 17,
    nome: "Eduardo"
}

let pessoa6: Pessoa2 = {
    corFavorita: Cores.LARANJA,
    idade: 35,
    nome: "Sandro"
}

let pessoa7: Pessoa2 = {
    corFavorita: Cores.AMARELO,
    idade: 33,
    nome: "Ana Maria"
}

let pessoa8: Pessoa2 = {
    corFavorita: Cores.VERDE,
    idade: 18,
    nome: "Ágatha"
}


// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// --------------------------------------------------------------------------------------