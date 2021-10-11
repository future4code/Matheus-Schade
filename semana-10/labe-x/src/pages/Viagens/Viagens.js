import { useRequestData } from "../../components/hooks/useRequestData";
import react, { useState, useEffect } from "react"
import { CadaViagem, Body } from "./styles"

const aluno = "darvas"

export default function Viagens(props) {

    const [viagens, isLoadingViagens, errorRequest] = useRequestData(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)

    return (

        <Body>
            <div>
                <button onClick={() => props.changePage("Home")}>Voltar</button>
                <button>Inscrever-se</button>
            </div>

            <h1>Lista de Viagens</h1>

            {/* Caso de loading */}
            {isLoadingViagens && <h2>Carregando</h2>}

            {/* Caso de mensagem de erro */}
            {!isLoadingViagens && errorRequest && <p>{errorRequest.message} </p>}

            {/* Caso de retorno vazio  */}
            {!isLoadingViagens && viagens && viagens.length === 0 && (<p> Não foi encontrado nenhum resultado </p>)}

            {/* Caso de sucesso */}


            {viagens && viagens.map((item) => <CadaViagem key={item.id}>
                <h2>{item.name} </h2>
                <p>Planeta a ser visitado: {item.planet}</p>
                <p>Data: {item.date}</p>
                <p>Descrição: {item.description}</p>
                <p>Duração da Viagem: {item.durationInDays}</p>
            </CadaViagem>
            )}

        </Body>
    )
}

