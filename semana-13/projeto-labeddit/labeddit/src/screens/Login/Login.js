import React, { useContext, useEffect } from "react"
import { Form, LoginScreen, Cadastro, CadastroButton, LoginImage } from "./styled"
import { goToCadastro } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import loginImg from "../../assets/login.jpg"

const Login = () => {
  const history = useHistory()
  const token = localStorage.getItem("token")
  useUnprotectedPage()

  const { onSubmitForm, form, onChange} = useContext(GlobalContext);

  return (
    <LoginScreen>

      <LoginImage>
        <img src={loginImg} alt="login logo" />
      </ LoginImage>
      <Form onSubmit={(event) => onSubmitForm(event, history)}>

        <input
          placeholder={"E-mail"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          type={"email"}

        />
        <input
          placeholder={"Senha"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
          type={"password"}
          title={`Sua senha deve possuir no mínimo 8 e no máximo 30 caracteres`}
          pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{8,}'
        />

        <button>ENTRAR</button>

      </Form>

      <Cadastro>

        <CadastroButton onClick={() => goToCadastro(history)}><strong>NÃO TEM UMA CONTA? CLIQUE AQUI E CADASTRE-SE</strong></CadastroButton>


      </Cadastro>
    </LoginScreen>
  )
}

export default Login;
