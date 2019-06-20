import React from "react";

const CalculatorResult = props => {
  return (
    <div className="ui green inverted segment">
      <h1 className="ui header" style={{ textAlign: "center" }}>£ {props.result}</h1>
    </div>
  );
};

export default CalculatorResult;
