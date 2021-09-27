import React from "react"
import styled from "styled-components"

const TelaInicial = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding-bottom: 25px;
`

export default class Final extends React.Component {


    render() {
        return (
            <TelaInicial>

                <h1>O FORMULÁRIO ACABOU</h1>

                <h2>Muito obrigado por participar! Entraremos em contato!</h2>




            </TelaInicial>
        )
    }
}