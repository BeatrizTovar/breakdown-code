import React, { Component } from "react";
import { Table } from "react-bootstrap";

const BreakdownList = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.1</td>
          <td>2.1</td>
          <td>3.1</td>
        </tr>
        <tr>
          <td>1.2</td>
          <td>2.2</td>
          <td>3.2</td>
        </tr>
        <tr>
          <td>1.3</td>
          <td>2.3</td>
          <td>3.3</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BreakdownList;
