import React from "react";
import styled from "styled-components"

const RegistroDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const UsuariosDiv = styled.div`
display: flex;
flex-direction: column;
width: 20%;
margin: 0 auto;
padding: 15px;
border: 1px solid black;
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
const CadaUser = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export default class Lista extends React.Component {
    render() {
        const listaDeNomes = this.props.listaDeNomes.map((item, index, array) => {
            return <CadaUser>
                <li key={item.id}>{item.name}</li> <button onClick={() => this.props.deleteUser(item.id)}>X</button>
            </CadaUser>

        });
        return (
            <RegistroDiv>
                <ButtonChange onClick={this.props.onClickMudaDePagina}>Ir para a Página de Registro</ButtonChange>
                <UsuariosDiv>
                    <h3>Usuários Cadastrados:</h3>
                    {listaDeNomes}
                </UsuariosDiv>
            </RegistroDiv>
        );
    }
}
