import React, { Component } from "react";

class ClassClick extends Component {
  ClickHandler() {
    alert("Class button was clicked");
    console.log("Class button clicked has been logged!");
  }
  render() {
    return (
      <>
        <button onClick={this.ClickHandler}>Class Click</button>
      </>
    );
  }
}

export default ClassClick;
