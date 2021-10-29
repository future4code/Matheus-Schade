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
    const [commentList, setCommentList] = useState([])
    const [postDirection, setPostDirection] = useState([])
    const [commentDirection, setCommentDirection] = useState([])

    // Converter data no formato advindo da api

    const stringToDate = (date) => {
        let nwd = date && date.split("-")
        let year = nwd && nwd[0]
        let month = nwd && nwd[1]

        let newdt = nwd &&nwd[2].split("T")
        let day = newdt && newdt[0]
        let newHour = newdt && newdt[1].split(".")
        let moment = newHour && newHour[0]
        let time = moment && moment.split(":")
        let hour = time && time[0] - 3
        let minute = time && time[1]
        let second = time && time[2]
        let phrase = `${day && day}-${month && month}-${year && year}, às ${hour && hour}:${minute && minute}:${second && second}`
        return phrase
    }

    // Votar em um comentário

    const enjoyComment = (id, voteId) => {

        const index = commentDirection.findIndex((item) => item.postnumber === voteId)
        commentDirection.splice(index, 1)

        if (index === -1) {

            const body = {
                direction: 1,
            }
            axios.post(`${urlBase}/comments/${voteId}/votes`, body, {
                headers: {
                    Authorization: token,
                }
            })
                .then((response) => {
                    getPostComments(id)

                    const newCommentChoosen = {
                        postnumber: voteId,
                        status: response.status
                    }

                    const postIndex = commentDirection.findIndex((item) => item.postnumber === voteId)

                    if (postIndex === -1) {
                        setCommentDirection(
                            [...commentDirection, newCommentChoosen]

                        )
                    } else {
                        commentDirection.splice(postIndex, 1, newCommentChoosen)
                        setCommentDirection(commentDirection)
                    }

                })
                .catch((error) => {
                    alert(error.response)
                })
        } else {
            deleteVoteComment(id, voteId)
        }
    }

    const hateComment = (id, voteId) => {

        const index = commentDirection.findIndex((item) => item.postnumber === voteId)
        commentDirection.splice(index, 1)

        if (index === -1) {

            const body = {
                direction: -1,
            }
            axios.post(`${urlBase}/comments/${voteId}/votes`, body, {
                headers: {
                    Authorization: token,
                }
            })
                .then((response) => {
                    getPostComments(id)

                    const newPostChoosen = {
                        postnumber: voteId,
                        status: response.status
                    }

                    const postIndex = commentDirection.findIndex((item) => item.postnumber === voteId)

                    if (postIndex === -1) {
                        setCommentDirection(
                            [...commentDirection, newPostChoosen]
                        )
                    } else {
                        commentDirection.splice(postIndex, 1, newPostChoosen)
                        setCommentDirection(commentDirection)
                    }
                })
                .catch((error) => {
                    alert(error.response)
                })
        } else {
            deleteVoteComment(id, voteId)
        }
    }

    const deleteVoteComment = (id, voteId) => {

        axios.delete(`${urlBase}/comments/${voteId}/votes`, {
            headers: {
                Authorization: token,
            }
        })
            .then((response) => {
                getPostComments(id)

            })
            .catch((error) => {
                alert("Deu erro!")
            })
    }

    // Votar em um post:

    const enjoyPost = (type, id) => {

        const index = postDirection.findIndex((item) => item.postnumber === id)
        postDirection.splice(index, 1)

        if (index === -1) {


            const body = {
                direction: 1,
            }

            axios.post(`${urlBase}/${type}/${id}/votes`, body, {
                headers: {
                    Authorization: token,
                }
            })
                .then((response) => {
                    getPosts()

                    const newPostChoosen = {
                        postnumber: id,
                        status: response.status
                    }

                    const postIndex = postDirection.findIndex((item) => item.postnumber === id)

                    if (postIndex === -1) {
                        setPostDirection(
                            [...postDirection, newPostChoosen]
                        )
                    } else {
                        postDirection.splice(postIndex, 1, newPostChoosen)
                        setPostDirection(postDirection)
                    }

                })
                .catch((error) => {
                    alert(error.response)
                })


        } else {


            deleteVotePost(type, id)


        }

    }

    const hatePost = (type, id) => {

        const index = postDirection.findIndex((item) => item.postnumber === id)
        postDirection.splice(index, 1)

        if (index === -1) {


            const body = {
                direction: -1,
            }

            axios.put(`${urlBase}/${type}/${id}/votes`, body, {
                headers: {
                    Authorization: token,
                }
            })
                .then((response) => {
                    getPosts()

                    const newPostChoosen = {
                        postnumber: id,
                        status: response.status
                    }

                    const postIndex = postDirection.findIndex((item) => item.postnumber === id)

                    if (postIndex === -1) {
                        setPostDirection(
                            [...postDirection, newPostChoosen]
                        )
                    } else {
                        postDirection.splice(postIndex, 1, newPostChoosen)
                        setPostDirection(postDirection)
                    }

                })
                .catch((error) => {
                    alert("Deu erro!")
                })


        } else {


            deleteVotePost(type, id)


        }

    }

    const deleteVotePost = (type, id) => {

        axios.delete(`${urlBase}/posts/${id}/votes`, {
            headers: {
                Authorization: token,
            }
        })
            .then((response) => {
                getPosts()

            })
            .catch((error) => {
                alert("Deu erro!")
            })
    }

    // Comentar em um post;

    const createComment = (id) => {

        const body = {
            body: form.body
        }

        axios.post(`${urlBase}/posts/${id}/comments`, body, {
            headers: {
                Authorization: token,
            }
        })
            .then((response) => {
                alert("Comentário adicionado com sucesso!")
                getPostComments(id)

            })
            .catch((error) => {
                alert(error.response)
            })
    }

    const onSubmitNewComment = (event, id) => {
        event.preventDefault()
        clear()
        createComment(id)
        getPostComments(id)
    }

    // Pegar comentários dos posts

    const getPostComments = (id) => {
        axios.get(`${urlBase}/posts/${id}/comments`, {
            headers: {
                Authorization: token,
            }
        })
            .then((response) => {
                setCommentList(response.data)

            })
            .catch((error) => {
                alert(error.response)
            })
    }

    // Postar um novo Post

    const createPost = () => {
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
                getPosts()
            })
            .catch((error) => {
                alert("Não foi possível criar esse post, tente novamente mais tarde!")
            })

    }

    const onSubmitNewPost = (event, history) => {
        event.preventDefault()
        clear()
        createPost(history)
    }

    // Pegar lista de posts da API=

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
                console.log(error.response)
            })
    }

    useEffect(() => {
        getPosts()
    }, [token])

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
                alert(`Erro no login, tente novamente mais tarde!`, error.response.data.message)
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
            })
            .catch((error) => {
                alert(`Erro no cadastro, tente novamente mais tarde!`, error)
            })
    }

    const onSignUpForm = (event, history) => {
        event.preventDefault()
        clear()
        signUp(history)
    }

    return (
        <GlobalContext.Provider value={{
            stringToDate,
            enjoyComment,
            hateComment,
            commentList,
            hatePost,
            enjoyPost,
            onSubmitNewComment,
            getPostComments,
            onSubmitNewPost,
            getPosts,
            postList,
            rightButtonAction,
            rightButtonText,
            onSubmitForm,
            onSignUpForm,
            login,
            form,
            onChange,
            clear
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState