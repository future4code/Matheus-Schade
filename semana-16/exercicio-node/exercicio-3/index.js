// Exercício 3:

// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova 
// tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da 
// execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const tasksList = require("./tasksList")

const newTask = process.argv[2]

tasksList.push(newTask)

if (newTask === tasksList[tasksList.length - 1]) {
    console.table(tasksList)
    console.log(`Tarefa "${tasksList[tasksList.length - 1]}" adicionada com sucesso!`)
} else {
    console.log("Erro")
}

