import React from "react";
import { Form } from "react-bootstrap";

const CheckBox = props => {
  return (
    <Form.Check custom type={"checkbox"} id={"custom-checkbox"} label={"Yes"} />
  );
};

export default CheckBox;
