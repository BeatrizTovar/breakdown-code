import React, { Component, Fragment } from "react";
import { getProjects } from "../services/projectsService";
import BreakdownsTable from "./breakdownsTable";

class Breakdowns extends Component {
  state = {
    breakdowns: []
  };

  componentDidMount() {
    this.setState({
      breakdowns: getProjects()
    });
  }

  render() {
    console.log(this.state.projects);
    return (
      <Fragment>
        <BreakdownsTable breakdowns={this.state.breakdowns} />
      </Fragment>
    );
  }
}

export default Breakdowns;
