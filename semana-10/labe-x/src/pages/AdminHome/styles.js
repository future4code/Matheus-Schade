import styled from "styled-components"

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: 100vw;
min-height: 95vh;
`

export const ButtonCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
min-height: 90%;

@media(max-width: 400px) and (max-height: 700px){
        flex-direction: column;
  }

button {
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #09515d;
    border: 1px solid grey;
    width: 133px;
    height: 3em;
    @media(max-width: 400px) and (max-height: 700px){
        margin: 25px;
        height: 3em;
        font-size: 16px;
  }
    :hover {
        background-color: #09515d;
        transform: scale(1.1);
        font-weight: bold;
        border-radius: 6px;
    }
    :active {
        background-color: #09515d;
        font-weight: bold;
        transform: scale(1.2);
        border-radius: 7px;
    }}
`