import styled from "styled-components"

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 100vw;
min-height: 95vh;
`

export const Description = styled.div`
width: 33%;
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 10px;
padding: 15px;
font-size: 14px;

p {
    margin: 5px 0px;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid grey;
    cursor: pointer;
    text-align: center;
    margin-left: 15px;
}
`

export const Approved = styled.div`
padding: 15px;
width: 33%;
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 10px;
margin-bottom: 15px;
background-color: lightcyan;
font-size: 14px;
`

export const Candidates = styled.div`
padding: 15px;
width: 33%;
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 10px;
margin-bottom: 15px;
background-color: lightgreen;
font-size: 14px;
button {
    margin-left: 15px;
}
`
