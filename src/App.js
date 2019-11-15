import React, { Component } from "react";
import EnergyCalculator from "./components/EnergyCalculator";
import CalculatorResult from "./components/CalculatorResult";

import differenceInDays from "date-fns/differenceInDays"
// import { format } from "date-fns/esm/fp";
import { subMonths } from "date-fns/fp";
// var differenceInDays = require('date-fns/differenceInDays')

class App extends Component {
  state = {
    energyType: null,
    unitTotal: null,
    standingTotal: null,
    priceTotal: null,
    daysTotal: null,
    energyTotal: null,
    nextStatementDate: null
  };

  calculateResult = info => {
    const energyTotal = info.secondEnergyAmount - info.firstEnergyAmount;
    // const timeAmount = info.secondReadingDate - info.firstReadingDate;
    // const daysTotal = Math.floor(timeAmount / 86400);
    // console.log(format("dd/MM/yyyy", info.secondReadingDate));
    
    const daysTotal = differenceInDays(info.secondReadingDate, info.firstReadingDate);
    let unitTotal, standingTotal, priceTotal;
    //CALCULATE STANDING CHARGE
    const longResult = daysTotal * 0.2044;
    standingTotal = longResult;
    //CALC UNIT CHARGE ELEC
    if (info.energyType === "Electricity") {
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

    //NEXT STATEMENT
    console.log(info.nextStatementDate);
    const prevMonth = subMonths(info.nextStatementDate, 1);
    console.log(prevMonth);
    

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
        <div className="ui container" style={{ marginTop: "20px" }}>
          <h1 style={{ textAlign: "center" }}>Energy Price Calculator</h1>
          <EnergyCalculator onSubmit={this.calculateResult} />
          {calculatorResult}
        </div>
      </div>
    );
  }
}

export default App;