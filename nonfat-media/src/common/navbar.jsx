import React, { Fragment } from "react";
import { Navbar } from "react-bootstrap";

const Navbar_Top = () => {
  return (
    <Fragment>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>{"NonFat Media"}</Navbar.Brand>
      </Navbar>
    </Fragment>
  );
};

export default Navbar_Top;
