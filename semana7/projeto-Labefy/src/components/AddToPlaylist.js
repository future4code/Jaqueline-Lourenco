import React from "react";
import styled from "styled-components";
import axios from "axios";

const PlayListName = styled.div`
  display: flex;
`;

const DeleteButton = styled.button`
  background-color: green;
  color: violet;
  border: none;
  border-radius: 10px;
  height: 30px;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const CreatePlayList = styled.button`
  background-color: red;
  color: gray;
  border: none;
  height: 21px;

  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

const infLogin = {
  headers: {
    Authorization: "jaqueline-lourenco-Molina"
  }
};
const infUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export default class AddPlayList extends React.Component {
  state = {
    playList: [],
    inputName: ""
  };

  componentDidMount() {
    this.getPlayList();
  }

  getPlayList = async () => {
    try {
      const response = await axios.get(infUrl, infLogin);
      this.setState({ playList: response.data.result.list });
    } catch (error) {
      alert("Hear problem try again!");
    }
  };

  CreatePlayList = async () => {
    const body = {
      name: this.state.inputName
    };

    try {
      await axios.post(infUrl, body, infLogin);
      this.setState({ inputName: "" });
      this.getPlayList();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  deleteList = async (id) => {
    const newId = this.state.playList.filter((play) =>
      play.id === id ? play.id : null
    );

    try {
      const response = await axios.delete(
        `${infUrl}
      ${newId[0].id}`,
        infLogin
      );

      const playArray = [...this.state.playList];
      const newPlayArray = playArray.splice(response, 1);
      this.getPlayList();

      this.setState({ playList: newPlayArray });
    } catch (error) {
      alert(error.response.data.menssage);
    }
  };

  renderList = () => {
    return this.state.playList.map((playList) => {
      return (
        <PlayListName key={playList.id}>
          <p>{playList.name}</p>
          <DeleteButton onClick={() => this.deleteList(playList.id)}>
            XDeleteX
          </DeleteButton>
        </PlayListName>
      );
    });
  };

  onchangeInput = (event) => {
    this.setState({ inputName: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Add new playlist</h1>
        <div>
          <input
            type="text"
            placeholder="Your playlist!"
            value={this.state.inputName}
            onChange={this.onchangeInput}
          />
          <CreatePlayList onClick={this.CreatePlayList}>Add</CreatePlayList>
        </div>
      </div>
    );
  }
}
