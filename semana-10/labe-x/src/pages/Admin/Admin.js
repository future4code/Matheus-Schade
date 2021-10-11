import { Body, ButtonsLogin } from "../Admin/styles.js"
import react from "react"

const Admin = (props) => {
    return (
        <Body>

            <h1>Login</h1>
            <input
                placeholder="E-mail" />
            <input
                placeholder="Senha" />

            <ButtonsLogin>
                <button onClick={() => props.changePage("Home")}>Voltar</button>
                <button>Entrar</button>
            </ButtonsLogin>



        </Body>
    )
}

export default Admin