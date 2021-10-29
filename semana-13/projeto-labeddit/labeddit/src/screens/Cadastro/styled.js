import styled from "styled-components"
import { Color1, Color4, Color5 } from "../../constants/colors";

export const SignUpScreen = styled.div`
margin-top: 10vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
max-height: 100vh;
`

export const SignUpImage = styled.div`
width: 33.25vw;
margin-top: 25px;
img {
    width: 100%;
    max-height: 80vh;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

input {
    margin-top: 2.5vh;
    width: 33%;
    height: 2.4em;
    border: 1px solid ${Color1};
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: ${Color1};
}
button {
    margin-top: 2.5vh;
    height: 2.4em;
    width: 33.6vw;
    border: 1px solid ${Color1};
    border-radius: 10px;
    cursor: pointer;
    background-color: ${Color1};
    color: white;
}
`

export const Login = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const LoginButton = styled.button`
    margin-top: 5vh;
    height: 2.4em;
    width: 33.6vw;
    border: none;
    cursor: pointer;
    color: ${Color1};
    background-color: white;
    
    :hover {
        background-color: ${Color5};
        border-radius: 10px;
    }
    :active {
        background-color: ${Color4};
        border-radius: 10px;
    }
`