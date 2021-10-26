import React, { useState } from "react"
import { GlobalContext } from "./GlobalContext"
import axios from "axios"
import { urlBase } from "../constants/url"
import useForm from "../hooks/useForm"
import { goToFeed, goToLogin } from "../routes/coordinator"

const GlobalState = (props) => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "LOGOUT" : "LOGIN")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = (history) => {
        if (token) {
            logout()
            setRightButtonText("LOGIN")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }

    // Formulário de login:

    const login = (history) => {
        axios.post(`${urlBase}/users/login`, form)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem(`token`, response.data.token)
                goToFeed(history)
                setRightButtonText("LOGOUT")
            })
            .catch((error) => {
                alert(`Erro no login, tente novamente mais tarde!`, error.response.data.message)
                console.log(error.response.data.message)
            })
    }

    const onSubmitForm = (event, history) => {
        event.preventDefault()
        console.log(`Formulário enviado!`, form)
        clear()
        login(history)
    }

    // Formulário de Cadastro:

    const signUp = (history) => {
        axios.post(`${urlBase}/users/signup`, form)
            .then((response) => {
                localStorage.setItem(`token`, response.data.token)
                goToFeed(history)
                setRightButtonText("LOGOUT")
                alert(`Deu certo!`)
            })
            .catch((error) => {
                alert(`Erro no cadastro, tente novamente mais tarde!`, error.response.data.message)
                console.log(error.response.data.message)
            })
    }

    const onSignUpForm = (event, history) => {
        event.preventDefault()
        console.log(`Formulário enviado!`, form)
        clear()
        signUp(history)
    }

    return (
        <GlobalContext.Provider value={{ rightButtonAction, rightButtonText, onSubmitForm, onSignUpForm, login, form, onChange, clear }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState