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

  handleCheckBox(e, index) {
    let obj = JSON.parse(JSON.stringify(this.state.breakdowns));
    obj[index].isChecked = !obj[index].isChecked;
    this.setState({ breakdowns: obj });

    // console.log(obj[index]);
  }

  render() {
    console.log(this.state.breakdowns);
    let { breakdowns } = this.state;

    let breakdownsList = breakdowns.map((item, index) => {
      return (
        <div key={`${item.added}_${item.title}`}>
          <div>
            <input
              className="checkbox"
              key={`${item.added}_${item.title}`}
              type="checkbox"
              onClick={e => this.handleCheckBox(e, index)}
            />
            <label>{item.title}</label>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        {/* <BreakdownsTable breakdowns={this.state.breakdowns} /> */}
        <div>{breakdownsList}</div>
      </Fragment>
    );
  }
}

export default Breakdowns;
