import { AreaHome } from "./styles"
import { useHistory } from "react-router-dom"

const Home = () => {
    const history = useHistory()
    const token = localStorage.getItem(`token`);
    console.log(token)

    const goToListTripsPage = () => {
        history.push("/list-trip")
    }

    const goToAdminPage = () => {
        history.push("/admin")
    }

    const goToLoginArea = () => {
        if (token !== null && token !== undefined ) {
            goToAdminPage()
        } else {
            history.push("/login")
        }
    }

    return (
        <AreaHome>

            <h1>LabeX</h1>
            <button onClick={goToListTripsPage}>Viagens Disponíveis</button>
            <button onClick={goToLoginArea}>Área do Administrador</button>

        </AreaHome>
    )
}

export default Home