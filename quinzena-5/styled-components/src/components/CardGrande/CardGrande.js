import React from 'react';
import './CardGrande.css'
import styled from "styled-components"

// const AppGeral = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 30px;

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    img {
        width: 70px;
        margin-right: 10px;
        border-radius: 20%;
    }
    h4 {
        margin-bottom: 15px;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
`
const ImagemDaPessoa = styled.img`
    max-height: 150px;
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <ImagemDaPessoa src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigcardContainer>
    )
}

export default CardGrande;