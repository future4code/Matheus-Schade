import React, { useState, useEffect } from "react"
import Header from "../../components/Header"
import axios from "axios"
import { TelaEscolha, ListaDeMatches, CadaMatch, DeleteMatches } from "../Matches/Styles"
import { FaTrashAlt } from "react-icons/fa"

const aluno = "matheus-schade-maryam"

const Matches = (props) => {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = async () => {

        try {
            const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
            setMatches(response.data.matches)
        } catch (error) {
            alert(error.message)
        }
    };

    const listaDeMatches = matches.map((item) => {
        return (
            <CadaMatch key={item.id}>

                <img src={item.photo} alt={item.name} />

                <h4>{item.name}, {item.age}</h4>

            </CadaMatch>
        )
    })

    const clear = async () => {

        const headers = { "Content-Type": "application/json" }

        try {
            const response =
                await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`, headers)
            alert("Lista de Matches deletada com sucesso!")
            props.changePage("Candidatos")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <TelaEscolha>
            <Header
                changePage={props.changePage}
                currentPage={props.currentPage} />

            {matches ? (
                <ListaDeMatches>{listaDeMatches}</ListaDeMatches>
            ) : (
                <div>Aguarde um momento... Carregado perfis</div>
            )}

            <DeleteMatches onClick={() => clear()}>
                <p>limpar</p>
                <FaTrashAlt />
            </DeleteMatches>

        </TelaEscolha>
    )
}

export default Matches