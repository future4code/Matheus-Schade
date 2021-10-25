import React from "react"
import Header from "../../components/Header/Header"
import { Form, LoginScreen, Cadastro } from "./styled"

const Login = () => {
  return (
    <LoginScreen>
      <Header />
      <Form>

        <input
          placeholder={"E-mail"}
        />
        <input
          placeholder={"Senha"}
        />

        <button>Entrar</button>

      </Form>

      <Cadastro>

        <p>Não tem uma conta? Cadastre-se!</p>
        <button>Cadastro</button>

      </Cadastro>
    </LoginScreen>
  )
}

export default Login;
