import React, { Component } from "react";
import RadioToggle from "./RadioToggle/RadioToggle";
import EnergyInput from "./EnergyInput/EnergyInput";

class EnergyCalculator extends Component {
  state = {
    meterType: "1-rate",
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
            type={e => {
              this.setState({ meterType: e.target.name });
            }}
            option1="1-rate"
            option2="2-rate"
            checked={this.state.meterType}
          />
          <RadioToggle
            type={e => {
              this.setState({ energyType: e.target.name });
            }}
            option1="electric"
            option2="gas"
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
