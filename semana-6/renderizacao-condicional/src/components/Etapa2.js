import React from "react"
import styled from "styled-components"

const TelaInicial = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding-bottom: 25px;
`

export default class Etapa2 extends React.Component {

    render() {
        return (
            <TelaInicial>

                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <h2>5. Qual o seu curso?</h2>
                <input />
                <h2>6. Qual a unidade de ensino?</h2>
                <input />



            </TelaInicial>
        )
    }
}