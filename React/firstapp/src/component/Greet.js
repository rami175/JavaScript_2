import React from "react";

function Greet(props) {
  return (
    <div>
      <h1>
        Hello {props.name} , AKA {props.nickname}
      </h1>
      {props.children}
    </div>
  );
}

const Greet2 = ({ name, nickname }) => {
  return (
    <div>
      <h1>
        Hello {name}, AKA {nickname}
      </h1>
    </div>
  );
};

const Greet3 = (props) => {
  const { name, nickname } = props;
  return (
    <div>
      <h1>
        Hello {name}, AKA {nickname}
      </h1>
    </div>
  );
};
export { Greet, Greet2, Greet3 };
