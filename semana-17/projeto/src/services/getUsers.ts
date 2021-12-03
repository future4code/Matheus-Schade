import axios from "axios"
import { product } from "../types"

export const getUsers = async (user_id: string): Promise<any> => {

    const response = await axios.get(`http://localhost:3333/users`)

    const index = response && response.data && response.data.findIndex((user) => {
        return user.id === user_id
    })

    if (index > -1) {
        let value = response.data[index].id
        return value
    } else {
        let value = `Erro`
        return value
    }
}
