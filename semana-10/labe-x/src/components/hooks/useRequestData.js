import { useState, useEffect } from "react"
import axios from "axios"

export const useRequestData = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        setIsLoading(true) // ativo a flag de loading
        axios
            .get(url)
            .then((res) => {
                console.log("Requisiçao OK", res.data.trips)
                setData(res.data.trips)
                setIsLoading(false) // desativo a flag de loading em caso de sucesso
            })
            .catch((err) => {
                console.log("Erro Catch da requisição", err)
                setError(err)
                setIsLoading(false) // desativo a flag de loading em caso de falha
            });
    }, [url])

    return [data, isLoading, error]
}