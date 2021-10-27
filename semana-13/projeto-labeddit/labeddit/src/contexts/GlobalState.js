import React, { useState, useEffect } from "react"
import { GlobalContext } from "./GlobalContext"
import axios from "axios"
import { urlBase } from "../constants/url"
import useForm from "../hooks/useForm"
import { goToFeed, goToLogin } from "../routes/coordinator"

const GlobalState = (props) => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "", title: "", body: "" })
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "LOGOUT" : "LOGIN")
    const [postList, setPostList] = useState([])

    // Postar um novo comentário

    const createComment = () => {
        const body = {
            title: form.title,
            body: form.body
        }
        axios.post(`${urlBase}/posts`, body, {
            headers: {
                Authorization: token,
            }
        })
            .then((response) => {
                alert("Post criado com sucesso!")
            })
            .catch((error) => {
                //    alert(error.response.data.message)
            })

    }

    const onSubmitComment = (event, history) => {
        event.preventDefault()
        console.log(`Formulário enviado!`, form)
        clear()
        createComment(history)
    }

    // Pegar lista de posts da API

    const getPosts = () => {
        axios.get(`${urlBase}/posts`, {
            headers: {
                Authorization: token,
            }
        })
            .then((response) => {
                setPostList(response.data)
            })
            .catch((error) => {
                //    alert(error.response.data.message)
            })
    }

    useEffect(() => {
        getPosts()
    }, [token, postList])

    // Botão de Login / Logout

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
                localStorage.setItem(`token`, response.data.token)
                goToFeed(history)
                setRightButtonText("LOGOUT")
            })
            .catch((error) => {
                // alert(`Erro no login, tente novamente mais tarde!`, error.response.data.message)
                // console.log(error.response.data.message)
            })
    }

    const onSubmitForm = (event, history) => {
        event.preventDefault()
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
                // alert(`Deu certo!`)
            })
            .catch((error) => {
                // alert(`Erro no cadastro, tente novamente mais tarde!`, error)
            })
    }

    const onSignUpForm = (event, history) => {
        event.preventDefault()
        console.log(`Formulário enviado!`, form)
        clear()
        signUp(history)
    }

    return (
        <GlobalContext.Provider value={{ onSubmitComment, postList, rightButtonAction, rightButtonText, onSubmitForm, onSignUpForm, login, form, onChange, clear }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState