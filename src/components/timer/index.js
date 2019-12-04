import React, { Component } from "react";
import ReactDOM from "react-dom";

class TimerComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("render timer called with ", this.props.timerCount);
    return (
      <div>
        <h1>Timer Component</h1>
        <p>Timer Count : {this.props.timerCount}</p>
        <button
          onClick={this.props.incrementTimerCount.bind(
            this,
            this.props.timerCount
          )}
        >
          Start Timer
        </button>
      </div>
    );
  }
}

export default TimerComponent;
