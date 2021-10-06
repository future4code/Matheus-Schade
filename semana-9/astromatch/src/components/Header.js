import React, {useState, useEffect} from "react"
import styled from "styled-components"

const Head = styled.div`
background-color: #156553;
height: 5vh;
display: flex;
width: 30vw;
align-items: center;
justify-content: space-between;

button {
    margin: 0 10px;
    border-radius: 20px;
}
`



const Header = (props) => {

    return (

        <Head>
            <div>
                <button onClick={() => props.changePage("Candidatos")}>Matches</button>
            </div>
            <div>ASTROMATCH</div>
            <div>
                <button onClick={() => props.changePage("Matches")}>Perfis</button>
            </div>

        </Head>

    )
}

export default Header