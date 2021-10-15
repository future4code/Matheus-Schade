import { useState, useEffect } from "react"
import axios from "axios"

export const useRequestData = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const getData = () => {
        setIsLoading(true)
        axios.get(url)
            .then((res) => {
                setData(res.data.trips)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("Erro Catch da requisição", err)
                setError(err)
                setIsLoading(false)
            });
    }

    useEffect(() => {
        getData()
    }, [url])

    return [data, isLoading, error, getData]
}

