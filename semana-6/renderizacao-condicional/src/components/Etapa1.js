import React from "react"
import styled from "styled-components"


const TelaInicial = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding-bottom: 25px;
`

export default class Etapa1 extends React.Component {
    render() {
        return (
            <TelaInicial>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <h2>1. Qual o seu nome?</h2>
                <input
                    value={this.props.inputNome}
                    onChange={this.props.onChangeNome}
                    placeholder="Nome" />

                <h2>2. Qual sua idade?</h2>
                <input
                    value={this.props.inputIdade}
                    onChange={this.props.onChangeIdade}
                    placeholder="Idade" />

                <h2>3. Qual seu e-mail?</h2>
                <input
                    value={this.props.inputEmail}
                    onChange={this.props.onChangeEmail}
                    placeholder="Email" />

                <h2>4. Qual sua escolaridade</h2>
                <select
                    value={this.props.inputEscolaridade}
                    onChange={this.props.onChangeEscolaridade}
                    placeholder="Escolaridade"
                    >

                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Completo</option>
                    <option>Ensino Superior Incompleto</option>

                </ select>

            </TelaInicial>
        )
    }
}
