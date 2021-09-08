import React from 'react';
import './CardPequeno.css'
import styled from "styled-components"

const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 20px;
    width: 25vw;
`
const ImagemMiniatura = styled.img`
    max-height: 20px;
`

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <ImagemMiniatura src={props.imagem} />
            <p>{props.descricao}</p>
        </CardPequenoContainer>
    )
}


export default CardPequeno