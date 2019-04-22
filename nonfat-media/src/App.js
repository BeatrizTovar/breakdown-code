import React, { Component, Fragment } from "react";

import logo from "./logo.svg";
import "./App.css";
import Navbar_Top from "./common/navbar";

import Breakdowns from "./components/breakdowns";
import { Container, Row, Col } from "react-bootstrap";

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
