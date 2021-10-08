import styled from "styled-components"

export const TelaEscolha = styled.div`
width: 100%;
margin: 0 auto;
height: 100%;
border-radius: 10px;
background-color: whitesmoke;
@media(max-width: 2000px) {
  border: 1px solid whitesmoke;
}
`

export const ListaDeMatches = styled.div`
margin-top: 33px;
overflow-y:auto;
height: 94%;
border-radius: 10px;
@media(max-width: 500px) {
    margin-top: 50px;
    border-radius: 12px;
  }
  @media(min-width: 501px) and (max-width: 800px){
  margin-top: 68px;
  border-radius: 14px;
  }
  @media(min-width: 801px) and (max-width: 1200px){
  margin-top: 100px;
  border-radius: 18px;
  }
`

export const CadaMatch = styled.div`
border: 0.5px solid black;
width: 92%;
margin: 0 auto;
margin-top: 10px;
display: flex;
align-items: center;
border-radius: 10px;
background-color: #f7f7f7;
cursor: pointer;
height: 15%;


@media(min-width: 501px) and (max-width: 800px){
  margin-top: 18px;
  font-size: 30px;
  }

  @media(min-width: 801px) and (max-width: 1200px){
  font-size: 38px;
  margin-top: 22px;
  }

  @media(width: 540px) and (height: 720px) {
  font-size: 20px;
}

img {
    max-height: 95%;
    width: 20%;
    border-radius: 25%;
    margin: 0 30px;
  }
`

export const DeleteMatches = styled.div`
color: #bf0b08;
border: 1px solid black;
border-radius: 25%;
width: 50px;
height: 50px;
position: relative;
left: 233px;
bottom: 65px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
cursor: pointer;
color: black;
background-color: whitesmoke;

@media(max-width: 500px) {
    left: 72%;
    bottom: 16%;
    width: 70px;
    height: 70px;
  }
  @media(min-width: 501px) and (max-width: 800px) {
    left: 80%;
    bottom: 15%;
    width: 100px;
    height: 100px;
  }

  @media(min-width: 801px) and (max-width: 1200px) {
    left: 83%;
    bottom: 13%;
    width: 10vw;
    height: 10vw;
  }

  @media(width: 540px) and (height: 720px) {
    left: 83%;
    bottom: 15%;
    width: 14vw;
    height: 14vw;
  }

:hover {
    transform: scale(1.2);
    color: #bf0b08;
}

p {
    margin: -5px 0px;
    font-size: 12px;
    font-weight: bold;
    @media(max-width: 500px) {
    font-size: 15px;
  }
  @media(min-width: 501px) and (max-width: 800px) {
    font-size: 20px;
  }

  @media(min-width: 801px) and (max-width: 1200px) {
    font-size: 25px;
  }
}
`