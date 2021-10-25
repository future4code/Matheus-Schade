import styled from "styled-components"
import { Color5 } from "../../constants/colors";

export const LoginScreen = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 100vh;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

input {
    margin-top: 10px;
    width: 24%;
    height: 2.4em;
}
button {
    margin-top: 10px;
    height: 2.4em;
    width: 8vw;
    border: 1px solid grey;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${Color5};
}
`

export const Cadastro = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`