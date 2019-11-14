import React, { Component } from "react";
import RadioToggle from "./RadioToggle/RadioToggle";
import EnergyInput from "./EnergyInput/EnergyInput";

class EnergyCalculator extends Component {
  state = {
    energyType: "electric",
    firstEnergyAmount: null,
    firstReadingDate: null,
    secondEnergyAmount: null,
    secondReadingDate: null
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <RadioToggle
            energyType={e => {
              this.setState({ energyType: e.target.name });
            }}
            checked={this.state.energyType}
          />
          <EnergyInput
            energyAmount={e => {
              this.setState({ firstEnergyAmount: e.target.value });
            }}
            readingDate={e => {
              const firstReadingDate =
                new Date(`${e.target.value}`).getTime() / 1000;
              this.setState({ firstReadingDate });
            }}
            energyType={this.state.energyType}
            readingType="first"
          />
          <EnergyInput
            energyAmount={e => {
              this.setState({ secondEnergyAmount: e.target.value });
            }}
            readingDate={e => {
              const secondReadingDate =
                new Date(`${e.target.value}`).getTime() / 1000;
              this.setState({ secondReadingDate });
            }}
            energyType={this.state.energyType}
            readingType="second"
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
