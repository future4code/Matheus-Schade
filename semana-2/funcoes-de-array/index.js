// Exercícios de interpretação de código
// a) O que vai ser impresso no console?
// { nome: "Amanda Rangel", apelido: "Mandi" }
// 0
// array completo
// { nome: "Laís Petra", apelido: "Laura" }
// 1
// array completo
// { nome: "Letícia Chijo", apelido: "Chijo" }
// 2
// array completo

// 2) Leia o código abaixo
// a) O que vai ser impresso no console?
// ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// 3) Leia o código abaixo:
// a) O que vai ser impresso no console?
// [{ nome: "Amanda Rangel", apelido: "Mandi" },
//  { nome: "Laís Petra", apelido: "Laura" }]

// Exercícios de escrita de código:
// 1) Dado o seguinte array de cachorrinhos que são
// clientes de um pet shop, realize as operações pedidas
// nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const apenasNomesDoguinhos = pets.map (
    (item, index, array) => {
        return item.nome
    }
)
console.log (apenasNomesDoguinhos)

// b) Crie um novo array apenas com os cachorros salsicha

const apenasComOsCaesSalsichas = pets.filter (
    (item, index, array) => {
        return item.raca === "Salsicha"
    }
)
console.log (apenasComOsCaesSalsichas)

// c) Crie um novo array que possuirá mensagens para enviar para
// todos os clientes que são poodles. A mensagem deve ser:
// "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const mensagemParaClientesPoodles = pets.filter (
    (item, index, array) => {
        return item.raca === "Poodle"
    }
) .map (
    (item, index, array) => {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    }
)
console.log (mensagemParaClientesPoodles)

// 2) Dado o seguinte array de produtos, realize as operações
// pedidas nos itens abaixo utilizando as funções de array
// map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a) Crie um novo array que contenha apenas o nome de cada item;

const arrayComNomeProdutos = produtos.map (
    (item, index, array) => {
        return item.nome
    }
)
console.log(arrayComNomeProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o
// preço de cada item, aplicando 5% de desconto em todos eles

const arrayComDescontoESemItem = produtos.map(
    (numeroQualquer) => {
        return novoArray = {nome: numeroQualquer.nome, preco: Number((numeroQualquer.preco * 0.95).toFixed(2))}
}
)
console.log(arrayComDescontoESemItem)

// c) Crie um novo array que contenha apenas os objetos da
// categoria Bebidas

const arrayApenasComObjetosBebidas = produtos.filter (
    (item, index, array) => {
        return item.categoria === "Bebidas"
    }
)
console.log(arrayApenasComObjetosBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome
// contenha a palavra "Ypê"

const arrayApenasComObjetosYpe = produtos.filter (
    (item, index, array) => {
        return item.nome.toLowerCase().includes("ypê")
    }
)
console.log(arrayApenasComObjetosYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME]
// por [PREÇO]". Esse array deve conter frases apenas dos itens
// cujo nome contenha a palavra "Ypê"

const arrayApenasComObjetosYpeEPreco = produtos.filter (
    (item, index, array) => {
        return item.nome.toLowerCase().includes("ypê")
    }
) .map (
    (item, index, array) => {
        return `Compre ${item.nome} por R$ ${item.preco}`
    }
)

console.log(arrayApenasComObjetosYpeEPreco)





//------------------------------------------
//DESAFIO

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]


// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const novoArrayAlfabetico = pokemons.map (
    (item, index, array) => {
        return item.nome
    }
)
const maisUmArray = novoArrayAlfabetico.sort()
console.log(maisUmArray)

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const arraysRepetidos = pokemons.map (
    (item, index, array) => {
        return item.tipo
    }
) 

const newArray = [ ...new Set(arraysRepetidos)]

console.log(newArray)




















