import styled from "styled-components"
import Astro from "../../img/astro.jpg"

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: 100vw;
min-height: 95vh;
`

export const Main = styled.div`
max-width: 100vw;
min-height: 90vh;
display: flex;
`

export const Img = styled.img`
background-image: url(${Astro});
height: 90vh;
@media(max-width: 400px) and (max-height: 700px){
    display: none;
  }
`

export const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 71.4vw;
height: 89.75vh;
@media(max-width: 400px) and (max-height: 700px){
    width: 90vw;
    text-align: center;
    justify-content: flex-start;
  }
input {
    margin: 5px 0px;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid grey;
    width: 66%;
    @media(max-width: 400px) and (max-height: 700px){
        width: 80%;
  }
}
select {
    margin: 5px 0px;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid grey;
    width: 66.75%;
    @media(max-width: 400px) and (max-height: 700px){
        width: 81.75%;
  }
}
button {
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #09515d;
    border: 1px solid grey;
    width: 100px;
    height: 2em;
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