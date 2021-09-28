import React from "react";
import axios from "axios";
import styled from "styled-components"

const headers = {
    headers: {
        Authorization: "matheus-schade-maryam"
    }
};

const CadaPlaylist = styled.div`
border: 1px solid lightgray;
margin: 8px 0;
background-color: #E6E6FA;
max-width: 30vw;
display: flex;
justify-content: space-between;
`

// const headers = {
//     headers: {
//         Authorization: "matheus-schade-maryam"
//     }
// };

export default class Principal extends React.Component {

    deletePlaylist = async (id, name) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        if (window.confirm(`Tem certeza de que deseja deletar a playlist ${name}?`)) {
            try {
                const response = await axios.delete(url, headers)
                this.props.getAllPlaylists();
                alert("Playlist deletada com Sucesso!")

            } catch (error) {
                alert("Erro. Não foi possível deletar a Playlist!")
            }
        }
    }

    render() {

        const renderizaListaDePlaylists = this.props.playlists.map((item) => {
            return (<CadaPlaylist key={item.name}>
                <div 
                    onClick={() => this.props.getPlaylistTracks(item.id, item.name, item.artist, item.url)}
                     >
                    {item.name}

                </div>
                <button onClick={() => this.deletePlaylist(item.id, item.name)} >Delete</button>
            </CadaPlaylist>)
        });
        return (
            <div>
           
                <label>Crie uma nova playlist: </label>
                <input
                    placeholder="Nome da nova Playlist"
                    value={this.props.newPlaylistName}
                    onChange={this.props.onChangePlaylistName}
                />
                <button onClick={() => this.props.createPlaylist()}>Enviar</button>

                {renderizaListaDePlaylists}
              
            </div>
        )
    }
}