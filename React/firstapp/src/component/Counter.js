import React, { Component } from "react";

class Counter extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
    });
  }

  render() {
    return (
      <>
        <h1> Count - {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
      </>
    );
  }
}

export default Counter;
