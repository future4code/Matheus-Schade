import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import axios from "axios"

const Body = styled.div`
border: 1px solid black;
width: 30vw;
margin: 0 auto;
height: 95vh;
display: flex;
flex-direction: column;
`

const CardPhoto = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
margin: 0 auto;
margin-top: 10px;
margin-bottom: 20px;
width: 95%;
height: 55vh;

img {
  margin-top: 10px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}
`

const Description = styled.div`
height: 20vh;
width: 95%;
border-radius: 10px;
margin: 0 auto;
margin-bottom: 10px;


h3, h5, p {
  margin-bottom: 0px;
}
`

const CardButtons = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 5vh;

button {
  border-radius: 10px;
}
`


const aluno = "matheus-schade-maryam"
const urlPerson = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/person`

const Candidatos = (props) => {

  const [candidato, setCandidato] = useState([])

  useEffect(() => {
    getProfileToChoose()
  }, [])


  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(urlPerson)
      setCandidato(response.data.profile)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  };

  const choosePerson = async () => {
    const body = {
      id: candidato.id,
      choice: true,
  }
    try {
      const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
      console.log(response.data)
      getProfileToChoose()
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Body>

      <Header changePage={props.changePage} />

      <CardPhoto>
        <img src={candidato.photo} alt={`Foto de ${candidato.name}`} />
      </CardPhoto>

      <Description>
        <h3>{candidato.name}, {candidato.age} anos</h3>
        <p>{candidato.bio}</p>
      </Description>

      <CardButtons>
        <button>deu ruim</button>
        <button onClick={() => choosePerson()}>deu match</button>
      </CardButtons>

    </Body>
  )
}

export default Candidatos