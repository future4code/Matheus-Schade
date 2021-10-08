import React, { useState, useEffect } from "react"
import Header from "../../components/Header"
import axios from "axios"
import { Body, CardPhoto, Description, CardButtons } from "../Candidatos/Styles.js"
import { FaHeart } from "react-icons/fa"
import { GiBrokenHeart } from "react-icons/gi"


const aluno = "matheus-schade-maryam"

const Candidatos = (props) => {

  const [candidato, setCandidato] = useState([])

  useEffect(() => {
    getProfileToChoose()
  }, [])


  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
      setCandidato(response.data.profile)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  };

  const choosePerson = async (match) => {

    const headers = { "Content-Type": "application/json" }

    const body = {
      id: candidato.id,
      choice: match,
    }
    try {
      const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body, headers)
      console.log(response.data)
      getProfileToChoose()
    } catch (error) {
      console.log(error)
    }
  };

  const onClicknoMatch = () => {
    choosePerson(false);
  };

  const onClickYes = () => {
    choosePerson(true);
  };

  return (
    <Body>
      <Header
        changePage={props.changePage}
        currentPage={props.currentPage} />
      <CardPhoto photo={props.photo}>
        <img src={candidato.photo} alt={`Foto de ${candidato.name}`} />
      </CardPhoto>
      <Description>
        <h3>{candidato.name}, {candidato.age} anos</h3>
        <p>{candidato.bio}</p>
      </Description>
      <CardButtons>
        <button onClick={() => onClicknoMatch()}><p>hoje não</p> <GiBrokenHeart /> </button>
        <button onClick={() => onClickYes()}><p>deu match</p><FaHeart /></button>

      </CardButtons>

    </Body>
  )
}

export default Candidatos