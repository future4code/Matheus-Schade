import { connection } from "./connection";

connection.raw(`

   CREATE TABLE User (
      id VARCHAR(255) PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
  );
  
`).then(() => {
   console.log("Tabelas criadas!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(() => {
   connection.destroy()
})