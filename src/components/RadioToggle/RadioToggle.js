import React from "react";

const RadioToggle = props => {
  return (
    <div>
      <div className="ui radio checkbox">
        <input
          type="radio"
          name={props.option1}
          checked={props.checked === props.option1}
          onChange={props.type}
        />
        <label>{props.option1}</label>
      </div>
      <div className="ui radio checkbox" style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          name={props.option2}
          checked={props.checked === props.option2}
          onChange={props.type}
        />
        <label>{props.option2}</label>
      </div>
    </div>
  );
};

export default RadioToggle;
