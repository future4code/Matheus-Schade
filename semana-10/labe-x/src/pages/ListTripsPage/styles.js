import styled from "styled-components"

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: 100vw;
min-height: 95vh;
`

export const EachTrip = styled.div`
border: 1px solid black;
width: 66%;
margin: 10px;
padding: 0px 20px;
border-radius: 10px;
@media(max-width: 400px) and (max-height: 700px){
    width: 82%;
  }
p {
    margin: 5px 0px;
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
    }
}
`

