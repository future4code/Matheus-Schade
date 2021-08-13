// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number (prompt (`Digite a altura do retângulo abaixo`))
  const largura = Number (prompt (`Digite a largura do retângulo abaixo`))
  areaRetangulo = altura * largura
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number (prompt (`Digite abaixo o ano em que estamos`))
  const anoDeNascimento = Number(prompt (`Digite abaixo o ano do seu nascimento`))
  idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
  return (peso / (altura * altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt (`Digite abaixo o seu nome`)
  const idade = Number (prompt (`Digite abaixo a sua idade`))
  const email = prompt (`Digite abaixo o seu e-mail`)
  const infos = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(infos)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  primeiraCor = prompt (`Digite abaixo sua cor favorita`)
  segundaCor = prompt (`Digite abaixo sua segunda cor favorita`)
  terceiraCor =prompt (`Digite abaixo sua terceira cor favorita`)
  const arrayTresCores = [primeiraCor, segundaCor, terceiraCor]
  console.log(arrayTresCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  novoPrimeiro = array[array.length - 1]
  novoUltimo = array [0]
  array [0] = novoPrimeiro
  array [array.length - 1] = novoUltimo
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  anoAtual = Number (prompt (`Insira o ano atual`))
  anoNasc = Number (prompt (`Insira o ano do seu Nascimento`))
  anoRG = Number (prompt (`Insira o ano de emissão do seu RG`))
  idadeSujeito = anoAtual - anoNasc
  anosSemRenovar = anoAtual - anoRG

  possivel1 = 20 >= idadeSujeito && anosSemRenovar >= 5
  possivel2 = 50 >= idadeSujeito&& idadeSujeito >= 21 && anosSemRenovar >= 10
  possivel3 = 51 <= idadeSujeito && anosSemRenovar >= 15

  deveSerRenovada = possivel1 || possivel2 || possivel3
  console.log(deveSerRenovada)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maior = prompt("Você tem mais de 18? Sim ou não")
  const ensinoMedio = prompt(`Você tem ensino médio completo? Sim ou não`)
  const disponibilidade = prompt(`tem disponibilidade de horários? Sim ou não`)

  refMaior = maior.toLocaleLowerCase().trim().includes("sim")
  refEnsinoMedio = ensinoMedio.toLowerCase().trim().includes("sim")
  refDisponibilidade = disponibilidade.toLowerCase().trim().includes("sim")

  atendeCondicoes = refMaior && refEnsinoMedio && refDisponibilidade
  console.log (atendeCondicoes)

}

