import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`
const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`
const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const BoxTextoX = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class App extends React.Component {
  state = {

    tarefas: [{
      id: 1,
      texto: "Texto da Primeira Tarefa",
      completa: false,
    },
    {
      id: 2,
      texto: "Texto da Segunda Tarefa",
      completa: false,
    }],
    inputValue: '',
    filtro: ''

  }

  componentDidUpdate() {
    const tarefa = this.state.tarefas
    window.localStorage.setItem("tarefa", JSON.stringify(tarefa));
  };

  componentDidMount() {
    const tarefasString = window.localStorage.getItem("tarefas")
    if (tarefasString) {
      const tarefa = JSON.parse(tarefasString)
      this.setState({ tarefas: tarefa })
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    }

    const novaListaDeTarefas = [novaTarefa, ... this.state.tarefas]
    this.setState({ tarefas: novaListaDeTarefas, inputValue: "" })

  }

  selectTarefa = (id) => {
    console.log(`PROPRIEDADE ALTERADA ${id}`)
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa, completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaDeTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })

  }
  // onClickRemoverPessoa = (id) => {
  //   console.log("REMOVENDO", id);
  //   const novaListaDeTarefas = this.state.tarefas.filter((tarefa) => {
  //     if (id === tarefa.id) {
  //       return false
  //     } else {
  //       return true
  //     }
  //   })
  //   this.setState({ tarefas: novaListaDeTarefas })
  // };

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} placeholder={"Digite uma nova tarefa"} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map(tarefa => { //vai filtrar e lançar na tela vários li's, de acordo com o filtro
            return (

              <Tarefa //isso é uma lista li
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}

                {/* {tarefa.texto} */}
              </Tarefa>


            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
