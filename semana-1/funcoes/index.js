// Exercícios de interpretação de código

//1. Leia o código abaixo:
//a) O que vai ser impresso no console?
//10
//50

function minhaFuncao(variavel) {
    return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)

//b)  O que aconteceria se retirasse os dois console.log e 
//simplesmente invocasse a função minhaFuncao(2) 
//e minhaFuncao(10)? O que apareceria no console?
//Ele executaria a função normalmente, no entanto,
//sem exibir nada na tela ou no console, tendo em vista que
// não foi executado nenhum comando para "imprimir" o resultado,
// porém a função é executada pois houve o retorno da função;

//2. Leia o código abaixo:

let textoDoUsuario = prompt("Insira um texto"); // linha 1

const outraFuncao = (texto) => {  //linha 2
    return texto.toLowerCase().includes("cenoura") // linha 3 //deve retornar com verdadeiro e falso
}

const resposta = outraFuncao(textoDoUsuario) // chamada
console.log(resposta) // chamada no console

//a)  Explique o que essa função faz e qual é sua utilidade
// essa função irá tornar o texto digitado pelo usuário em letras minúsculas
// e vai procurar nesse texto se foi digitada a palavra "cenoura"; se sim, 
// ele vai retonar true, e senão irá retornar false;

//b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   Eu gosto de cenoura: TRUE (o texto inclui a palavra cenoura)
//ii.  CENOURA é bom pra vista: TRUE (o texto inclui a palavra cenoura em letras maiúsculas, porém foi usado o .toLowerCase, que tranformou tudo em minúsculas)
//iii. Cenouras crescem na terra TRUE (o texto inclui a palavra cenouras, no plural, onde tal palavra incluir o termo "cenoura")

// Exercícios de escrita de código
//1. Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando 
//algumas informações sobre você, como:
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

function imprimeInfos() {
    console.log("Eu sou o Matheus, tenho 25 anos, moro em Ponta Grossa e sou contador/estudante")
}

imprimeInfos()

const novasInfos = function () {
    console.log("Eu sou o Matheus, tenho 25 anos, moro em Ponta Grossa e sou contador/estudante")
}

novasInfos()

const novamenteInfos = () => {
    console.log("Eu sou o Matheus, tenho 25 anos, moro em Ponta Grossa e sou contador/estudante")
}

novamenteInfos()

//b) Agora escreva uma função que receba 4 parâmetros que correspondem 
//às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) 
//e uma profissão (string). Ela deve retornar uma string que unifique todas as 
//informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

function informacoes1(nome1, idade1, cidade1, profissao1) {
    console.log(`Eu sou ${nome1}, tenho ${idade1} anos, moro em ${cidade1} e sou ${profissao1}.`)
}
informacoes1("Luciano", 25, "Ponta Grossa", "Contador")


const informacoes2 = function (nome2, idade2, cidade2, profissao2) {
    console.log(`Eu sou ${nome2}, tenho ${idade2} anos, moro em ${cidade2} e sou ${profissao2}.`)
}
informacoes1("Camila", 32, "Joinville", "médica")


const informacoes3 = (nome3, idade3, cidade3, profissao3) => {
    console.log(`Eu sou ${nome3}, tenho ${idade3} anos, moro em ${cidade3} e sou ${profissao3}.`)
}
informacoes1("Giovana", 19, "Santos", "estudante")

//2. Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, 
//dentro da função, faça a soma das duas entradas e retorne o 
//resultado. Invoque a função e imprima no console o resultado.

function funcaoDeSoma1(primeiroValor1, segundoValor1) {
    const soma1 = primeiroValor1 + segundoValor1
    return soma1
}
console.log(funcaoDeSoma1(12, 5))
console.log(funcaoDeSoma1(0, 5))
console.log(funcaoDeSoma1(24, 3))


const funcaoDeSoma2 = function (primeiroValor2, segundoValor2) {
    const soma2 = primeiroValor2 + segundoValor2
    return soma2
}
console.log(funcaoDeSoma2(12, 5))
console.log(funcaoDeSoma2(0, 5))
console.log(funcaoDeSoma2(24, 3))

const funcaoDeSoma3 = (primeiroValor3, segundoValor3) => {
    const soma3 = primeiroValor3 + segundoValor3
    return soma3
}

console.log(funcaoDeSoma3(12, 5))
console.log(funcaoDeSoma3(0, 5))
console.log(funcaoDeSoma3(24, 3))

//b) Faça uma função que recebe 2 números e retorne um booleano 
//que informa se o primeiro número é maior ou igual ao segundo.

function booleano1(primeiraEscolha1, segundaEscolha1) {
    const comparacao1 = primeiraEscolha1 >= segundaEscolha1
    return comparacao1
}
console.log(booleano1(12, 5))
console.log(booleano1(0, 5))
console.log(booleano1(24, 3))


const booleano2 = function (primeiraEscolha2, segundaEscolha2) {
    const comparacao2 = primeiraEscolha2 >= segundaEscolha2
    return comparacao2
}
console.log(booleano2(12, 5))
console.log(booleano2(0, 5))
console.log(booleano2(24, 3))


const booleano3 = (primeiraEscolha3, segundaEscolha3) => {
    const comparacao3 = primeiraEscolha3 >= segundaEscolha3
    return comparacao3
}
console.log(booleano3(12, 5))
console.log(booleano3(0, 5))
console.log(booleano3(24, 3))

//c) Escreva uma função que receba um número e devolva 
//um booleano indicando se ele é par ou não;

function ePar1(valorQualquer1) {
    seiQueEPar1 = valorQualquer1 % 2 === 0
    return seiQueEPar1
}
console.log(ePar1(14)) // true
console.log(ePar1(5)) // false
console.log(ePar1(21)) // false


const ePar2 = function (valorQualquer2) {
    seiQueEPar2 = valorQualquer2 % 2 === 0
    return seiQueEPar2
}
console.log(ePar2(14)) // true
console.log(ePar2(5)) // false
console.log(ePar2(21)) // false


const ePar3 = function (valorQualquer3) {
    seiQueEPar3 = valorQualquer3 % 2 === 0
    return seiQueEPar3
}
console.log(ePar3(14)) // true
console.log(ePar3(5)) // false
console.log(ePar3(21)) // false

//d) Faça uma função que recebe uma mensagem (`string`) 
//como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela em letras maiúsculas.

function string1(mensagemString1) {
    const tamanho1 = mensagemString1.length
    const versaoMaiuscula1 = mensagemString1.toUpperCase()
    console.log(`A frase ${versaoMaiuscula1} tem um total de ${tamanho1} caracteres`)
}
string1("Good Morning, Vietnam!")


const string2 = function (mensagemString2) {
    const tamanho2 = mensagemString2.length
    const versaoMaiuscula2 = mensagemString2.toUpperCase()
    console.log(`A frase ${versaoMaiuscula2} tem um total de ${tamanho2} caracteres`)
}
string2("That's what she said")

const string3 = function (mensagemString3) {
    const tamanho3 = mensagemString3.length
    const versaoMaiuscula3 = mensagemString3.toUpperCase()
    console.log(`A frase ${versaoMaiuscula3} tem um total de ${tamanho3} caracteres`)
}
string3("Por baixo dessa carne existe um ideal. E as idéias nunca morrem")

//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação 
// e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções 
// com esses valores imputados pelo usuário sendo o argumento. Por fim, mostre 
// no console o resultado das operações:

const soma = (primeiroNumero1, segundoNumero1) => {
    const somar = primeiroNumero1 + segundoNumero1
    console.log(`Números Inseridos: ${primeiroNumero1} e ${segundoNumero1}`)
    console.log(`Soma: ${somar}`)
}

const subtracao = (primeiroNumero1, segundoNumero1) => {
    const subtrair = primeiroNumero1 - segundoNumero1
    console.log(`Diferença: ${subtrair}`)
}

const multiplicacao = (primeiroNumero1, segundoNumero1) => {
    const multiplicar = primeiroNumero1 * segundoNumero1
    console.log(`Multiplicação: ${multiplicar}`)
}

const divisao = (primeiroNumero1, segundoNumero1) => {
    const dividir = primeiroNumero1 / segundoNumero1
    console.log(`Divisão: ${dividir}`)
}

const primeiroNumero1 = Number(prompt("Insira abaixo um número qualquer"))
const segundoNumero1 = Number(prompt("Insira abaixo outro número qualquer"))

soma(primeiroNumero1, segundoNumero1)
subtracao(primeiroNumero1, segundoNumero1)
multiplicacao(primeiroNumero1, segundoNumero1)
divisao(primeiroNumero1, segundoNumero1)

//DESAFIOS
//1. Sua tarefa é escrever duas funções:
//a) Escreva uma arrow function que recebe um parâmetro 
// e imprime no console esse parâmetro:

const arrowFunction1 = (parametro1) => {
    console.log(parametro1)
}
arrowFunction1(`parametro1`)






























