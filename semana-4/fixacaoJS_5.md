```function criarArrayNomesAnimais() {
   const animaisDoExemplo = [
    { nome: "Cachorro", classificacao: "mamífero" },
    { nome: "Papagaio", classificacao: "ave" },
    { nome: "Gato", classificacao: "mamífero" },
    { nome: "Carpa", classificacao: "peixe" },
    { nome: "Pomba", classificacao: "ave" }
]

const nomesDosAnimals = animaisDoExemplo.map(
    (item, indice, array) => {
        return item.nome
    })
    return nomesDosAnimals
}```