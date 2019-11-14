import React from "react";

const CalculatorResult = props => {
  //   let priceTotal = props.unitTotal + props.standingTotal;
  //   console.log(priceTotal);

  return (
    <div className="ui green inverted segment">
      <h1 className="ui header" style={{ textAlign: "center" }}>
        unit charge £ {props.unitTotal.toFixed(2)}
      </h1>
      <h1 className="ui header" style={{ textAlign: "center" }}>
        standing charge £ {props.standingTotal.toFixed(2)}
      </h1>
      <h1 className="ui header" style={{ textAlign: "center" }}>
        standing charge £ {props.priceTotal.toFixed(2)}
      </h1>
    </div>
  );
};

export default CalculatorResult;
