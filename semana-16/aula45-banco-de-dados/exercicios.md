```USE `maryam-matheus-guilherme`;```

## EXERCÍCIO 1

```CREATE TABLE Actor ( id VARCHAR(255) PRIMARY KEY, name VARCHAR (255) NOT NULL, salary FLOAT NOT NULL, birth_date DATE NOT NULL, gender VARCHAR(6) NOT NULL);```

### a. Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
#### id VARCHAR(255) e name VARCHAR (255) são utilizados para delimitar a possibilidade de 255 caracteres em uma string, o mesmo com gender VARCHAR(6), que pede male ou female, birth_date DATE pois pede uma data, sendo que nenhuma dessas querys pode estar em branco (NOT NULL);

### b. O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.


```SHOW DATABASES;```
```SHOW TABLES;```

#### SHOW DATABASES mostra todas as schemas cadastradas e SHOW TABLES mostra todas as tabelas cadastradas;

### c. O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando DESCRIBE Actor e explique os resultados.

```DESCRIBE Actor;```

#### Esse comando a estrutura da tabela, mostrando os nomes dos campos (id, name, etc), os tipos aceitos em cada campo, se os campos são obrigatórios ou não, se há algum valor padrão para esses campos, etc;

## EXERCÍCIO 2;

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male");```

### a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "002", "Glória Pires", 1200000, "1963-08-23", "female");```

### b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002.  Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e  explique porque esse erro aconteceu.

```Error Code: 1062. Duplicate entry '002' for key 'PRIMARY';```
```Isso acontece porque a chave ID 002 já existe, então para adicionar um novo elemento, precisaria usar uma chave vaga como a 003;```

```INSERT INTO Actor (id, name, salary, birth_date, gender)VALUES("002", "Nome Qualquer",1500,"1999-09-20", "female");```

### c. Error Code: 1136. Column count doesn't match value count at row 1
``` Isso acontece porque foram informadas apenas 3 colunas (id, name, salary) para se adicionar dados, mas estamos adicionando dados de 5 colunas da tabela; Precisamos adicionar os 2 parâmetros faltantes (birth_date e gender)```

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "003", "Fernanda Montenegro",300000,"1929-10-19", "female");```

### d. Error Code: 1364. Field "name" doesn't have a default value
``` como na criação da tabela foi informado que o campo "name" era obrigatório, e este não foi informado, será necessário informar um campo "name" para ser possível criar um novo integrante à tabela; ```

```INSERT INTO Actor (name, id, salary, birth_date, gender) VALUES( "Antônio Fagundes", "004", 400000, "1949-04-18", "male");```

### e. Error Code: 1292. Incorrect date value: "1950" for column "birth_date" at row 1;
```A data de nascimento informada está em números, porém o tipo "date" pede que o campo seja informado como string;```

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "005", "Juliana Paes", 719333.33, "1979-03-26", "female");```

### f. Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "006", "Lázaro Ramos", 200000, "1978-11-01", "male");```

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "007", "Taís Araújo", 200000, "1978-11-25", "female" );```

## EXERCÍCIO 3

```SELECT * FROM Actor;```
```SELECT id, salary from Actor ;```
```SELECT id, name from Actor WHERE gender = "male";```
### a. Escreva uma query que retorne todas as informações das atrizes

```SELECT * from Actor WHERE gender = "female";```

### b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos

```SELECT salary from Actor where name = "Tony Ramos";```

### c. Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado como todos os gêneros dos elementos foram definidos, a pesquisa não retornou nada;

```SELECT * FROM Actor WHERE gender = "invalid";```

### d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

```SELECT id, name, salary from Actor WHERE salary <= 500000;```

### e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta;

```Error Code: 1054. Unknown column "nome" in "field list". O campo "nome" não existe, mas sim "name"```

```SELECT id, nome from Actor WHERE id = "002" ERRADO```

```SELECT id, name from Actor WHERE id = "002";```

## EXERCÍCIO 4

```SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;```

### a. Explique com as suas palavras a query acima Selecione e exiba todos os parâmetros da tabela "Actor" cujo nome começe com as letras A ou J e cujo salário seja superior a R$300.000,00;

### b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

```SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;```

### c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 

```SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";```

### d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

```SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%")AND salary BETWEEN 350000 and 900000;```

## EXERCÍCIO 5

### a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

```criado uma tabela com campos id e name, aceitando strings de até 255 caracteres, um campo para a sinopse do tipo TEXT (com tamanho fixo de 65535 caracteres), um campo de DATE para a data de lançamento e um campo nota do tipo TINYINT, que armazena dados de 0 a 255. Todos os campos são obrigatórios;```

```CREATE TABLE Movie (id VARCHAR(255) PRIMARY KEY, name VARCHAR (255) NOT NULL, synopsys TEXT NOT NULL, release_date DATE NOT NULL, rating TINYINT NOT NULl);```

```INSERT INTO Movie (id, name, synopsys, release_date, rating) VALUES("001" , "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7), ("002" , "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),  ("003" , "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8), ("004" , "Dois Coelhos", "Após se envolver em um grave acidente automobilístico, no qual uma mulher e seu filho são mortos, Edgar (Fernando Alves Pinto) é indiciado, mas consegue escapar da prisão graças à influência de um deputado estadual. Logo em seguida ele parte para uma temporada em Miami, onde retorna com um elaborado plano em que pretende atingir tanto o deputado que o ajudou, símbolo da corrupção política, quanto Maicon (Marat Descartes), um criminoso que consegue escapar da justiça graças ao suborno de políticos influentes.", "2012-01-20", 8);```

## EXERCÍCIO 6

### a. Retorne o id, título e avaliação a partir de um id específico;

```SELECT id, name, rating from Movie WHERE ID = "001";```

### b. Retorne um filme a partir de um nome específico;

```SELECT  * FROM Movie WHERE name = "Se eu Fosse Você";```

### c. Retorne o id, título e sinopse dos filmes com avaliação mínima de 7;

```SELECT id, name, synopsys from Movie WHERE rating >= 7;```

## EXERCÍCIO 7 - Escreva uma query que:

### a. Retorna um filme cujo título contenha a palavra vida;
```SELECT * FROM Movie WHERE name LIKE "%vida%";```

### b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

```SELECT * FROM Movie WHERE name LIKE "%Coelhos%" OR synopsys LIKE "%Coelhos%";```

### c. Procure por todos os filmes que já tenham lançado;

```SELECT * FROM Movie WHERE release_date <= "2021-11-22";```

### d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 

``` SELECT * FROM Movie WHERE release_date <= "2021-11-22" AND (name LIKE "%Coelhos%" OR synopsys LIKE "%Coelhos%") ```