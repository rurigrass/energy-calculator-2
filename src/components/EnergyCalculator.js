import React, { Component } from 'react';

import EnergyInput from './EnergyInput/EnergyInput';
import { Postcode } from './Postcode';
import RadioGroup from './RadioToggle/RadioGroup';

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
      <div className="ui compact segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <Postcode />
          <RadioGroup
            name="Meter Type"
            changeFn={e => {
              this.setState({ meterType: e.target.name });
            }}
            options={["1-rate", "2-rate"]}
            selectedOption={this.state.meterType}
          />

          <RadioGroup
            name="Fuel Type"
            changeFn={e => {
              this.setState({ meterType: e.target.name });
            }}
            options={["Electricity", "Gas"]}
            selectedOption={this.state.energyType}
          />

          Previous reading
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
          <br/>
          <br/>
          New Reading
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
          <br/><br/>
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
