import React from "react"
import styled from "styled-components"
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"

const TelaInicial = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`

export default class App extends React.Component {
  state = {
    etapa: 1,
    respostas: [{
      nome: "",
      idade: "",
      email: "",
      escolaridade: "",
    }],
    inputNome: "",
    inputIdade: "",
    inputEmail: "",
    inputEscolaridade: "",

  }

  renderizaEtapa = () => {

    if (this.state.inputEscolaridade === "Ensino Médio Incompleto" || this.state.inputEscolaridade === "Ensino Médio Completo") {

      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa3 />;
        case 3:
          return <Final />;
        default:
      }

    } else if (this.state.inputEscolaridade === "Ensino Superior Completo" || this.state.inputEscolaridade === "Ensino Superior Incompleto") {

      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Final />;
        default:
      }
    } else {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;
        case 4:
          return <Final />;
        default:
      }
    }

  }

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }
  onChangeIdade = (event) => {
    this.setState({ inputIdade: event.target.value })
  }
  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }
  onChangeEscolaridade = (event) => {
    this.setState({ inputEscolaridade: event.target.value })
  }

  irParaProximaEtapa = () => {

    const novoForm = {
      nome: this.state.inputNome,
      mensagem: this.state.inputIdade,
      email: this.state.inputEmail,
      escolaridade: this.state.inputEscolaridade,
    }
    const copiaDeArrayRespostas = [... this.state.respostas, novoForm]
    this.setState({ etapa: this.state.etapa + 1, respostas: copiaDeArrayRespostas });
    console.log(this.state.respostas)
  };


  render() {
    return (
      <TelaInicial>
        {this.renderizaEtapa()}
        {this.state.etapa < 4 ? <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button> : <br />}
      </TelaInicial>
    )
  }
}
