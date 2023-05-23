import React from "react";
import { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name}, AKA {this.props.nickname}
      </h1>
    );
  }
}

class Welcome2 extends Component {
  render() {
    const { name, nickname } = this.props;
    return (
      <h1>
        Welcome {name}, AKA {nickname}
      </h1>
    );
  }
}
export { Welcome, Welcome2 };
