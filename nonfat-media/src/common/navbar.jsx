import React, { Fragment } from "react";
import { Navbar } from "react-bootstrap";

const Navbar_Top = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{"NonFat Media Code Challenge"}</Navbar.Brand>
      </Navbar>
    </Fragment>
  );
};

export default Navbar_Top;
