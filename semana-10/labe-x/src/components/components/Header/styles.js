import styled from "styled-components"

export const Head = styled.div`
background-color: #09515d;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 6vh;
width: 100%;
p {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 25px;
    color: white;
}
button {
    width: 100px;
    height: 1.5em;
    border-radius: 5px;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    @media(max-width: 400px) and (max-height: 700px){
        width: 60px;

  }
}
`
