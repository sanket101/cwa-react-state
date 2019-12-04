import React, { Component } from "react";
import ReactDOM from "react-dom";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Button Clicks : {this.props.clickCount} </p>
        <p>Timer Count : {this.props.timerCount} </p>
      </div>
    );
  }
}

export default ClassComponent;
