import react from "react"
import { AreaHome } from "../Home/styles.js"

const Home = (props) => {
    return (
        <AreaHome>

            <h1>LabeX</h1>

            <button onClick={() => props.changePage("Viagens")}>Viagens Disponíveis</button>
            <button onClick={() => props.changePage("Admin")}>Área do Administrador</button>




        </AreaHome>
    )
}

export default Home