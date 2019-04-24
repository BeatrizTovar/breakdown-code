import React, { Component, Fragment } from "react";
import "./App.css";
import NavbarTop from "./common/navbar";
import Breakdowns from "./components/breakdowns";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <NavbarTop />
          <Breakdowns />
        </div>
      </Fragment>
    );
  }
}

export default App;
