import styled from "styled-components"

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: 100vw;
min-height: 95vh;
`

export const ButtonsLogin = styled.div`
display: flex;
width: 33%;
align-items: center;
justify-content: center;

button {
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #09515d;
    border: 1px solid grey;
    width: 133px;
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
export const Form = styled.form`
display: flex ;
flex-direction: column;
justify-content: center;
align-items: center;
width: 66%;
@media(max-width: 400px) and (max-height: 700px){
    width: 80%;
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
`