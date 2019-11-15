import React, { Component } from "react";
import EnergyCalculator from "./components/EnergyCalculator";
import CalculatorResult from "./components/CalculatorResult";

class App extends Component {
  state = {
    energyType: null,
    unitTotal: null,
    standingTotal: null,
    priceTotal: null,
    daysTotal: null,
    energyTotal: null
  };

  calculateResult = info => {
    const energyTotal = info.secondEnergyAmount - info.firstEnergyAmount;
    const timeAmount = info.secondReadingDate - info.firstReadingDate;
    const daysTotal = Math.floor(timeAmount / 86400);
    let unitTotal, standingTotal, priceTotal;
    //CALCULATE STANDING CHARGE
    const longResult = daysTotal * 0.2044;
    standingTotal = longResult;
    //CALC UNIT CHARGE ELEC
    if (info.energyType === "electricity") {
      const longResult = energyTotal * 0.1301;
      unitTotal = longResult;
    } else {
      //CALC UNIT CHARGE GAS
      const byVCF = energyTotal * 1.02264 * 40;
      const byCV = byVCF / 3.6;
      const kWHCF = byCV * 0.03678;
      unitTotal = kWHCF;
    }
    // console.log(unitTotal);
    // console.log(standingTotal);
    priceTotal = unitTotal + standingTotal;

    this.setState({
      energyType: info.energyType,
      unitTotal,
      standingTotal,
      priceTotal,
      daysTotal,
      energyTotal,
      nextStatementDate: info.nextStatementDate
    });
  };

  render() {
   
    console.log(this.state);

    let calculatorResult = null;
    if (this.state.unitTotal) {
      calculatorResult = (
        <CalculatorResult
          energyType={this.state.energyType}
          unitTotal={this.state.unitTotal}
          standingTotal={this.state.standingTotal}
          priceTotal={this.state.priceTotal}
          daysTotal={this.state.daysTotal}
          energyTotal={this.state.energyTotal}
        />
      );
    }

    return (
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <div className="ui container" style={{ marginTop: "100px" }}>
          <h1 style={{ textAlign: "center" }}>Energy Price Calculator</h1>
          <EnergyCalculator onSubmit={this.calculateResult} />
          {calculatorResult}
        </div>
      </div>
    );
  }
}

export default App;