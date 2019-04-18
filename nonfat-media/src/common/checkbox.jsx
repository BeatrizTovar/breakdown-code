import React, { Fragment } from "react";
import { Form } from "react-bootstrap";

const CheckBox = props => {
  return (
    <Fragment>
      {/* <Form.Check custom type="checkbox" id="custom-checkbox" label="Yes" /> */}
      <input type="checkbox" name="myTextEditBox" value="checked" /> Yes
    </Fragment>
  );
};

export default CheckBox;
