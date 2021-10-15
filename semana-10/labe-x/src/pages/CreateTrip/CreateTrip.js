import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { Body, Form } from "./styles"
import { person, urlBase } from "../../constants/constants"
import { useProtectedPage } from "../../components/hooks/useProtectedPage"
import { Header } from "../../components/components/Header/Header"
import { useForm } from "../../components/hooks/useForm"

export const CreateTrip = () => {
    useProtectedPage()

    const history = useHistory()
    const token = localStorage.getItem(`token`)

    const { form, onChangeForm, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    })
    // const [form, setForm] = useState({
    //     name: "",
    //     planet: "",
    //     date: "",
    //     description: "",
    //     durationInDays: "",
    // })

    // const onChangeForm = (event) => {
    //     const { name, value } = event.target
    //     setForm({ ...form, [name]: value })
    //     // setForm({ ...form, [event.target.name]: event.target.value })
    // }

    const newTripAdmin = (event) => {
        event.preventDefault()

        axios.post(`${urlBase}/${person}/trips`, form, {
            headers: {
                auth: token,
            }
        })
            .then((res) => {
                console.log("Requisiçao OK", res.data)
                alert("Viagem criada com sucesso!")
                // history.push(`/admin`)
                cleanFields()
            })
            .catch((err) => {
                console.log("Erro Catch da requisição", err.messagem)
                alert(`Não foi possível criar essa viagem. Tente novamente mais tarde!`)
            });
    }

    return (
        <Body>
            <Header />

            <h1>Criar nova viagem</h1>

            <Form onSubmit={newTripAdmin}>
                <input
                    placeholder="Título da Viagem"
                    name="name"
                    value={form.name}
                    type="text"
                    onChange={onChangeForm}
                    pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{10,}'
                    title={'Digite um título para sua viagem com pelo menos 10 caracteres'}
                    required />
                <input
                    placeholder="Planeta"
                    name="planet"
                    value={form.planet}
                    type="text"
                    onChange={onChangeForm}
                    required />
                <input
                    placeholder="Data da Viagem"
                    name="date"
                    value={form.date}
                    type="date"
                    onChange={onChangeForm}
                    required />
                <input
                    placeholder="Descrição"
                    name="description"
                    value={form.description}
                    type="text"
                    onChange={onChangeForm}
                    pattern='[0-9 A-Z a-z áàâãéèêíïóôõöúçñ]{5,}'
                    title={'Digite uma descrição para sua viagem com pelo menos 5 caracteres'}
                    required />
                <input
                    placeholder="Duração da viagem (em dias)"
                    name="durationInDays"
                    value={form.durationInDays}
                    type="number"
                    onChange={onChangeForm}
                    required />
                <button>Salvar Viagem</button>
            </Form>

        </Body>
    )
}