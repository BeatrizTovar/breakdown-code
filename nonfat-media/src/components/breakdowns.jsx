import React, { Component, Fragment } from "react";
import { getProjects } from "../services/projectsService";
import BreakdownsTable from "./breakdownsTable";
import _ from "lodash";

class Breakdowns extends Component {
  state = {
    breakdowns: [],
    sortColumn: { column: "added", order: "desc" }
  };

  componentDidMount() {
    this.setState({
      breakdowns: getProjects()
    });
  }

  handleCheckBox = index => {
    const { breakdowns } = this.state;
    let obj = JSON.parse(JSON.stringify(breakdowns));
    obj[index].isChecked = !obj[index].isChecked;
    this.setState({ breakdowns: obj });
  };

  handleSort = column => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.column === column)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.column = column;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    let { breakdowns, sortColumn } = this.state;
    const sorted = _.orderBy(
      breakdowns,
      [sortColumn.column],
      [sortColumn.order]
    );

    return (
      <Fragment>
        <div className="row-9">
          <BreakdownsTable
            breakdowns={sorted}
            onCheck={this.handleCheckBox}
            onSort={this.handleSort}
          />
        </div>
      </Fragment>
    );
  }
}

export default Breakdowns;
