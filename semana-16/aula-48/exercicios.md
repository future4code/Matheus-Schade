```typescript
USE `maryam-matheus-guilherme`;
SET SQL_SAFE_UPDATES = 0;
´´´

## EXERCÍCIO 1;

```typescript
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
    ); 
```

### a. Explique o que é uma chave estrangeira;

#### FOREIGN KEY referencia propriedades de tabelas diferentes;

### b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes;

```typescript
INSERT INTO Rating (id, comment, rate, movie_id) VALUES (
"003", "Parece ser divertido", "5.5", "003"
);
```

### c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

```typescript
INSERT INTO Rating (id, comment, rate, movie_id) VALUES (
"004", "Parece ser divertido", "5.5", "999"
);
```

#### Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-matheus-guilherme`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

#### Não é possivel adicionar, já que a FOREIGN KEY precisa de uma PRIMARY KEY corresponte, e ela não existe nesse caso;

### d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating;

```typescript
ALTER TABLE Movie DROP COLUMN Rating;
```

### e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query;
DELETE FROM Movie WHERE id = "002";

#### Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-matheus-guilherme`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

#### Não foi possível deletar, já que esse filme está atrelado (por uma FOREIGN KEY) a outra tabela, necessitando excluir essa ligação para finalizar a exclusão;

### EXERCÍCIO 2

```typescript
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

### a. Explique, com as suas palavras, essa tabela;

#### Tabela que relaciona atores e filmes através de FOREIGN KEYS, ou seja, mostra em qual filme o ator participou;

### b. Crie, ao menos, 6 relações nessa tabela;

```tsx
INSERT INTO MovieCast (movie_id, actor_id) VALUES ("002", "001");
INSERT INTO MovieCast (movie_id, actor_id) VALUES ("002", "002");
INSERT INTO MovieCast (movie_id, actor_id) VALUES ("003", "001");
INSERT INTO MovieCast (movie_id, actor_id) VALUES ("003", "004");
INSERT INTO MovieCast (movie_id, actor_id) VALUES ("004", "001");
INSERT INTO MovieCast (movie_id, actor_id) VALUES ("004", "006");
```

### c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query;

```typescript
INSERT INTO MovieCast (movie_id, actor_id) VALUES ("008", "006");
```

#### Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-matheus-guilherme`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
#### Não é permitido, pois a FOREIGN KEY precisa de uma PRIMARY KEY corresponte, e ela não existe nesse caso;

### d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query;

```typescript
DELETE FROM Actor WHERE id = "001";
```

#### Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-matheus-guilherme`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

#### Não foi possível deletar, já que o Ator está atrelado (por uma FOREIGN KEY) a outra tabela (MovieCast), necessitando excluir essa ligação para finalizar a exclusão;

## EXERCÍCIO 3

```typescript
SELECT * FROM Movie 
INNER JOIN Rating 
ON Movie.id = Rating.movie_id;
```

### a. Explique, com suas palavras, a query acima. O que é o operador ON?

#### Essa query retorna os dados com IDs correspondentes (Movie.id = Rating.movie_id;), referente às tabelas Movie e Rating; o ON mostra quais as colunas devem corresponder em ambas as tabelas;

### b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

```typescript
SELECT name as "Nome do filme", Movie.id as "Código do filme", rate as "Nota do Filme" FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

# DESAFIOS

## EXERCÍCIO 4

### a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário;

```typescript
SELECT name as "Nome do filme", Movie.id as "Código do filme", rate as "Nota do Filme", comment as "Comentários" FROM Movie LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

### b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator;

```typescript
SELECT actor_id as "Código do Ator", movie_id as "Código do Filme onde atuou", name as "Nome do Filme onde atuou" FROM Movie RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id
```

### c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda);

```typescript
SELECT AVG(rate) as "Nota Média", name as "Nome do Filme" FROM Movie LEFT JOIN Rating ON Movie.id = Rating.movie_id GROUP BY Movie.id;
```

## EXERCÍCIO 5;

```typescript
SELECT * FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

### a. Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?

#### Ela junta as informações de 3 tabelas, por isso necessida de JOIN 2x; Essa tabela apresenta o todas as informações dos filmes(Movie) , bem como a do elenco(MovieCast) e seus detalhes(Actor)

### b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query;

```typescript
SELECT Movie.id as "Código do Filme", Movie.name as "Nome do Filme", actor_id as "Código do Ator",
Actor.name as "Nome do Ator" FROM Movie LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

### A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.

```typescript
SELECT Movie.id as movie_id, Movie,title, Actor.id as actor_id, Actor.name FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor a ON a.id = MovieCast.actor_id;
```

#### Error Code: 1054. Unknown column 'Movie' in 'field list'
#### Está sendo chamada uma coluna chamada "Movie", porém ela não existe, sendo apenas um nome de tabela. 

### Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)

```typescript
SELECT Movie.name as "Nome do Filme", Rating.rate as "Nota do filme", Rating.comment as "Comentário do filme", Actor.name as "Ator participante"
FROM Movie Movie.name as "Nome do Filme", Rating.rate as "Nota do filme", Rating.comment as "Comentário do filme", Actor.name as "Ator participante"
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
INNER JOIN Actor ON MovieCast.actor_id = Actor.id
INNER JOIN Rating ON Rating.movie_id = Movie.id;
```