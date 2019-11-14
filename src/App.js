import React, { Component } from "react";
import EnergyCalculator from "./components/EnergyCalculator";
import CalculatorResult from "./components/CalculatorResult";

class App extends Component {
  state = {
    unitTotal: null,
    standingTotal: null,
    priceTotal: null
  };

  calculateResult = info => {
    const energyAmount = info.secondEnergyAmount - info.firstEnergyAmount;
    const timeAmount = info.secondReadingDate - info.firstReadingDate;
    const daysAmount = Math.floor(timeAmount / 86400);
    let unitTotal, standingTotal, priceTotal;
    //CALCULATE STANDING CHARGE
    const longResult = daysAmount * 0.2044;
    standingTotal = longResult;
    //CALC UNIT CHARGE ELEC
    if (info.energyType === "electric") {
      const longResult = energyAmount * 0.1301;
      unitTotal = longResult;
    } else {
      //CALC UNIT CHARGE GAS
      const byVCF = energyAmount * 1.02264 * 40;
      const byCV = byVCF / 3.6;
      const kWHCF = byCV * 0.03678;
      unitTotal = kWHCF;
    }
    // console.log(unitTotal);
    // console.log(standingTotal);
    priceTotal = unitTotal + standingTotal;
    console.log(priceTotal);
    
    // console.log(parseInt(priceTotal));
    this.setState({
      unitTotal,
      standingTotal,
      priceTotal
    });
  };

  render() {
    // console.log(this.state);

    let calculatorResult = null;
    if (this.state.unitTotal) {
      calculatorResult = (
        <CalculatorResult
          unitTotal={this.state.unitTotal}
          standingTotal={this.state.standingTotal}
          priceTotal={this.state.priceTotal}
        />
      );
    }

    return (
      <div style={{ maxWidth: "500px", margin: "auto" }}>
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