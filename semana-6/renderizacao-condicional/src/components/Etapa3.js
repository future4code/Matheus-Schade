import React from "react"
import styled from "styled-components"

const TelaInicial = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding-bottom: 25px;
`

export default class Etapa3 extends React.Component {


    render() {
        return (
            <TelaInicial>

                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <h2>5. Por que você não terminou um curso de graduação?</h2>
                <input />
                <h2>6. Você fez algum curso complementar?</h2>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso Técnico">Curso Técnico</option>
                    <option value="Curso de Inglês">Curso de Inglês</option>
                </ select>



            </TelaInicial>
        )
    }
}