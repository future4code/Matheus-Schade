## EXERCÍCIO 1

### a. É melhor utilizar IDs como strings, pois o uuid gera um id contendo números e letras, logo, um type number poderia quebrar o código;

### b. 

```tsx
import { v4 } from "uuid"

export class generateId {

    generatedId = ():string => v4();
}
```

## EXERCÍCIO 2

### a. Utilizando o knex para realizar a conexão com o banco de dados, foi criado um endpoint para inserir um usuário contendo id, email e password na tabela "User";

### b. 
```tsx
CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

### c. data/createUser.ts

## EXERCÍCIO 3

### a. Define que JWT_KEY virá como string, do contrário ela pode vir tanto como string quanto com a tipagem padrão do JWT;

### b.

```jsx
generateToken = (payload: authenticationData) => {

    const token = sign(
        payload,
        process.env.JWT_SECRET
    )

    return token;
}

export interface authenticationData {
   id: string
}
```

## EXERCÍCIO 5

### a. Crie uma função que retorne as informações de um usuário a partir do email:

```jsx
export const getUserByEmail = async (email: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from(userTableName)
        .where({ email });

    return result[0];
}
```

## EXERCÍCIO 7

### a. Define que qualquer tipo de caractere é aceito como "payload";






