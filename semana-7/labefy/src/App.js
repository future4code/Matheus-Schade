import React from "react";
import axios from "axios";
import Principal from "./components/Principal";
import Detalhes from "./components/Detalhes";
import styled from "styled-components"

const Body = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color:#F8F8FF;
min-height: 100vh;
max-width: 100vw;
padding: 0 15px;
`

const headers = {
  headers: {
    Authorization: "matheus-schade-maryam"
  }
};

export default class App extends React.Component {
  state = {
    screen: "principal",
    playlists: [],
    newPlaylistName: "",
    musicList: [],
    newMusicName: "",
    newMusicArtist: "",
    newMusicURL: "",
    playlistId: "",
  };

  componentDidMount = () => {
    this.getAllPlaylists()

  }

  createPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = {
      name: this.state.newPlaylistName
    }

    axios
      .post(url, body, headers)
      .then((response) => {
        alert("Playlist cadastrada com sucesso")
        this.setState({ newPlaylistName: "" })
        this.getAllPlaylists()

      }).catch((error) => {
        alert("Não foi possivel cadastrar essa playlist!")
      })
  }

  getAllPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ playlists: response.data.result.list })
        // console.log("State Array playlist", this.state.playlists)

      }).catch((error) => {
        console.log(error.response)
      })
  }

  addTrackToPlaylist = (id, playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`
    const body = {
      name: this.state.newMusicName,
      artist: this.state.newMusicArtist,
      url: this.state.newMusicURL,
    }
    console.log(body)
    axios.post(url, body, headers)
      .then((response) => {
        alert("Música cadastrada com sucesso")
        this.setState({ newMusicName: "", newMusicArtist: "", newMusicURL: ""})
        console.log(response.data)
      }).catch((error) => {
        alert("Não foi possivel cadastrar essa música!")
        this.getAllPlaylists()
        this.getPlaylistTracks(playlistId)
        console.log(error.response.data.message)
      })
  }

  getPlaylistTracks = async (id, playlistId) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    try {
      const response = await axios.get(url, headers)
      this.setState({ musicList: response.data.result.tracks, screen: "detalhes", playlistId: id })
      // console.log("Lista de músicas da playlist: ", this.state.musicList)

    } catch (error) {
      alert("Atualize a página para ver as atualizações!")
      console.log(error.response.status)
    }

  }

  onClickBackToBegin = () => {
    this.setState({ screen: "principal" })
  }

  onChangePlaylistName = (e) => {
    this.setState({ newPlaylistName: e.target.value });

  };

  onChangeNewMusicName = (e) => {
    this.setState({ newMusicName: e.target.value });
    console.log(this.state.playlistId)
  };

  onChangeNewMusicArtist = (e) => {
    this.setState({ newMusicArtist: e.target.value });
  };

  onChangeNewMusicURL = (e) => {
    this.setState({ newMusicURL: e.target.value });
  };

  changeScreen = () => {
    switch (this.state.screen) {
      case "principal":
        return <Principal
          newPlaylistName={this.state.newPlaylistName}
          playlists={this.state.playlists}
          onChangePlaylistName={this.onChangePlaylistName}
          createPlaylist={this.createPlaylist}
          musicName={this.state.musicList.name}
          musicArtist={this.state.musicList.artist}
          musicLink={this.state.musicList.url}
          getPlaylistTracks={this.getPlaylistTracks}
          onClickBackToBegin={this.onClickBackToBegin}
          getAllPlaylists={this.getAllPlaylists}
          newMusicName={this.state.newMusicName}
          newMusicArtist={this.state.newMusicArtist}
          newMusicURL={this.state.newMusicURL}
          onChangeNewMusicName={this.onChangeNewMusicName}
          onChangeNewMusicArtist={this.onChangeNewMusicArtist}
          onChangeNewMusicURL={this.onChangeNewMusicURL}
          addTrackToPlaylist={this.addTrackToPlaylist}
          playlistId={this.state.playlistId}
          getIDForNewMusics={this.getIDForNewMusics}
        />
      case "detalhes":
        return <Detalhes
          newPlaylistName={this.state.newPlaylistName}
          playlists={this.state.playlists}
          onChangePlaylistName={this.onChangePlaylistName}
          createPlaylist={this.createPlaylist}
          musicName={this.state.musicList.name}
          musicArtist={this.state.musicList.artist}
          musicLink={this.state.musicList.url}
          musicID={this.state.musicList.id}
          getPlaylistTracks={this.getPlaylistTracks}
          musicList={this.state.musicList}
          onClickBackToBegin={this.onClickBackToBegin}
          getAllPlaylists={this.getAllPlaylists}
          newMusicName={this.state.newMusicName}
          newMusicArtist={this.state.newMusicArtist}
          newMusicURL={this.state.newMusicURL}
          addTrackToPlaylist={this.addTrackToPlaylist}
          onChangeNewMusicName={this.onChangeNewMusicName}
          onChangeNewMusicArtist={this.onChangeNewMusicArtist}
          onChangeNewMusicURL={this.onChangeNewMusicURL}
          playlistId={this.state.playlistId}
          getIDForNewMusics={this.getIDForNewMusics}
        />
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }


  render() {

    return (
      <Body>
        <h1>Labefy</h1>
        {this.changeScreen()}
      </Body>
    )
  }
}