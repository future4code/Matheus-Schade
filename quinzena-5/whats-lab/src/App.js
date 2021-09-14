import React from "react"
import styled from "styled-components";
import img from "./img/fundo.jpg"
import logo from "./img/logo.png"

const FundoTela = styled.div`
display: grid;
grid-template-rows: 5vh 1fr 5vh;
grid-template-columns: 1fr;
justify-content: center;
min-width: 375px;
max-width: 667px;
min-height: 100vh;
background-image: url(${img});
`
const CadaMensagem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 95vw;
h4 {
  padding-left: 18px;
}
`
const FundoMensagem = styled.div`
background-color: #e0fec7;
border: 1px inherit black;
border-radius: 5px;
height: 2.5em;
padding: 0 10px;
display: flex;
align-items: center;
box-shadow: 2px 2px 2px gray;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 5vh;
grid-column: 1/3;
width: 100vw;
background-color:#8ec580;
h5 {
  padding-left: 35px;
}
img {
  padding-right: 35px;
}
`
const Footer = styled.div`
display: flex;
background-color: #8ec580;
justify-content: space-between;
align-items: center;
position: fixed;
bottom: 0px;
padding-left: 2vw;
width: 100vw;
grid-column: 1/3;
height: 5vh;
button {
  margin-right: 15px;
}
`
const Main = styled.div`
grid-column: 1/3;
`
const LogoImagem = styled.img`
width: 25px;
`
const Inputs = styled.input`
width: 35vw;
`
const BotaoEnviar = styled.button`
width: 15vw;
margin-right: 10px;
`

class App extends React.Component {
  state = {
    msg: [
      {
        nome: "Robot",
        mensagem: "Digite uma nova mensagem",
      },

    ],
    inputNome: "",
    inputMensagem: ""

  }

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  onChangeMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value })
  }

  onClickEnviar = () => {

    const novoMsg = {
      nome: this.state.inputNome,
      mensagem: this.state.inputMensagem,
    }

    const copiaDeArrayMgs = [... this.state.msg, novoMsg]

    this.setState({
      msg: copiaDeArrayMgs,
      inputNome: "",
      inputMensagem: "",
    })
  }

  onClickRemoverMensagem = (index) => {
    console.log("REMOVENDO", index);
    const copiaDeArrayMgs = [...this.state.msg];

    copiaDeArrayMgs.splice(index, 1);
    this.setState({ msg: copiaDeArrayMgs });
  };

  render() {

    const componentesPost = this.state.msg.map((cadaPost, index, array) => {
      console.log(cadaPost, index);
      return (
        <CadaMensagem onClick={() => this.onClickRemoverMensagem(index)} key={cadaPost.nome}>
          <h4>{cadaPost.nome}:</h4>
          <FundoMensagem><p>{cadaPost.mensagem}</p></FundoMensagem>
        </CadaMensagem>
      );
    })

    const onClickEnviar = () => {

      const novoMsg = {
        nome: this.state.inputNome,
        mensagem: this.state.inputMensagem,
      }

      const copiaDeArrayMgs = [... this.state.msg, novoMsg]

      this.setState({
        msg: copiaDeArrayMgs,
        inputNome: "",
        inputMensagem: "",
      })
    }

    const handleKeyPress = (event) => {
      // look for the `Enter` keyCode
      if (event.keyCode === 13 || event.which === 13) {
        onClickEnviar()
      }
    }

    return (
      <FundoTela>
        <Header>
          <h5>Bem vindo ao WhatsLab</h5>
          <LogoImagem src={logo} alt="logo" />
        </ Header>
        <Main>{componentesPost}</ Main>
        <Footer>
          <Inputs
            placeholder={"Nome do Usuário"}
            value={this.state.inputNome}
            onChange={this.onChangeNome}
            onKeyPress={handleKeyPress}
          />
          <Inputs
            placeholder={"Digite sua mensagem"}
            value={this.state.inputMensagem}
            onChange={this.onChangeMensagem}
            onKeyPress={handleKeyPress}
          />
          <BotaoEnviar onClick={this.onClickEnviar} >Enviar</BotaoEnviar>
        </Footer>
      </FundoTela >
    )
  }
}
export default App
