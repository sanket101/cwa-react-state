import React, { Component } from "react";
import HeaderComponent from "../header";
import TimerComponent from "../timer";
import ClassComponent from "../class-component";
import FooterComponent from "../footer";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerCount: 0,
      clickCount: 0
    };
    this.incrementTimerCount = this.incrementTimerCount.bind(this);
    this.incrementButtonCount = this.incrementButtonCount.bind(this);
  }

  incrementTimerCount(timeCounter) {
    console.log("timeCounter received", timeCounter);
    let i = 0;
    let that = this;
    (function(i) {
      setInterval(() => {
        console.log(this);
        that.setState({ timerCount: i++ });
      }, 1000);
    })(i);
  }

  incrementButtonCount(tempCounter) {
    let count = tempCounter + 1;
    this.setState({
      clickCount: count
    });
  }

  render() {
    console.log("render parent called");
    console.log("current val in render", this.state.timerCount);
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <TimerComponent
          timerCount={this.state.timerCount}
          incrementTimerCount={this.incrementTimerCount}
        ></TimerComponent>
        <ClassComponent
          clickCount={this.state.clickCount}
          timerCount={this.state.timerCount}
        ></ClassComponent>
        <ClassComponent
          clickCount={this.state.clickCount}
          timerCount={this.state.timerCount}
        ></ClassComponent>
        <FooterComponent
          clickCount={this.state.clickCount}
          incrementButtonCount={this.incrementButtonCount}
        ></FooterComponent>
      </div>
    );
  }
}

export default AppComponent;
