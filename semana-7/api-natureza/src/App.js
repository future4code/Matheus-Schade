import styled from "styled-components"
import axios from "axios"
import React from "react"

const Body = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 75vw;
border: 1px solid black;
margin: 0 auto;
background-color: #f1f1ee;
`
const Lista = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const CadaItem = styled.div`
display: flex;
flex-direction: column;
border: 0.5px solid black;
background-color: #e5e5e5;
margin-top: 8px;
margin-bottom: 8px;
justify-content: center;
align-items: center;
width: 25vw;
`
const BoxCentro = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default class App extends React.Component {
  state = {
    pokemonTypes: [],
    pokemonsListTypes: [],
    pokemonListMovesForTypes: [],
    picturePokes: "",
  }

  componentDidMount = () => {
    this.getPokesTypes()
  }

  getPokesTypes = async () => {
    const url = "https://pokeapi.co/api/v2/type"
    const response = await axios.get(url)
    this.setState({ pokemonTypes: response.data.results })
    // console.log("Pokemons por tipo: ", response.data.results)
  }

  getListType = async (event) => {
    const url = event.target.value
    const response = await axios.get(url)
    this.setState({ pokemonsListTypes: response.data.pokemon, pokemonListMovesForTypes: response.data.moves })
    // console.log("Lista de pokes por type: ", response.data.pokemon)
    // console.log("Lista de pokes por type: ", response.data.moves)
    // console.log("Lista de pokes por type: ", response.data)
  }


  render() {

    const pokesTypes = this.state.pokemonTypes.map((types) => {
      return (
        <option key={types.name} value={types.url}>
          {types.name}
        </option>
      )
    })

    const pokesListTypes = this.state.pokemonsListTypes.map((pokes) => {
      return (
        <CadaItem key={pokes.pokemon.name}>
          {pokes.pokemon.name}
        </CadaItem>
      )
    })

    const pokesListMovesForTypes = this.state.pokemonListMovesForTypes.map((pokes) => {
      return (
        <CadaItem key={pokes.name}>
          {pokes.name}
        </CadaItem>
      )
    })

    return (
      <Body>
        <h1>Bem vindo ao Pokedex</h1>

        <select onChange={this.getListType}>
          <option>Selecione um tipo de Pokemon</option>
          {pokesTypes}
        </select>

        <Lista>
          <h2>Pokemons do tipo selecionado:</h2>

          <BoxCentro>
            <h5> {pokesListTypes} </h5>
          </BoxCentro>

          <h2>Movimentos dos pokemons do tipo selecionado:</h2>

          <BoxCentro>
            <h5>{pokesListMovesForTypes}</h5>
          </BoxCentro>

        </Lista>

      </Body>
    )
  }
}
