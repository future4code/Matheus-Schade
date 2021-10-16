import { AreaHome, Body, Buttons } from "./styles"
import { useHistory } from "react-router-dom"
import { Header } from "../../components/components/Header/Header"

const Home = () => {
    const history = useHistory()
    const token = localStorage.getItem(`token`);

    const goToListTripsPage = () => {
        history.push("/list-trip")
    }

    const goToAdminPage = () => {
        history.push("/admin")
    }

    const goToLoginArea = () => {
        if (token !== null && token !== undefined) {
            goToAdminPage()
        } else {
            history.push("/login")
        }
    }

    return (
        <Body>
            <Header />
            <AreaHome>
            {/* <h1></h1> */}

                <Buttons>
                    <button onClick={goToListTripsPage}>Viagens Disponíveis</button>
                    <button onClick={goToLoginArea}>Área do Administrador</button>
                </Buttons>
            </AreaHome>
        </Body>
    )
}

export default Home