import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Homepage/Homepage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
      </div>
    );
  }
}
