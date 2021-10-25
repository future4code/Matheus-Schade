import React from "react"
import Header from "../../components/Header/Header"


const Cadastro = () => {
  return (
    <div>
      <Header />
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
