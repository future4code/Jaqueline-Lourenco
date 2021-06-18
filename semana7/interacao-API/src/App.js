import React from "react";
import ScreenRegister from "./componets/ScreenRegister";
import ScreenListUser from "./componets/ScreenListUser";

export default class App extends React.Component {
  state = {
    currentScreen: "list"
  };

  screenOption = () => {
    switch (this.state.currentScreen) {
      case "register":
        return <ScreenRegister goToList={this.goToList} />;
      case "list":
        return <ScreenListUser goToRegister={this.goToRegister} />;
      default:
        return <div>Error! Page not found: </div>;
    }
  };

  goToRegister = () => {
    this.setState({ currentScreen: "register" });
  };
  goToList = () => {
    this.setState({ currentScreen: "list" });
  };
  render() {
    return <div>{this.screenOption()}</div>;
  }
}
