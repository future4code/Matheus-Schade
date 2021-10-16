import { useRequestData } from "../../components/hooks/useRequestData";
import { EachTrip, Body } from "./styles"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { person, urlBase } from "../../constants/constants"
import { useProtectedPage } from "../../components/hooks/useProtectedPage"
import { useEffect } from "react";
import { Header } from "../../components/components/Header/Header"


export const TripDetails = () => {
    const history = useHistory()
    const token = localStorage.getItem(`token`);

    useProtectedPage()

    useEffect(() => {
        getData()
    })

    const [trips, isLoadingTrips, errorRequest, getData] = useRequestData(
        `${urlBase}/${person}/trips`)

    const goToDetailTripPage = (id) => {
        history.push(`/admin/trips-detail/${id}`)
    }

    const removeTrip = (id) => {
        if (window.confirm(`Deseja realmente apagar essa viagem?`)) {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${person}/trips/${id}`, {
            headers: {
                auth: token,
            }
        })
            .then((reponse) => {
                alert('Viagem deletada com sucesso!')
            })
            .catch((error) => {
                alert('Não foi possível deletar essa viagem!.')
            })}
    }


    return (
        <Body>

            <Header />

            <h1>Lista de Viagens</h1>

            {trips && trips.map((item) => <EachTrip key={item.id}>
                <h2>{item.name} </h2>
                <button onClick={() => goToDetailTripPage(item.id)}>Detalhes</button>
                <button onClick={() => removeTrip(item.id)}>Excluir Viagem</button>
            </EachTrip>
            )}


        </Body>
    )
}