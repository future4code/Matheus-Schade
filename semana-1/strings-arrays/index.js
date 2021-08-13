// Exercícios de interpretação de código
//1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
//a. undefined
//b. null
//c. 11
//d. 3, pois a variável array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// foi colocada no console.log para exibir apenas o item i (que é igual a 0)
// logo, ele vai exibir apenas o item 0, ou seja, o número 3;
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13], pois ele substituiu o array 1(ou seja, o valor 4, segundo da lista
//e  foi alcançado somando [i+1, ou seja, se i=0, logo i+0 é a mesma coisa que 1+0=1])
//f. 9, pois o código declara que a constante valor é igual a array[i+6], ou seja, a posição 6 da lista chamada array
//, de modo que, segundo o código informa, a posição 6 de tal lista é o valor 9, lembrando que sempre devo começar
// a contagem pela posição 0;

//2. Leia o código abaixo com atenção:
// SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercícios de escrita de código
//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeDoUsuario = prompt ("Olá, qual é o seu nome?")
const emailDoUsuario = prompt ("Olá, qual é o seu e-mail?")
console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o),", nomeDoUsuario,"!")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
//Em seguida, siga os passos:

let comidasPreferidas = ["Paçoca", "Melancia", "Bolo de Chocolate", "Pipoca", "Chocolate"]

//a) Imprima no console o array completo

console.log(comidasPreferidas)

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

comidasPreferidas[1] = prompt("Qual é a sua comida preferida?")
console.log(comidasPreferidas)

//3. Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

let listaDeTarefas = []

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//listaDeTarefas.push(prompt("Insira uma tarefa que você precisa realizar no dia de hoje"))
//listaDeTarefas.push(prompt("Insira mais uma tarefa que você precisa realizar no dia de hoje"))
//listaDeTarefas.push(prompt("Insira uma terceira tarefa que você precisa realizar no dia de hoje"))

let tarefa0 = prompt("Insira uma tarefa que você precisa realizar no dia de hoje")
let tarefa1 = prompt("Insira mais uma tarefa que você precisa realizar no dia de hoje")
let tarefa2 = prompt("Insira uma terceira tarefa que você precisa realizar no dia de hoje")

listaDeTarefas.push(tarefa0)
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)

//c) Imprima o array no console

console.log(listaDeTarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

let tarefaRealizada = Number(prompt(`Digite o número da tarefa que você já realizou, de acordo com as seguintes opções: 
    0 -> ${tarefa0}
    1 -> ${tarefa1}
    2 -> ${tarefa2}`))

//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(tarefaRealizada, 1)

//f) Imprima o array no console Imprima no console

console.log(listaDeTarefas)






































