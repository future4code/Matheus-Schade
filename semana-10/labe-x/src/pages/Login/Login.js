import { Body, ButtonsLogin, Form } from "./styles"
import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { person, urlBase } from "../../constants/constants"
import { Header } from "../../components/components/Header/Header"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()
        console.log(email, password)
        const body = {
            email: email,
            password: password,
        }
        axios.post(`${urlBase}/${person}/login`, body)
            .then((response) => {
                console.log(`DEU CERTO: `, response.data.token)
                localStorage.setItem(`token`, response.data.token)
                history.push(`/admin`)

            }).catch((error) => {
                console.log(`Deu errado: `, error)
            })
    }

    return (
        <Body>
            <Header />
            <Form onSubmit={onSubmitLogin}>
                <h1>Login</h1>
                <input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    required />
                <input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    required
                    onChange={onChangePassword} />

                <ButtonsLogin>
                    <button>Entrar</button>
                </ButtonsLogin>
            </Form>
        </Body>
    )
}

export default Login