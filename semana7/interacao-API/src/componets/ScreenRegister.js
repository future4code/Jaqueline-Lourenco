import axios from "axios";
import React from "react";

export default class ScreenRegister extends React.Component {
  state = {
    name: "",
    email: ""
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  register = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.name,
      email: this.state.email
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "jaqueline-lourenco-Molina"
        }
      })
      .then((response) => {
        alert("Successfully registered User!!");
        this.setState({ name: "", email: "" });
      })
      .catch((error) => {
        alert(error.response.data.menssage);
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.props.goToList}>List User</button>
        <h2>Screen Register</h2>
        <input
          placeholder={"Name:"}
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          placeholder={"E-mail:"}
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}
