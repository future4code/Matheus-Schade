import React, { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { Form, SignUpScreen, Login, LoginButton, SignUpImage } from "./styled"
import { goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom"
import signUpImg from "../../assets/sign.jpg"

const Cadastro = () => {
  const history = useHistory()
  useUnprotectedPage()

  const { onSignUpForm, form, onChange } = useContext(GlobalContext);

  return (
    <SignUpScreen>

      <SignUpImage>
        <img src={signUpImg} alt="login logo" />
      </ SignUpImage>

      <Form onSubmit={(event) => onSignUpForm(event, history)}>
        <input
          placeholder={"Nome de usuário"}
          name={"username"}
          value={form.username}
          onChange={onChange}
          required
          type={"username"}
          title={`Nome de usuário deve possuir no mínimo 3 caracteres`}
          pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{3,}'
        />

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
          title={`Senha deve possuir no mínimo 8 e no máximo 30 caracteres`}
          pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{8,}'
        />

        <button>Cadastrar</button>

      </Form>

      <Login>

        <LoginButton onClick={() => goToLogin(history)}><strong>JÁ TEM UMA CONTA? FAÇA LOGIN</strong></LoginButton>

      </Login>
    </SignUpScreen>
  )
}

export default Cadastro;
