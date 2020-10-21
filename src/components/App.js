import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: false, id: null };
  }

  render() {
    const handleClick = () => {
      this.setState({ text: true });
      this.setState({ id: "para" });
    };
    let ans = "";
    if (this.state.text) {
      ans =
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    }
    return (
      <div id="main">
        <button id="click" onClick={handleClick}>
          Click here
        </button>
        <p id={this.state.id}>{ans}</p>
      </div>
    );
  }
}

export default App;
