import React from "react";
import Registro from "./components/Registro"
import Lista from "./components/Lista"
import axios from "axios";

const headers = {
  headers: {
    Authorization: "matheus-schade-maryam"
  }
};

export default class App extends React.Component {
  state = {
    listaDeNomes: [],
    inputNovoNome: "",
    inputNovoEmail: "",
    paginaInicial: true,
  };
  componentDidMount() {
    this.getAllUsers();
  }
  onChangeinputNovoNome = (event) => {
    this.setState({ inputNovoNome: event.target.value });
  };
  onChangeinputNovoEmail = (event) => {
    this.setState({ inputNovoEmail: event.target.value });
  };
  createUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputNovoNome,
      email: this.state.inputNovoEmail,
    }
    axios.post(url, body, headers)
      .then((response) => {
        this.setState({ inputNovoNome: "", inputNovoEmail: "" });
        this.getAllUsers();
        alert("Usuário cadastrado com Sucesso!")
      })
      .catch((error) => {
        alert("Erro!")
      })
  }

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios.delete(url, headers)
      .then((response) => {
        this.getAllUsers();
        alert("Usuário deletado com Sucesso!")
      })
      .catch((error) => {
        alert("Erro!")
      })
  }
  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, headers)
      .then((response) => {
        this.setState({ listaDeNomes: response.data })
      })
      .catch((error) => {
      })
  }

  renderizacaoDaPagina = () => {
    if (this.state.paginaInicial) {
      return <Registro
        inputNovoNome={this.state.inputNovoNome}
        inputNovoEmail={this.state.inputNovoEmail}
        onChangeinputNovoNome={this.onChangeinputNovoNome}
        onChangeinputNovoEmail={this.onChangeinputNovoEmail}
        listaDeNomes={this.state.listaDeNomes}
        createUsers={this.createUsers}
        onClickMudaDePagina={this.onClickMudaDePagina}
      />
    } else {
      return <Lista
        listaDeNomes={this.state.listaDeNomes}
        onClickMudaDePagina={this.onClickMudaDePagina}
        deleteUser={this.deleteUser}
      />
    }
  }

  onClickMudaDePagina = () => {
    this.setState({ paginaInicial: !this.state.paginaInicial });
  };

  render() {
    return (
      <div>{this.renderizacaoDaPagina()}</div>
    );
  }
}

