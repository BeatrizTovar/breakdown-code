import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar_Top from "./common/navbar";
import Breakdowns from "./components/breakdowns";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar_Top />
        <Breakdowns />
      </Fragment>
    );
  }
}

export default App;
