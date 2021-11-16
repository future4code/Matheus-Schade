

// Exercício 1:
// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros 
// passados na linha de comando para o Node?
// Depois de salvá-lo, acessamos através do process.argv[índice onde foi salvo]

// Responda como comentário no seu código: como fazemos para acessar os parâmetros 
// passados na linha de comando para o Node?

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdadeMaisSete = idade + 7

if (!nome || !idade) {
    console.log(`ERRO: Você esqueceu de digitar o nome ou da idade ou digitou algo errado. Digite "npm run start "nome" "idade", nessa ordem!`)
} else {
    console.log(`LETRA B::: Olá, ${nome}! Você tem ${idade} anos.`)
    console.log(`LETRA C::: Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdadeMaisSete} anos`)
}





