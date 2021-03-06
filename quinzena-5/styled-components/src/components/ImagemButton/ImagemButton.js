import React from 'react';
import './ImagemButton.css'
import styled from "styled-components"

const ImageButtonContainer = styled.a`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    text-decoration: none;
    color: black;
    img {
    width: 30px;
    margin-right: 10px;
    :hover {
        background-color: lightgray;
    }
    :active {
        background-color: lightgreen;
    }

}
`
function ImagemButton(props) {
    return (
        <ImageButtonContainer href="#">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;