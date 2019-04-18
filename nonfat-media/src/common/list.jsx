import React, { Component } from "react";
import { Table } from "react-bootstrap";
import CheckBox from "./checkbox";

const BreakdownList = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Added</th>
          <th>Title</th>
          <th>Type</th>
          <th>Casting Director</th>
          <th>Start Date</th>
          <th>Interested</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.1</td>
          <td>2.1</td>
          <td>3.1</td>
          <td>4.1</td>
          <td>5.1</td>
          <CheckBox />
        </tr>
        <tr>
          <td>1.2</td>
          <td>2.2</td>
          <td>3.2</td>
          <td>4.2</td>
          <td>5.2</td>
          <CheckBox />
        </tr>
        <tr>
          <td>1.3</td>
          <td>2.3</td>
          <td>3.3</td>
          <td>4.3</td>
          <td>5.3</td>
          <CheckBox />
        </tr>
      </tbody>
    </Table>
  );
};

export default BreakdownList;
