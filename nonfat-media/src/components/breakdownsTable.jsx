import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";

const breakdownsTable = props => {
  const { breakdowns, handleCheckBox } = props;
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
          {breakdowns.map((item, index) => (
            <tr key={`${item.title}_${item.added}`}>
              <td>{item.added}</td>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>{item.castingDirector}</td>
              <td>{item.startDate}</td>
              <td>
                <input
                  type="checkbox"
                  key={`${item.title}_${item.added}`}
                  value="checked"
                  onClick={handleCheckBox(index)}
                />{" "}
                Yes
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default breakdownsTable;
