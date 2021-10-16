import { useParams } from "react-router"
import axios from "axios"
import { useEffect, useState } from "react"
import { Body, Description, Approved, Candidates } from "./styles"
import { useHistory } from "react-router-dom"
import { person, urlBase } from "../../constants/constants"
import { useProtectedPage } from "../../components/hooks/useProtectedPage"
import { VscTrash } from "react-icons/vsc"
import { Header } from "../../components/components/Header/Header"

export const Detail = (id) => {
    const [chosenTrip, setChosenTrip] = useState([])
    const history = useHistory()
    const params = useParams()
    const [idCandidate, setIdCandidate] = useState()

    const token = localStorage.getItem(`token`);

    useProtectedPage()

    useEffect(() => {
        getTripDetail()
    }, [chosenTrip])

    const getTripDetail = (id) => {
        axios.get(`${urlBase}/${person}/trip/${params.id}`, {
            headers: {
                auth: token,
            }
        })
            .then((response) => {
                setChosenTrip(response.data.trip)

            }).catch((error) => {
                alert(`Erro: `, error)
            })
    }

    const removeTrip = (id) => {
        if (window.confirm(`Deseja realmente apagar essa viagem?`)) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${person}/trips/${params.id}`, {
                headers: {
                    auth: token,
                }
            })
                .then((reponse) => {
                    alert('Viagem deletada com sucesso!')
                    history.push("/admin/trips-detail")
                })
                .catch((error) => {
                    alert('Não foi possível deletar essa viagem!.')
                })
        }
    }


    const decideCandidate = (candidateId, approve) => {
        const body = { approve: approve }
        axios.put(`${urlBase}/${person}/trips/${params.id}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: token,
            }
        })
            .then((response) => {
                setIdCandidate(candidateId)
                if (response.data.message === "Application approved successfully") {
                    alert(`O usuário foi APROVADO para a viagem!`)
                } else {
                    alert(`O usuário foi REPROVADO para a viagem!`)
                }

            })
            .catch((error) => {
                alert("Não foi possível realizar essa operação!")
            })
    }

    return (
        <Body>

            <Header />

            <h1>Detalhes da Viagem</h1>
            {chosenTrip ? (
                <Description>
                    <h1>{chosenTrip.name}</h1>
                    <p><strong>Data: </strong>{chosenTrip.date}</p>
                    <p><strong>Duração: </strong>{chosenTrip.durationInDays} dias</p>
                    <p><strong>Descrição da Viagem: </strong>{chosenTrip.description}</p>
                    <p><strong>Destino: </strong>{chosenTrip.planet}</p>
                    <p><strong>Nome: </strong>{chosenTrip.name}</p>
                    <button onClick={() => removeTrip(id)}> <VscTrash /> Deletar</button>
                </Description>

            ) : (
                <h2>Carregando...</h2>
            )}

            <h2> Candidatos </h2>
            {chosenTrip.candidates === undefined || chosenTrip.candidates.length === 0
                ? (
                    <Candidates>
                        <h3>Não há nenhum candidato para esta viagem!</h3>
                    </Candidates>
                ) : (
                    chosenTrip.candidates.map((item) => {
                        return (<Candidates key={item.id}>
                            <p><strong>Nome: {item.name}</strong></p>
                            <p><strong>Idade: </strong> {item.age}</p>
                            <p><strong>Profissão: </strong> {item.profession}</p>
                            <p><strong>País do candidato: </strong> {item.country}</p>
                            <p><strong>Solicitação: </strong>{item.applicationText}</p>
                            <p><strong>Id do candidato: </strong>{item.id}</p>
                            <div>
                                <button onClick={() => decideCandidate(item.id, true)}>Aprovar</button>
                                <button onClick={() => decideCandidate(item.id, false)}>Reprovar</button>
                            </div>
                        </Candidates>
                        )
                    })
                )}

            <h2> Aprovados </h2>
            {chosenTrip.approved === undefined || chosenTrip.approved.length === 0
                ? (
                    <Approved>
                        <h3>Não há nenhum aprovado para está viagem!</h3>
                    </Approved>

                ) : (
                    chosenTrip.approved.map((item) => {
                        return (<Approved key={item.id}>
                            <p><strong>Nome: </strong>{item.name}</p>
                            <p><strong>Idade: </strong> {item.age}</p>
                            <p><strong>Profissão: </strong> {item.profession}</p>
                            <p><strong>País do candidato: </strong> {item.country}</p>
                            <p><strong>Solicitação: </strong>{item.applicationText}</p>
                            <p><strong>Id do candidato: </strong>{item.id}</p>
                        </Approved>
                        )
                    })
                )}


        </Body>
    )
}