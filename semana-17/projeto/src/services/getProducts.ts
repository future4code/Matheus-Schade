import axios from "axios"

export const getProducts = async (product_id: string): Promise<any> => {

    const response = await axios.get(`http://localhost:3333/products`)

    const index = response && response.data && response.data.findIndex((product) => {
        return product.id === product_id
    })

    if (index > -1) {
        let value = Number(response.data[index].price.toFixed(2))
        return value
    } else {
        let value = `Erro`
        return value
    }
}
