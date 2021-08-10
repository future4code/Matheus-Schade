// Exercícios de interpretação de código
//1) Leia o código abaixo. Indique todas as mensagens 
//impressas no console, SEM EXECUTAR o programa
//1)a. false
//1)b. false
//1)c. true
//1)d. boolean

//2) Seu colega se aproxima de você falando que o código 
//dele não funciona como devia.  Vamos ajudá-lo: consegue 
//perceber algum problema? O que será impresso no console? 
//RESPOSTA: o erro está em somar duas strings em texto.
//se não arrumar, vai simplesmente juntar os números digitados,
//deixando-os um ao lado do outro;

//3) Para o exercício anterior, sugira ao seu colega uma solução para 
//que o valor impresso no console seja, de fato, a soma dos dois números.

//para resolver o problema, ele deverá alterar:

//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")

//para

//let primeiroNumero = Number (prompt("Digite um numero!"))
//let segundoNumero = Number (prompt("Digite outro numero!"))


// Exercícios de escrita de código

//1. Faça um programa que:
//a) pergunte a idade do usuário:

let suaIdade = Number(prompt("Quantos anos você tem?"))

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let melhorAmigoIdade = Number(prompt("Quantos anos seu melhor amigo tem?"))

//c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a 
//do seu melhor amigo?", seguido pela resposta (true ou false)

console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > melhorAmigoIdade)

//d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)

console.log("A diferença de idade entre vocês é de", suaIdade - melhorAmigoIdade, "ano(s)")

//2.Faça um programa que:
//a) Peça ao usuário que insira um número par:

let numero1 = Number(prompt("Por favor, insira um número par"))
let par = 2

//b) Imprima na console o resto da divisão desse número por 2.

console.log("Resto da divisão:", numero1 % par)

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// o resto sempre será 0, pois quando se divide qualquer número par por 2, o resultado sempre será
//um número inteiro, ou seja, que não apresenta decimal. Logo, o resto sempre é 0;

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// o resto sempre será 1, pois quando se divide um número ímpar pela metade, sempre dará um valor decimal,
// ou seja, numa divisão o resto sempre vai ser 1;

//3) Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console:

const idade = Number(prompt("Por favor, insira sua idade"))
const mesesDoAno = 12
const diasDoMes = 30
const horasDoDia = 24

//a) A idade do usuário em meses:

const idadeEmMeses = idade * mesesDoAno
console.log("Sua idade em meses é de:", idadeEmMeses)

//b) A idade do usuário em dias:

const idadeEmDias = idadeEmMeses * diasDoMes
console.log("Sua idade em dias é de:", idadeEmDias)

//c) A idade do usuário em horas:

const idadeEmHoras = idadeEmDias * horasDoDia
console.log("Sua idade em horas é de:", idadeEmHoras)

//4) Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações 
//e imprima no console as seguintes mensagens seguidas pelo true ou false:

const primeiroNumero = Number(prompt("Por favor, insira um número"))
const segundoNumero = Number(prompt("Por favor, insira outro número"))

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)

console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)

console.log("O primeiro numero é divisível pelo segundo?", (primeiroNumero % segundoNumero) === 0)

console.log("O segundo numero é divisível pelo primeiro?", (segundoNumero % primeiroNumero) === 0)