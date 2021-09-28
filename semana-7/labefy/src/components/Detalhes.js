import React from "react";
import styled from "styled-components"

const CadaDetalheDiv = styled.div`
display: flex;
align-items: center;
height: 1.25em;
h4 {
    margin-right: 10px;
}
p {
    margin-right: 10px;
}
a {
    text-decoration:none;
    color: gray;
}
`

const CadaMusicaDetalhe = styled.div`
border: 1px solid lightgray;
min-width: 23vw;
min-height: 3em;
margin: 10px 0;
padding: 6px 25px;
display: flex;
align-items: center;
justify-content: space-between;
button {
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: lightgrey;
    border: 1px solid gray;
    font-size: 12px;
}
`

export default class Detalhes extends React.Component {
    render() {

        const renderizaListaDeMusicas = this.props.musicList.map((item) => {
            return <CadaMusicaDetalhe key={item.id}>
                <div>
                    <CadaDetalheDiv><h4>Nome:</h4> <p> {item.name} </p></CadaDetalheDiv>
                    <CadaDetalheDiv> <h4>Artista: </h4> <p> {item.artist} </p></CadaDetalheDiv>
                </div>

                <CadaDetalheDiv>
                    {/* <button><a target="_blank" href={item.url}>Ouvir Música</a></button> */}
                    <audio src={item.url} controls></audio>
                </CadaDetalheDiv>

            </CadaMusicaDetalhe>
        })


        return (
            <div>
                <h3>Playlist:</h3>

                <label>Adicione uma música a essa playlist: </label>

                <input
                    placeholder="Nome"
                    value={this.props.newMusicName}
                    onChange={this.props.onChangeNewMusicName}
                />
                <input
                    placeholder="Artista"
                    value={this.props.newMusicArtist}
                    onChange={this.props.onChangeNewMusicArtist}
                />
                <input
                    placeholder="Url da música"
                    value={this.props.newMusicURL}
                    onChange={this.props.onChangeNewMusicURL}
                />
                <button onClick={() => this.props.addTrackToPlaylist()}>Enviar</button>



                {renderizaListaDeMusicas}

                <button onClick={this.props.onClickBackToBegin}>Voltar</button>
            </div>

        )
    }
}