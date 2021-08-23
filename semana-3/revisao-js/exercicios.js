// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort(function(a, b){return a - b})
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   novoArray = []
   for (let number of array){
       if (number % 2 === 0) {
           novoArray.push(number) 
       }
}
   return novoArray
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   novoArray = []
   for (let i = 0 ; i < array.length ; i++) {
       if (array[i] % 2 === 0) {
           novoArray.push(array[i] * array[i]) 
       }
   }
   return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let maior = 0
   for (let num of array) {
       if (num > maior) {
           maior = num
       }
   }
   return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   objetoEntreDoisNumeros = {}
   if (num1 > num2){
       objetoEntreDoisNumeros.maiorNumero = num1
   } else {
       objetoEntreDoisNumeros.maiorNumero = num2
   }

   if (num1 >= num2 && num1 % num2 === 0) {
       objetoEntreDoisNumeros.maiorDivisivelPorMenor = true
   } else if (num1 < num2 && num2 % num1 === 0) {
       objetoEntreDoisNumeros.maiorDivisivelPorMenor = true
   } else {
       objetoEntreDoisNumeros.maiorDivisivelPorMenor = false
   }

   if (num1 > num2) {
       objetoEntreDoisNumeros.diferenca = num1 - num2
   } else {
       objetoEntreDoisNumeros.diferenca = num2 - num1
   }
   return objetoEntreDoisNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

   let novoArrayQualquer = []
   let i = 0
   while (i < n) {
       novoArrayQualquer[i] = i * 2
       i++
   }
   
  return novoArrayQualquer
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
   if (ladoA === ladoB && ladoB === ladoC) {
      return "Equilátero"
  } else if (ladoA === ladoB && ladoA !== ladoC) {
      return "Isósceles"
  } else if (ladoA === ladoC && ladoC !== ladoB) {
      return "Isósceles"
  } else if (ladoB === ladoC && ladoA !== ladoB) {
      return "Isósceles"
  } else {
      return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   let arraySegundoEPenultimo = []
   array.sort(function(a, b){return a - b})
   arraySegundoEPenultimo.push(array[array.length - 2])
   arraySegundoEPenultimo.push(array[1])
   return arraySegundoEPenultimo
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return novoUsuario = {... pessoa,
      nome: "ANÔNIMO"
      }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}