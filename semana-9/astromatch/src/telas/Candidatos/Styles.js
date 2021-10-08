import styled from "styled-components"

export const Body = styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
border-radius: 10px;
background-color: whitesmoke;
`

export const CardPhoto = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
margin: 0 auto;
margin-top: 40px;
margin-bottom: 20px;
width: 95%;
height: 57%;

@media(max-width: 500px) {
  margin-top: 50px;
  height: 56%;
  }
@media(min-width: 501px) and (max-width: 800px){
  margin-top: 60px;
  height: 61%;
  }
@media (min-width: 801px) and (max-width: 1200px) {
  margin-top: 100px;
  }

@media(width: 540px) and (height: 720px) {
  margin-top: 100px;
  height: 50%;
}

  

img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}
`

export const Description = styled.div`
height: 22%;
width: 95%;
border-radius: 10px;
margin: 0 auto;
margin-bottom: 10px;


h3, h5, p {
  margin-bottom: 0px;
  margin-left: 10px;

  @media(min-width: 501px) and (max-width: 800px){
  font-size: 30px;
  }

  @media (min-width: 801px) and (max-width: 1200px) {
    font-size: 38px;
    }

  @media(width: 540px) and (height: 720px) {
  font-size: 22px;
}
}
`

export const CardButtons = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 5%;

button {
  height: 25px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
  color: black;
  border: 0.5px solid black;

  @media(min-width: 501px) and (max-width: 1200px){
  height: 58px;
  font-size: 30px;
  }

  @media(width: 540px) and (height: 720px) {
  height: 45px;
  font-size: 20px;
}
   
  :hover {
    transform: scale(1.2);
    color: #bf0b08;
  }

  p {
    margin-right: 10px;
    font-weight: bold;
  }
}
`

