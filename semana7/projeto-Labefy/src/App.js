import React from "react";
import styled from "styled-components";
import axios from "axios";
import LabefyHome from "./components/LabefyHome";
import AddToPlaylist from "./components/AddToPlaylist";
import ListLabefy from "./components/ListLabefy";
import Image from "./components/img/labefy-play-musica.png";

const ContainerApp = styled.div`
  background-color: black;
  color: red;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 100px;

  @media only screen and (max-width: 800px) {
    flex-direction: center;
    position: relative;
  }
`;

const ImageStely = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  border: 2px solid black;
  border-radius: 100%;
  margin: 15px;
`;

const HeaderApp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ff6f00;
  border: 1px solid #e68a00;
  width: 50vh;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 12px 10px red;

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: center;
    position: relative;
  }
`;

const Title = styled.h1`
  background-color: black;
  border-radius: 50px;
  padding: 20px;
  width: 100px;
`;

const HomeButton = styled.button`
  background-color: black;
  color: gray;
  border-radius: 100px;
  border: none;
  padding: 5px;
  margin: 5px;

  &:hover {
    cursor: pointer;
    background: red;
  }
`;

const SearchButton = styled.button`
  background-color: black;
  color: gray;
  border-radius: 100px;
  border: none;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background: red;
  }
`;

const CreatePlayListButton = styled.button`
  background-color: black;
  color: gray;
  border-radius: 50px;
  border: none;
  padding: 6px;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background: red;
  }
`;

const RenderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 5px;
`;

const infLogin = {
  headers: {
    Authorization: "jaqueline-lourenco-Molina"
  }
};
const infUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export default class App extends React.Component {
  state = {
    playList: [],
    addToPlay: false,
    likDetails: false,
    home: false,
    play: ""
  };

  componentDidMount() {
    this.getPlayList();
  }

  getPlayList = async () => {
    try {
      const response = await axios.get(infUrl, infLogin);
      this.setState({ playList: response.data.result.list });
    } catch (error) {
      alert(error.response.data.menssage);
    }
  };

  playDetail = (playList) => {
    const id = playList.id;
    this.state.playList.map((play) => {
      if (play.id === id) {
        this.setState({
          likDetails: !this.state.likDetails,
          addToPlay: false,
          play: playList
        });
      }
    });
  };
  addToPlayList = () => {
    this.setState({ addToPlay: true });
    this.setState({ likDetails: false });
  };

  renderListPlay = () => {
    return this.state.playList.map((playList) => {
      return (
        <RenderList key={playList.id} onClick={() => this.playDetail(playList)}>
          {playList.name}
        </RenderList>
      );
    });
  };
  render() {
    const renderComponents = () => {
      if (this.state.addToPlay) {
        return <AddToPlaylist />;
      } else if (this.state.likDetails) {
        return <ListLabefy play={this.state.play} />;
      } else if (this.state.LabefayHome) {
        <LabefyHome />;
      }
    };

    return (
      <ContainerApp>
        <HeaderApp>
          <ImageStely>
            <img src={Image} />
          </ImageStely>

          <Title>Labefy</Title>

          <HomeButton onClick={this.onClickHome}>Home</HomeButton>

          <SearchButton onClick={this.ListLabefy}>Search</SearchButton>

          <div onClick={this.addToPlayList}>
            <CreatePlayListButton>Create Playlist</CreatePlayListButton>
          </div>

          <ul>{this.renderListPlay()}</ul>
        </HeaderApp>
        <div className="component">{renderComponents()}</div>
      </ContainerApp>
    );
  }
}
