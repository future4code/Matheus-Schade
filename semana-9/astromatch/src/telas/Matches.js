import React from "react";
import Header from "../components/Header";
import styled from "styled-components"

const TelaEscolha = styled.div`
border: 1px solid black;
width: 30vw;
margin: 0 auto;
height: 91vh;
`

const Matches = (props) => {

    return (
        <TelaEscolha>
            <Header changePage={props.changePage} />
        </TelaEscolha>
    )
}

export default Matches