import React, { Component } from 'react';

import EnergyInput from './EnergyInput/EnergyInput';
import { Postcode } from './Postcode';
import RadioGroup from './RadioToggle/RadioGroup';
import NextStatementDateInput from "./NextStatementDateInput/NextStatementDateInput";

class EnergyCalculator extends Component {
  state = {
    meterType: "1-rate",
    energyType: "Electricity",
    firstEnergyAmount: null,
    firstReadingDate: null,
    secondEnergyAmount: null,
    secondReadingDate: null,
    nextStatementDate: null
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
          {/* <RadioGroup
            name="Meter Type"
            changeFn={e => {
              this.setState({ meterType: e.target.name });
            }}
            options={["1-rate", "2-rate"]}
            selectedOption={this.state.meterType}
          /> */}

          <RadioGroup
            name="Fuel Type"
            changeFn={e => {
              this.setState({ energyType: e.target.name });
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
              const firstReadingDate = new Date(`${e.target.value}`);
              this.setState({ firstReadingDate });
            }}
            energyType={this.state.energyType}
            readingType="first"
          />
          <br />
          <br />
          New reading
          <EnergyInput
            energyAmount={e => {
              this.setState({ secondEnergyAmount: e.target.value });
            }}
            readingDate={e => {
              const secondReadingDate = new Date(`${e.target.value}`);
              this.setState({ secondReadingDate });
            }}
            energyType={this.state.energyType}
            readingType="second"
          />
          <br />
          <br />
          Next statement date (optional)
          <NextStatementDateInput
            statementDate={e => {
              const nextStatementDate = new Date(`${e.target.value}`)
              this.setState({ nextStatementDate });
              console.log(nextStatementDate);

            }}
          />
          <br /><br />
          <button
            className="ui green button"
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
