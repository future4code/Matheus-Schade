import { useEffect } from "react"
import { useHistory } from "react-router"

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            alert("Você não está logado! Faça o login para poder acessar essa página")
            history.push(`/login`)
        }
    }, [])
}