import React, { Component, Fragment } from "react";
import { getProjects } from "../services/projectsService";
import BreakdownsTable from "./breakdownsTable";

class Breakdowns extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.setState({
      projects: getProjects()
    });
  }

  render() {
    console.log(this.state.projects);
    return (
      <Fragment>
        <BreakdownsTable />
      </Fragment>
    );
  }
}

export default Breakdowns;
