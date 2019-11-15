import React from 'react';

const RadioToggle = props => {
  return (
    <div>
      <div className="ui radio checkbox">
        <input
          type="radio"
          name="electric"
          checked={props.checked === "electric"}
          onChange={props.energyType}
        />
        <label>Electric</label>
      </div>
      <div className="ui radio checkbox" style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          name="gas"
          checked={props.checked === "gas"}
          onChange={props.energyType}
        />
        <label>Gas</label>
      </div>
    </div>
  );
};

export default RadioToggle;
