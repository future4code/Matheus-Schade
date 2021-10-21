import React from "react"
import { useParams, useHistory } from "react-router-dom"
import { Body, Form, Main, Img } from "./styles"
import { countries } from "../../constants/countries"
import { useState } from "react"
import axios from "axios"
import { person, urlBase } from "../../constants/constants"
import { Header } from "../../components/components/Header/Header"
import Astro from "../../img/astro.jpg"


const ApplicationForm = () => {
    const history = useHistory()
    const params = useParams()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeAge = (event) => {
        setAge(event.target.value)
    }

    const onChangeText = (event) => {
        setApplicationText(event.target.value)
    }

    const onChangeProfession = (event) => {
        setProfession(event.target.value)
    }

    const onChangeCountry = (event) => {
        setCountry(event.target.value)
    }

    const applyToTrip = (id) => {
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country,
        }

        axios.post(`${urlBase}/${person}/trips/${params.id}/apply`, body)
            .then((res) => {
                alert("Candidatura registrada com sucesso!")
                setName("")
                setAge("")
                setApplicationText("")
                setProfession("")
                setCountry("")
                history.push(`/list-trip`)
            })
            .catch((err) => {
                alert("Erro na requisição", err)
            });
    }

    const goBack = () => {
        history.goBack()
    }

    return (

        <Body>
            <Header />

            <Main>

                <Img src ={Astro} alt="imagem"/>

                <Form>

                    <h1>Inscreva-se para a viagem selecionada</h1>
                    <input
                        placeholder={"Nome"}
                        required
                        onChange={onChangeName}
                        value={name} />
                    <input
                        placeholder={"Idade"}
                        value={age}
                        required
                        onChange={onChangeAge} />
                    <input
                        placeholder={"Texto de Candidatura"}
                        value={applicationText}
                        required
                        onChange={onChangeText} />
                    <input
                        value={profession}
                        placeholder={"Profissão"}
                        required
                        onChange={onChangeProfession} />

                    <select
                        placeholder={"País"}
                        name={"country"}
                        value={country}
                        onChange={onChangeCountry}
                        required>

                        <option value={""}>Escolha um País</option>
                        {countries.map((country) => {
                            return <option value={country} key={country}>{country}</option>
                        })}

                    </select>

                    <div>
                        <button onClick={goBack}>Voltar</button>
                        <button onClick={applyToTrip}>Enviar</button>
                    </div>
                </Form>

            </Main>
        </Body>
    )
}

export default ApplicationForm