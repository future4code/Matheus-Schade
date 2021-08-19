// Exercícios de interpretação de código
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// o código testa se o resto da divisão entre um número digitado 
// pelo usuário no prompt pelo número 2 é 0 (indicando que ele é um número par),
// ou não (indicando que é um número ímpar)
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// para os números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// para os números ímpares

//2) O código abaixo foi feito por uma pessoa desenvolvedora, contratada para 
//automatizar algumas tarefas de um supermercado:

// a) Para que serve o código acima?
// o código serve para informar ao usuário o valor da fruta digitada no prompt por ele

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// O preço da fruta Maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
//impressa no console se retirássemos o break que está logo acima do default 
//(o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// "O preço da fruta Pêra é R$ 5.00", pois ele iria executar novamente o código até
// default, e iria considerar o preço de default como o preço da Pêra

// 3) Leia o código abaixo:
// a) vO que a primeira linha está fazendo?
// solicitando ao usuário que digite no prompt um número, sendo que o Number()
// converteria o tipo digitado de string para Number;

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
//E se fosse o número -10?
// se digitasse 10: "Esse número passou no teste"
// se digitasse -10: não apareceria nada, pois não foi definida uma frase para else

//c) c) Haverá algum erro no console? Justifique 
//usando os conceitos de bloco ou escopo.
// sim, pois a let mensagem está disponível apenas dentro do escopo da condicional
//if. Logo, ao tentar executá-la fora do bloco da condicional, daria um erro.

// Exercícios de escrita de código
// 1) Faça um programa que pergunta ao usuário qual a idade dele e imprima no console
// se ele/ela pode dirigir (apenas maiores de idade).
// a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
// imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

const idadeUsuario1 = Number (prompt (`Digite a sua idade abaixo:`))

if (idadeUsuario1 >= 18) {
    console.log (`Você pode dirigir`)
} else {
    console.log (`Você não pode dirigir`)
}

// 2) Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem 
// "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turnoAlunoEstuda = (prompt (`Digite abaixo o turno do dia que você estuda: digite M para matutino, V para vespertino e N para noturno`)).toLowerCase()

if (turnoAlunoEstuda === "m") {
    console.log("Bom Dia!")
} else if (turnoAlunoEstuda === "v") {
    console.log("Boa Tarde!")
} else if (turnoAlunoEstuda === "n") {
    console.log("Boa Noite!")
} else {
    console.log("Você não digitou um turno válido")
}

// 3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turnoAlunoEstuda1 = (prompt (`Digite abaixo o turno do dia que você estuda: digite M para matutino, V para vespertino e N para noturno`)).toLowerCase()

switch (turnoAlunoEstuda1) {
    case "m":
        console.log("Bom Dia!")
        break
    case "v":
        console.log("Boa Tarde!")
        break
    case "n":
        console.log("Boa Noite!")
        break
    default:
        console.log("Você não digitou um turno válido")
}

// 4) Considere a situação: você vai ao cinema com um amigo ou amiga, porém 
// ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
// e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao 
// usuário qual o gênero de filme que vão assistir e outra pergunta sobre o 
// preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir 
// o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso 
// contrário, imprima "Escolha outro filme :(

const perguntaGeneroFilme = prompt (`Qual o gênero do filme que pretende assistir ?`).toLowerCase()
const perguntaValorFilme = Number (prompt (`Qual o preço do ingresso do filme que pretende assistir ?`))

const generoFilme = perguntaGeneroFilme === "fantasia"
const valorIngresso = perguntaValorFilme < 15

if (generoFilme && valorIngresso) {
    console.log (`Bom filme!`)
} else {
    console.log (`Escolha outro filme :(`)
}

// ou

const perguntaGeneroFilme1 = prompt (`Qual o gênero do filme que pretende assistir ?`).toLowerCase() === "fantasia"
const perguntaValorFilme1 = Number (prompt (`Qual o preço do ingresso do filme que pretende assistir ?`)) < 15

if (perguntaGeneroFilme1 && perguntaValorFilme1) {
    console.log (`Bom filme!`)
} else {
    console.log (`Escolha outro filme :(`)
}

// DESAFIO
// 1) Modifique o código do exercício 4 de escrita de código para, antes de imprimir
// a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai
// comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!"
// e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

const qualGeneroFilme = prompt (`Qual o gênero do filme que pretende assistir ?`).toLowerCase() === "fantasia"
const qualValorFilme = Number (prompt (`Qual o preço do ingresso do filme que pretende assistir ?`)) < 15

if (qualGeneroFilme && qualValorFilme) {
    const lancheEscolhido = prompt (`Qual lanche você vai comprar (pipoca, chocolate, doces, etc)?`).toLowerCase()
    console.log (`Bom filme!`)
    console.log (`Aproveite o/a ${lancheEscolhido}!`)
} else {
    console.log (`Escolha outro filme :(`)
}








