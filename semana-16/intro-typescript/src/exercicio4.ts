// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do
// arquivo typescript com o código abaixo?

// digitaria no terminal o seguinte código: npx tsc

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, 
// descreva as diferenças.

// digitaria no terminal o seguinte código: npx tsc

// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// digitaria no terminal o seguinte código: npx tsc ou tsc nomedoarquivo1.ts nomedoarquivo2.ts nomedoarquivo3.ts

// d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do 
// projeto ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou 
// sua atenção? O que mudou em comparação com o arquivo criado pelos slides?

// versão diferente (ts5 para ts6), arquivo padrão contém mais arquivos, (como o "strict": true, "esModuleInterop": true, 
// e vários outros, que no arquivo gerado automaticamente estão comentados) 