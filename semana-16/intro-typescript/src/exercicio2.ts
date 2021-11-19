// Observe a função a seguir, escrita em JavaScript:

function obterEstatisticas(numeros: number[]): { maior: number, menor: number, media: number } {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// exemplo: console.log(obterEstatisticas([0, 12, 5, 176])) retorna // { maior: 176, menor: 0, media: 48.25 }

type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e 
// faça a tipagem desses parâmetros
// A entrada é um array de números e a saída é um objeto com o maior número, menor número e a média 

// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 

// let soma: number = 0

// const numerosOrdenados: Array<number> = numeros.sort(
//     (a, b) => a - b
// )

// const estatisticas: { maior: number, menor: number, media: number } = {
//     maior: numerosOrdenados[numeros.length - 1],
//     menor: numerosOrdenados[0],
//     media: soma / numeros.length
// }

// c. Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com as chaves **numeros** e 
// **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type Amostra = {
    numeros: number[],
    soma: number,
    obterEstatisticas: (numeros: number[]) => { maior: number, menor: number, media: number },
}