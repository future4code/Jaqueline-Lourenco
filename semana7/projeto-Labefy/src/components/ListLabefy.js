import React from "react";
import axios from "axios";

const infLogin = {
  headers: {
    Authorization: "jaqueline-lourenco-Molina"
  }
};

const infUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export default class ListLabefay extends React.Component {
  state = {
    playMusic: [],
    play: this.props.play,
    songName: "",
    songArtist: "",
    songUrl: ""
  };

  componentDidMount() {
    this.getAllSong();
  }
  getAllSong = async () => {
    const id = this.props.play.id;

    try {
      const response = await axios.get(`${infUrl}${id}/songs`, infLogin);
      this.setState({ playMusic: response.data.result.song });
    } catch (error) {
      alert(error.menssage);
    }
  };

  addTrackList = async () => {
    const body = {
      name: this.state.songName,
      artist: this.state.songArtist,
      url: this.state.songUrl
    };

    const id = this.props.play.id;
    try {
      await axios.post(`${infUrl}${id}/songs`, body, infLogin);

      this.setState({
        songName: "",
        songArtist: "",
        songUrl: ""
      });
      this.getSongs();
    } catch (error) {
      alert(error.menssage);
    }
  };

  onChangeSongName = (event) => {
    this.setState({ songName: event.target.value });
  };

  onChangeSongArtist = (event) => {
    this.setState({ songArtist: event.target.value });
  };

  onChangeSongUrl = (event) => {
    this.setState({ songUrl: event.target.value });
  };

  render() {
    const renderSongs = () => {
      return this.state.playMusic.map((song) => {
        return (
          <div key={song.id}>
            <h3>{song.name}</h3>
            <p>{song.artist}</p>

            <audio controls>
              <source src={song.url} type="audio/mp3" />
            </audio>
            <button onClick={() => this.deleteList(song.id)}>XDeleteX</button>
          </div>
        );
      });
    };

    return (
      <div className="listLabefyComponent">
        <h1>{this.state.play.name}</h1>

        <div>
          <input
            value={this.state.songName}
            onChange={this.onChangeSongName}
            type="text"
            placeholder="Name Here"
          />

          <input
            value={this.state.songArtist}
            onChange={this.onChangeSongArtist}
            type="text"
            placeholder="Artist Here"
          />

          <input
            value={this.state.songUrl}
            onChange={this.onChangeSongUrl}
            type="text"
            placeholder="Link Url Here"
          />
          <button onClick={this.addSong}>+</button>
        </div>
        {renderSongs()}
      </div>
    );
  }
}
