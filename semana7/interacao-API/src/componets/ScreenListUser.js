import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUser = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: flex;
  justify-content: space-between;
`;
export default class ScreenListUser extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.registerUser();
  }
  registerUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, {
        headers: {
          Authorization: "jaqueline-lourenco-Molina"
        }
      })
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        alert("Hear problem try again!");
      });
  };
  deletUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios.delete(url, {
        headers: {
          Authorization: "jaqueline-lourenco-Molina"
        }
      })
      .then((response) => {
        alert("User(a) deleted(a) successfully!!");
        this.registerUser();
      })
      .catch((error) => {
        alert("Try Again!");
      });
  };

  render() {
    const listUser = this.state.users.map((user) => {
      return (
        <CardUser key={user.id}>
          {user.name}
          <button onClick={() => this.deletUser(user.id)}>X</button>
        </CardUser>
      );
    });
    return (
      <div>
        <button onClick={this.props.goToRegister}>Register</button>
        <h2>Screen List User</h2>
        {listUser}
      </div>
    );
  }
}
