import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovoPost = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const LinhaInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: 3px;;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Murilo",
        fotoUsuario: "https://picsum.photos/51/50",
        fotoPost: "https://picsum.photos/201/150",
      },
      {
        nomeUsuario: "Miguel",
        fotoUsuario: "https://picsum.photos/52/50",
        fotoPost: "https://picsum.photos/202/150",
      }
    ],
    InputNomeUsuario: "",
    InputFotoUsuario: "",
    InputFotoPost: "",
  }

  onClickAdicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.InputNomeUsuario,
      fotoUsuario: this.state.InputFotoUsuario,
      fotoPost: this.state.InputFotoPost,
    }
    const copiaDeArrayPosts = [novoPost, ... this.state.posts]
    this.setState({
      posts: copiaDeArrayPosts,
      InputNomeUsuario: "",
      InputFotoUsuario: "",
      InputFotoPost: "",
    })
  }
  onChangeInputNome = (event) => {
    this.setState({ InputNomeUsuario: event.target.value })
  }
  onChangeInputFotoPerfil = (event) => {
    this.setState({ InputFotoUsuario: event.target.value })
  }
  onChangeInputFoto = (event) => {
    this.setState({ InputFotoPost: event.target.value })
  }


  render() {
    const listaDePosts = this.state.posts.map((posts, index, array) => {
      return (
        <MainContainer key={posts.nomeUsuario}>
          <Post
            nomeUsuario={posts.nomeUsuario}
            fotoUsuario={posts.fotoUsuario}
            fotoPost={posts.fotoPost} />
        </MainContainer>
      )
    })

    return (

      <MainContainer>

        <NovoPost>
          <h3>Novo Post</ h3>

          <LinhaInput>
            <label>Usuário:</ label>
            <input
              value={this.state.InputNomeUsuario}
              onChange={this.onChangeInputNome}
              placeholder={"Nome de Usuário"} />
          </LinhaInput>

          <LinhaInput>
            <label>Foto de Perfil:</ label>
            <input
              value={this.state.InputFotoUsuario}
              onChange={this.onChangeInputFotoPerfil}
              placeholder={"Foto de perfil"} />
          </LinhaInput>

          <LinhaInput>
            <label>Insira uma foto:</ label>
            <input
              value={this.state.InputFotoPost}
              onChange={this.onChangeInputFoto}
              placeholder={"Foto do Post"} />
          </LinhaInput>
          <br />
          <button onClick={this.onClickAdicionarPost}>Adicionar</button>

        </NovoPost>
        <div>
          {listaDePosts}
        </div>

      </MainContainer>

    );
  }
}

export default App;
