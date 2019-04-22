import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar_Top from "./common/navbar";
import Breakdowns from "./components/breakdowns";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Navbar_Top />
          <Breakdowns />
        </div>
      </Fragment>
    );
  }
}

export default App;
