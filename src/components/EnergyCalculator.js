import React, { Component } from 'react';

import AddReadingSection from './AddReadingSection';
import EnergyInput from './EnergyInput/EnergyInput';
import NextStatementDateInput from './NextStatementDateInput/NextStatementDateInput';
import Postcode from './Postcode';
import RadioGroup from './RadioGroup';
import SectionTitle from './SectionTitle';

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

          <RadioGroup
            name="Fuel Type"
            changeFn={e => {
              this.setState({ energyType: e.target.name });
            }}
            options={["Electricity", "Gas"]}
            selectedOption={this.state.energyType}
          />

          {/* <SectionTitle>Previous reading</SectionTitle>
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
          /> */}
          <AddReadingSection title="Previous Reading"/>

          <SectionTitle>New reading</SectionTitle>
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

          <SectionTitle>Next statement date (optional)</SectionTitle>
          <NextStatementDateInput
            statementDate={e => {
              const nextStatementDate = new Date(`${e.target.value}`)
              this.setState({ nextStatementDate });
              console.log(nextStatementDate);

            }}
          />

          <button
            className="ui green button"
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
