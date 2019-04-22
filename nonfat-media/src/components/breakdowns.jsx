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

  handleCheckBox = breakdown => {
    const breakdown = [...this.state.breakdowns];
    const index = breakdowns.indexOf(breakdown);
    breakdowns[index] = { ...breakdowns[index] };
    breakdowns[index].isChecked = !breakdowns[index].isChecked;
    this.setState({ breakdowns });
    // let obj = JSON.parse(JSON.stringify(this.state.breakdowns));
    // obj[index].isChecked = !obj[index].isChecked;
    // this.setState({ breakdowns: obj });
    // console.log(obj[index]);
  };

  render() {
    console.log(this.state.breakdowns);
    let { breakdowns } = this.state;
    return (
      <Fragment>
        <div className="row-9">
          <BreakdownsTable
            breakdowns={breakdowns}
            handleCheckBox={this.handleCheckBox}
          />
        </div>
      </Fragment>
    );
  }
}

export default Breakdowns;
