import React from "react"


const Cadastro = () => {
  return (
    <div>
      
      <form>

        <input
          placeholder={"Nome de Usuário"}
        />
        <input
          placeholder={"E-mail"}
        />
        <input
          placeholder={"Senha"}
        />

        <button>Cadastrar</button>

      </form>

      <div>

        <p>Já tem uma conta? Faça login!</p>
        <button>Login</button>

      </div>
    </div>
  )
}

export default Cadastro;
