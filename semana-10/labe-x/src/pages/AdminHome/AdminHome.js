import { Body, ButtonCard } from "./styles"
import { useHistory } from "react-router-dom"
import { useProtectedPage } from "../../components/hooks/useProtectedPage"
import { Header } from "../../components/components/Header/Header"

export const AdminHome = () => {
    const history = useHistory()

    useProtectedPage()

    const goToTripsDetail = () => {
        history.push("/admin/trips-detail")
    }

    const goToCreateTrip = () => {
        history.push("/admin/create-trip")
    }

    const logout = () => {
        localStorage.removeItem('token')
        history.push("/")
    }

    return (
        <Body>
            <Header />

            <h1>Admin Home</h1>

            <ButtonCard>

                <button onClick={goToCreateTrip}>Criar Viagens</button>
                <button onClick={goToTripsDetail}>Listar Viagens</button>
                <button onClick={logout}>Log Out</button>

            </ButtonCard>

        </Body>
    )
}