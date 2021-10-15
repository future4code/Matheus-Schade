import { useRequestData } from "../../components/hooks/useRequestData";
import { EachTrip, Body } from "./styles"
import { useHistory } from "react-router-dom"
import { person, urlBase } from "../../constants/constants"
import { Header } from "../../components/components/Header/Header"

export default function ListTripsPage(props) {
    const history = useHistory()

    const goToApplicationFormPage = (id) => {
        history.push(`/list-trip/applicationform/${id}`)
    }

    const [trips, isLoadingTrips, errorRequest] = useRequestData(
        `${urlBase}/${person}/trips`)



    return (

        <Body>
            <Header />

            <h1>Lista de Viagens</h1>
            {/* Caso de loading */}
            {isLoadingTrips && <h2>Carregando</h2>}

            {/* Caso de mensagem de erro */}
            {!isLoadingTrips && errorRequest && <p>{errorRequest.message} </p>}

            {/* Caso de retorno vazio  */}
            {!isLoadingTrips && trips && trips.length === 0 && (<p> Não foi encontrado nenhum resultado </p>)}

            {/* Caso de sucesso */}
            {trips && trips.map((item) => <EachTrip key={item.id}>
                <h2>{item.name} </h2>
                <p>Planeta a ser visitado: {item.planet}</p>
                <p>Data: {item.date}</p>
                <p>Descrição: {item.description}</p>
                <p>Duração da Viagem: {item.durationInDays} dias</p>
                <button onClick={() => goToApplicationFormPage(item.id)}>Inscrever-se</button>
            </EachTrip>
            )}

        </Body>
    )
}

