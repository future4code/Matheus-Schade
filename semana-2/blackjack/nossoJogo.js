
console.log(`Boas vindas ao jogo de Blackjack!`)

if(confirm(`Quer iniciar uma nova rodada?`)) {
	// o que fazer se o usuário clicar "ok"

   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Computador = comprarCarta()
   let carta2Computador  = comprarCarta()

   let totalUsuario = Number (carta1Usuario.valor) + (carta2Usuario.valor)
   let totalComputador = Number (carta1Computador.valor) + (carta2Computador.valor)   

   if (totalComputador > totalUsuario) {
      console.log(`Usuário - cartas: ${carta1Usuario.texto} e ${carta2Usuario.texto} - pontuação ${totalUsuario} `)
      console.log(`Computador - cartas: ${carta1Computador.texto} e ${carta2Computador.texto} - pontuação ${totalComputador} `)
      console.log("O computador ganhou!")

   } else if (totalUsuario > totalComputador) {
      console.log(`Usuário - cartas: ${carta1Usuario.texto} e ${carta2Usuario.texto} - pontuação ${totalUsuario} `)
      console.log(`Computador - cartas: ${carta1Computador.texto} e ${carta2Computador.texto} - pontuação ${totalComputador} `)
      console.log("O usuário ganhou!")
   } else {
      console.log(`Usuário - cartas: ${carta1Usuario.texto} e ${carta2Usuario.texto} - pontuação ${totalUsuario} `)
      console.log(`Computador - cartas: ${carta1Computador.texto} e ${carta2Computador.texto} - pontuação ${totalComputador} `)
      console.log("Empate!")
   }

} else {
	console.log(`O jogo acabou!`)
}















