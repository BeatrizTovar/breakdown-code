import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar_Top from "./common/navbar";
import BreakdownList from "./common/list";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar_Top />
        <BreakdownList />
      </div>
    );
  }
}

export default App;
