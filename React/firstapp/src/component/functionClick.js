import React from "react";

function FunctionClick() {
  function clickHandler() {
    alert("Function button was clicked");
    console.log("function log was clicked");
  }
  return (
    <>
      <button onClick={clickHandler}>Function Click</button>
    </>
  );
}
export default FunctionClick;
