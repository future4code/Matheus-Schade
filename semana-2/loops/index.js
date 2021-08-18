// Exercícios de interpretação de código
// 1) O que o código abaixo está fazendo?
// Qual o resultado impresso no console?
// Trata-se de um código que executa um laço que inicia a 
// variável i = 0 e adiciona +1 a cada execução, parando de
// executar quando i = 5, e mostra no console a soma desses
// valores;

// 2) Leia o código abaixo:
// a)  O que vai ser impresso no console?
// Serão impressos todos os números que foram maiores que 18, 
// ou seja, 19, 21, 23, 25, 27 e 30, um abaixo do outro;

// b) Se eu quisesse acessar o índice de cada elemento dessa 
// lista, o for...of... é suficiente? Se sim, o que poderia 
// ser usado para fazer isso?
// poderia se criar uma nova lista, a partir dos números obtidos 
// com o for...of, e daí acessá-los com seus índices em outro laço;

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let novaLista = []
for (let numero of lista) {
    novaLista.push(numero)
}
for (i = 0; i < novaLista.length ;i ++) {
    console.log(`novaLista[${i}] é: ${novaLista[i]}`)
}

// 3) Qual seria o resultado impresso no console,
// se o usuário digitasse o número 4 ?
//*
//** 
//*** 
//****
// isso apareceria pois o laço executa outro laço que coloca 1 asterisco
//a mais na linha (que inicialmente começou sem nada) e o imprime na tela, 
// até o número digitado ser igual ao numero de asteriscos impressos pela fórmula;

//------------------------------------
// Exercícios de escrita de código
// 1) Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
// um por um, e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

let usuarioTemQuantosPets = Number (prompt ("Quantos bichinhos de estimação você tem?"))

if (usuarioTemQuantosPets === 0) {
    console.log ("Que pena! Você pode adotar um pet!")
} else {
    let nomeDosPets = []
    for (let i = 0; i < usuarioTemQuantosPets; i++) {
        nomes = prompt(`Digite o nome do pet ${i+1}`) 
        nomeDosPets.push(nomes)
        
    }
    console.log(nomeDosPets)
    
}

// 2) Considere que você tenha acesso a um array (chamado de 'array original')
// que é composto somente de números. Baseando-se nisso, crie uma função para
// cada um dos itens abaixo, realizando as operações pedidas:


let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a) Escreva um programa que imprime cada um dos valores do array original.

for (i = 0; i < arrayOriginal.length ;i ++) {
    console.log(arrayOriginal [i])
}

// b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

for (i = 0; i < arrayOriginal.length ;i ++) {
    console.log(arrayOriginal [i]/10)
}

// c) Escreva um programa que crie um novo array contendo, somente, os números pares do
// array original e imprima esse novo array
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

novoArray = []
for (i = 0; i < arrayOriginal.length ;i ++) {
    if (arrayOriginal[i] % 2 === 0) {
        novoArray.push(arrayOriginal[i])
    }
}
console.log(novoArray)

// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma:
// "O elemento do índex i é: numero". Depois, imprima este novo array.

let arrayDeStrings = []
for (i = 0; i < arrayOriginal.length ;i ++) {
    arrayDeStrings.push(`O elemento do index ${i} é: ${arrayOriginal[i]}`)
}

console.log(arrayDeStrings)

// e) Escreva um programa que imprima no console o maior e o menor números contidos
// no array original
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let maiorNumero = 0
let menorNumero = arrayOriginal[0]

for (i = 0; i < arrayOriginal.length ;i ++) {
    if (arrayOriginal[i] > maiorNumero) {
        maiorNumero = arrayOriginal[i]
    } else if (arrayOriginal[i] < menorNumero) {
        menorNumero = arrayOriginal[i]
    }
}

console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)

















































































