import React from "react";
import styled from "styled-components"

const RegistroDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const ButtonChange = styled.button`
width: 18vw;
margin: 10px;
background-color: #2D3058;
color: white;
:hover {
    background-color: #2D3040;
}
:active {
    background-color: #2D3020;
}
`
const BoxRegistro = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
width: 20%;
margin: 0 auto;
padding: 15px;
`
const ButtonBoxRegistro = styled.div`
background-color: #2D3058;
color: white;
padding: 8px 16px;
margin: 15px auto;
cursor: pointer;
:hover {
    background-color: #2D3040;
}
:active {
    background-color: #2D3020;
}
`
export default class Registro extends React.Component {
    render() {
        return (
            <div>
                <RegistroDiv>
                    
                    <ButtonChange onClick={this.props.onClickMudaDePagina}>Ir para a Página de Lista</ButtonChange>
                    <BoxRegistro>
                        <h3>Insira um novo Usuário</h3>

                        <label>Nome</label>
                        <input
                            value={this.props.inputNovoNome}
                            onChange={this.props.onChangeinputNovoNome}
                        />
                        <label>E-mail</label>
                        <input
                            value={this.props.inputNovoEmail}
                            onChange={this.props.onChangeinputNovoEmail}
                        />
                        <ButtonBoxRegistro onClick={() => this.props.createUsers()}>Salvar</ButtonBoxRegistro>
                    </BoxRegistro>
                </RegistroDiv>
            </div>
        );
    }
}



