## EXERCÍCIOS - AULA 46;
```USE `maryam-matheus-guilherme`;```
SET SQL_SAFE_UPDATES = 0;

## EXERCÍCIO 1
### A. DROP COLUMN remove a coluna "salary" da tabela;
### B. Altera a coluna "gender" para "sex" e delimita seu tipo como VARCHAR(6), ou seja, uma string que aceita apenas 6 caracteres;
### C. Altera o tipo da coluna "gender" para VARCHAR(255), ou seja, uma string que aceita 255 caracteres;
### D.
```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```

## EXERCÍCIO 2;
### a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003;

```UPDATE Actor SET name = "Dira Paes", birth_date = "1969-06-30" WHERE id = "003";```

### b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior;

```UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";```
```UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";```

### c. Escreva uma query que atualize todas as informações do ator com o id 005;
```UPDATE Actor SET name = "JULIANA PAES", salary = "166000", birth_date = "1978-03-26", gender = "not-binary", hometown = "Rio Bonito" WHERE id = "005";```
### d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado;

```UPDATE Actor SET name = "Carol Castro" WHERE id = "018";```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não mostra nenhum erro, porém não atualiza nenhuma linha, pois não há o id "018";

## EXERCÍCIO 3

### a. Escreva uma query que apague a atriz com o nome Fernanda Montenegro;

```DELETE FROM Actor WHERE name = "Fernanda Montenegro";```

### b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

```DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;```

## EXERCÍCIO 4

### a. Escreva uma query que pegue o maior salário de todos os atores e atrizes
```SELECT MAX(salary) FROM Actor;```
### b. Escreva uma query que pegue o menor salário das atrizes
```SELECT MIN(salary) FROM Actor WHERE gender = "female";```
### c. Escreva uma query que pegue a quantidade de atrizes
```SELECT COUNT(*) FROM Actor WHERE gender = "female";```
### d. Escreva uma query que pegue a soma de todos os salários
```SELECT SUM(salary) FROM Actor;```

## EXERCÍCIO 5
### a. Releia a última query. Teste-a. Explique o resultado com as suas palavras;
```SELECT COUNT(*), gender FROM Actor GROUP BY gender;```
#### Retorna a quantidade de itens de acordo com o gênero;
### b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética;
```SELECT id, name FROM Actor ORDER BY name DESC;```
### c. Faça uma query que retorne todos os atores ordenados pelo salário;
```SELECT * FROM Actor ORDER BY salary;```
### d. Faça uma query que retorne os atores com os três maiores salarios;
```SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;```
### e. Faça uma query que retorne a média de salário por gênero;
```SELECT AVG(salary), gender FROM Actor GROUP BY gender;```

## EXERCÍCIO 6
### a. Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema;
```ALTER TABLE Movie ADD playing_limit_date DATE;```
### b. Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5;
```ALTER TABLE Movie CHANGE rating rating FLOAT;```
### c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído;
```UPDATE Movie SET playing_limit_date = "2021-12-31" WHERE id = "002";```
```UPDATE Movie SET playing_limit_date = "2021-10-31" WHERE id = "004";```
### d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique;
```DELETE FROM Movie WHERE id = "001";```
```UPDATE Movie SET synopsys = "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam." WHERE id = "001";```
#### Não apresenta erro mas não faz nenhuma alteração, já que não existe tal id;

## EXERCÍCIO 7
### a. Quantos filmes em cartaz possuem avaliações maiores do que 7.5?
```SELECT count(*) FROM Movie WHERE rating > 7.5;```
### b. Qual a média das avaliações dos filmes?
```SELECT AVG(rating) FROM Movie;```
### c . Qual a quantidade de filmes em cartaz?
```SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();```
### d. Qual a quantidade de filmes que ainda irão lançar?
```SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();```
### e. Qual a maior nota dos filmes?
```SELECT MAX(rating) FROM Movie;```
### f. Qual a menor nota dos filmes?
```SELECT MIN(rating) FROM Movie;```

## EXERCÍCIO 8
### a. Retorne todos os filmes em ordem alfabética;
```SELECT * FROM Movie ORDER BY name ASC;```
### b. Retorne os 5 primerios filmes em ordem descrente alfabética;
```SELECT * FROM Movie ORDER BY name DESC LIMIT 5;```
### c. Retorne os 3 filmes mais recentes em cartaz;
```SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;```
### d. Retorne os 3 filmes melhor avalidos;
```SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;```
```SELECT * FROM Movie;```
