// Exercício 2:
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operator = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

if (!operator || !firstNumber || !secondNumber ) {
    console.log(`ERRO: Você esqueceu de algum atributo ou digitou algo errado. Digite "npm run start" "operador (add/sub/mult/div)" "primeiro número" "segundo numero"`)
} else {
    if (operator === "add") {
        console.log(`Resposta: ${firstNumber + secondNumber}`)
    } else if (operator === "sub") {
        console.log(`Resposta: ${firstNumber - secondNumber}`)
    } else if (operator === "mult") {
        console.log(`Resposta: ${firstNumber * secondNumber}`)
    } else if (operator === "div") {
        console.log(`Resposta: ${firstNumber / secondNumber}`)
    } else {
        console.log(`Erro!`)
    }
}




