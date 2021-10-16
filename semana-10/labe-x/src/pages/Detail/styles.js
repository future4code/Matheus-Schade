import styled from "styled-components"

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: 100vw;
min-height: 95vh;
`

export const Description = styled.div`
width: 66%;
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 10px;
margin: 10px;
padding: 0px 20px;
font-size: 14px;
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

export const Candidates = styled.div`
margin: 10px;
padding: 0px 20px;
width: 66%;
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 10px;
background-color: white;
font-size: 14px;
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
    width: 133px;
    height: 2em;
    :hover {
        background-color: #09515d;
        transform: scale(1.1);
        font-weight: bold;
        border-radius: 6px;
    }
    :active {
        background-color: #00436e;
        font-weight: bold;
        transform: scale(1.2);
        border-radius: 7px;
    }}
`

export const Approved = styled.div`
margin: 10px;
padding: 0px 20px;
width: 66%;
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 10px;
background-color: white;
font-size: 14px;
@media(max-width: 400px) and (max-height: 700px){
    width: 82%;
  }
p {
    margin: 5px 0px;
}
`
