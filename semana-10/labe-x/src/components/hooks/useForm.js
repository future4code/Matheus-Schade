import { useState } from "react"

export const useForm = (inicialState) => {
    const [form, setForm] = useState(inicialState)

    const onChangeForm = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const cleanFields = () => {
        setForm(inicialState)
    }

    return { form, onChangeForm, cleanFields }
}
