import { Adress } from "../types"
import axios from "axios"

export const getAddressInfo = async (cep: string): Promise<Adress> => {

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    return {
        address: response.data.logradouro,
        neighborhood: response.data.bairro,
        city: response.data.localidade,
        state: response.data.uf,
    }
}