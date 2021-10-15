import styled from "styled-components"

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: whitesmoke;
max-width: 100vw;
min-height: 95vh;
`

export const ButtonCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: burlywood;
width: 50%;
height: 50%;

button {
    margin: 10px 0;
    width: 25%;
    border-radius: 5px;
}
`