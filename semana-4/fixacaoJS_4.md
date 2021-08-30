```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   let verificaRepeticoes = arrayDeNumeros.filter(
      (item, index, array) => {
         return item === numeroEscolhido
      })
   if (verificaRepeticoes.includes(numeroEscolhido) === true) {
      return `O número ${numeroEscolhido} aparece ${verificaRepeticoes.length}x`
   } else {
      return `Número não encontrado`
   }
}```