import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: false };
  }

  render() {
    const handleClick = () => {
      this.setState(!this.state.text);
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
        <p id="para">{ans}</p>
      </div>
    );
  }
}

export default App;
