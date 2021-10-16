import styled from "styled-components"
import Banner from "../../img/banner.jpg"

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: 100vw;
`

export const Buttons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 94vh;

@media(max-width: 400px) and (max-height: 700px){
    justify-content: space-around;
  }

button {
    margin: 20px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #09515d;
    border: 1px solid grey;
    width: 133px;
    height: 10vh;
    font-weight: bold;
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

export const AreaHome = styled.div`
background-image: url(${Banner});
width: 100vw;
height: 94vh;
`
