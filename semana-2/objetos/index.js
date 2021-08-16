// Exercícios de interpretação de código
// 1. Leia o código abaixo:
// a) O que vai ser impresso no console?

// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario: "14h"

//2. Leia o código abaixo:
// a) O que vai ser impresso no console?

// nome: "Juca", idade: 3, raca: "SRD"
// nome: "Juba", idade: 3, raca: "SRD"
// nome: "Jubo", idade: 3, raca: "SRD"


// b) O que faz a sintaxe dos três 
//pontos antes do nome de um objeto?

// faz o espelhamento do array, copiando
// as informações do array linkado para 
// o novo array;

// 3) Leia o código abaixo;
// a) O que vai ser impresso no console?

// false
// undefined

// b) Explique o valor impresso no console. 
//Você sabe por que isso aconteceu?

// false: apareceu porque a função descrita
// foi retornada com objeto[propriedade], e o
// primeiro console.log disparou a função da
// seguinte forma: pessoa["backender"], logo, ele procurou
// no objeto pessoa o item "backender", que, conforme
//observado no item [3] do objeto, retorna false.
// undefined: mesmo esquema citando acima, porém 
// o item "altura" não existe, logo retorna undefined.

// Exercícios de escrita de código:
//1) Resolva os passos a seguir: 
// Crie um objeto. Ele deve conter duas 
//propriedades: nome (string) e apelidos 
//(um array que sempre terá exatamente 
//três apelidos). Depois, escreva uma função 
//que recebe como entrada um objeto e imprime 
//uma mensagem no modelo abaixo: 

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

const funcaoMensagem = (pessoa) => {
    console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)
}

funcaoMensagem (pessoa)

//b) Agora, usando o operador spread, crie um novo objeto 
//mantendo o valor da propriedade nome, mas com uma nova lista de três 
//apelidos. Depois, chame a função feita no item anterior passando como 
//argumento o novo objeto

const novaPessoa = {
    ... pessoa,
    apelidos: ["Amana", "Mana", "Amandita"]
}

funcaoMensagem (novaPessoa)

//2. Resolva os passos a seguir: 
//a) Crie dois objetos diferentes com as 
// seguintes propriedades: nome, idade e profissão. 

const primeiroObjeto = {
    nome: "Taísa",
    idade: 28,
    profissao: "Médica"
}

const segundoObjeto = {
    nome: "Laura",
    idade: 29,
    profissao: "Vendedora"
}

//b) Escreva uma função que receba esses objetos e 
//retorne um array com as seguintes informações:

//1. O valor de `nome`
//2. O numero de caracteres do valor `nome`
//3. O valor de `idade`
//4. O valor de `profissão`
//5. O numero de caracteres do valor `profissão`
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]

funcaoDois = (primeiroObjeto, segundoObjeto) => {
    let arrayPrimeiro = [primeiroObjeto.nome, primeiroObjeto.nome.length, primeiroObjeto.idade, primeiroObjeto.profissao, primeiroObjeto.profissao.length]
    let arraySegundo = [segundoObjeto.nome, segundoObjeto.nome.length, segundoObjeto.idade, segundoObjeto.profissao, segundoObjeto.profissao.length]
    
    return arrayPrimeiro, arraySegundo
}
funcaoDois (primeiroObjeto, segundoObjeto)

//3) Resolva os passos a seguir: 
//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

let carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. 
//Eles devem ter as seguintes propriedades: nome (string) 
//e disponibilidade (boolean - devem começar como true)

const primeiraFruta = {
    nome: "Banana",
    disponibilidade: true
}

const segundaFruta = {
    nome: "Laranja",
    disponibilidade: true
}

const terceiraFruta = {
    nome: "Abacaxi",
    disponibilidade: true
}

//c) Crie uma função que receba um objeto fruta por parâmetro 
//e coloque-a dentro do array de carrinho. Invoque essa função 
//passando os três objetos criados. 

const funcaoCarrinho = (primeiraFruta, segundaFruta, terceiraFruta) => {
    carrinho.push(primeiraFruta)
    carrinho.push(segundaFruta)
    carrinho.push(terceiraFruta)
    return carrinho
}

funcaoCarrinho(primeiraFruta, segundaFruta, terceiraFruta)

//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
console.log(carrinho)









