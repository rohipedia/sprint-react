import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Scrums from "./components/Scrums/Scrums";

class App extends Component {
  state = {
    showScrums: true,
    buttonLabel: "Hide Scrums"
  };

  buttonClickedHandler = () => {
    const currentState = this.state.showScrums;
    this.setState({
      showScrums: !currentState,
      buttonLabel: (currentState ? "Show Scrums" : "Hide Scrums")
    });
  };

  render() {
    return (
      <div id="start" className="container">
        <Header />
        <Scrums
          showScrums={this.state.showScrums}
          label={this.state.buttonLabel}
          buttonClick={this.buttonClickedHandler}
        />
      </div>
    );
  }
}

export default App;
