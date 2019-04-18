import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";
import CheckBox from "../common/checkbox";

const breakdownsTable = props => {
  const { breakdowns } = props;
  return (
    <Fragment>
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
          {breakdowns.map(item => (
            <tr key={`${item.title}_${item.added}`}>
              <td>{item.added}</td>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>{item.castingDirector}</td>
              <td>{item.startDate}</td>
              <td>
                <CheckBox />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default breakdownsTable;
