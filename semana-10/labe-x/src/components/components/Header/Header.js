import { Head } from "./styles"
import { useHistory } from "react-router-dom"

export const Header = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToHome = () => {
        history.push(`/`)
    }



    return (
        <Head>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToHome}>Home</button>

        </Head>
    )
}