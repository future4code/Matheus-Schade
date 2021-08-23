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

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

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