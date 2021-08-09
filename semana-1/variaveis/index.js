/* 
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
1. No console.log(b), será impresso o valor 10. No console.log(a,b), serão impressos os valores 10 e 5. Isso se dará porque a variável b é do tipo let, o que permite ela ser alterada, como aconteceu na segunda parte do programa, onde antes ela tinha valor 10 e passou a ter valor 5. Como a se manteve igual, terá valor 10.
2. No console.log (a, b, c) serão impressos os valores 10, 10 e 10. Isso porque as variáveis a, b e c foram igualadas a 10, a partir da terceira linha (de trás para frente, a=b, b=c, c=a e a=10)
3. Sugestão de novos nomes:
A variável p poderia ter o nome de horasTrabalhoPorDia
A variável t poderia ter o nome de valorTrabalhoPorDia
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1. Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
let Nome

//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade

//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log(typeof nome)
console.log(typeof idade)

// d) Reflita: por que esse tipo foi impresso? 
// Isso se dá pois o Undefined representa a falta de valor de uma variável, o que ocorre nesse caso, já que não foi declarado nenhum valor

//e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
nome = prompt("Qual é o seu nome?")
idade = prompt ("Qual é a sua idade?")

//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código

console.log(typeof nome)
console.log(typeof idade)

// Os tipos das variáveis, que anteriormente eram undefined, agora são string, pois a caixa de resposta do prompt fornece dados em texto.

//g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
console.log("Olá",nome,", você tem", idade, "anos")

/* 2)Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
Por exemplo: "Você está usando uma roupa azul hoje?". 
Depois, siga os passos:
a) Crie três novas variáveis, contendo as respostas */

const possuiCelularXiaomi = prompt("Você tem um celular da marca Xiaomi?")
const possuiNotebookLenovo = prompt("Você possui um notebook da marca Lenovo?")
const possuiTelevisaoPhilco = prompt("Você possui uma televisão da marca Philco?")

const celularMarcaXiaomi = possuiCelularXiaomi
const notebookMarcaLenovo = possuiNotebookLenovo
const televisaoMarcaPhilco = possuiTelevisaoPhilco

// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.

console.log("Você tem um celular da marca Xiaomi? -", celularMarcaXiaomi)
console.log("Você possui um notebook da marca Lenovo? -", notebookMarcaLenovo)
console.log("Você possui uma televisão da marca Philco? -", televisaoMarcaPhilco)

//3) RESOLUÇÃO:

let a = 10
let b = 25

a = b
const c = 10
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
