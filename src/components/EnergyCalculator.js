import React, { Component } from "react";
import RadioToggle from "./RadioToggle/RadioToggle";
import EnergyInput from "./EnergyInput/EnergyInput";

class EnergyCalculator extends Component {
  state = {
    energyType: "electric",
    energyAmount: null
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div className="ui segment" 
      //  style={{ maxWidth: "500px" }}
       >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <RadioToggle
            energyType={e => {
              this.setState({ energyType: e.target.name });
            }}
            checked={this.state.energyType}
          />
          <EnergyInput
            energyAmount={e => {
              this.setState({ energyAmount: e.target.value });
            }}
            energyType={this.state.energyType}
          />
          <button
            className="ui inverted green button"
            style={{ float: "right" }}
            onClick={this.onFormSubmit}
          >
            Calculate
          </button>
        </form>
      </div>
    );
  }
}

export default EnergyCalculator;
