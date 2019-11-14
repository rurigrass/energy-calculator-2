import React from "react";

const CalculatorResult = props => {


  return (
    <div className="ui segment">
    Current cost for X days
    <br/>
      <table class="ui celled table">
        <thead>
          <tr><th>Usage</th>
            <th>Energy Cost</th>
            <th>Standing Charge</th>
            <th>Total</th>
          </tr></thead>
        <tbody>
          <tr>
            <td data-label="Usage"></td>
            <td data-label="Energy Cost">£ {props.unitTotal.toFixed(2)}</td>
            <td data-label="Standing Charge">£ {props.standingTotal.toFixed(2)}</td>
            <td data-label="Total">£ {props.priceTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalculatorResult;
