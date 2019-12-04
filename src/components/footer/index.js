import React, { Component } from "react";
import ReactDOM from "react-dom";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Footer Component</h1>
        <button
          onClick={this.props.incrementButtonCount.bind(
            this,
            this.props.clickCount
          )}
        >
          Click Me!
        </button>
      </div>
    );
  }
}

export default FooterComponent;
