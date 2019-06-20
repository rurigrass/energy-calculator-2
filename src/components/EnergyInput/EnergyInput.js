import React from "react";

const EnergyInput = props => {    
  return (
    <div className="ui right labeled input" style={{ marginTop: "10px" }}>
      {props.energyType === "electric" ? (
        <input
          type="number"
          max="999999"
          placeholder="Enter kWh"
          onChange={props.energyAmount}
        />
      ) : (
        <input
          type="number"
          max="999999"
          placeholder="Enter m³"
          onChange={props.energyAmount}
        />
      )}
      {props.energyType === "electric" ? (
        <div className="ui basic label">kWh</div>
      ) : (
        <div className="ui basic label">m³</div>
      )}
    </div>
  );
};

export default EnergyInput;
