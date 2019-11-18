import { differenceInDays, subMonths } from 'date-fns';
import React, { Component } from 'react';
import styled from 'styled-components';

import CalculatorResult from './components/CalculatorResult';
import EnergyCalculator from './components/EnergyCalculator';

const AppContainer = styled.div`
  max-width: 500px;
  margin:  0 auto;
  font-family: Graphik;
`;

const Title = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`;

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
      <AppContainer>
        <div className="ui container" style={{ marginTop: "20px" }}>
          <Title >Energy Price Calculator</Title>
          <EnergyCalculator onSubmit={this.calculateResult} />
          {calculatorResult}
        </div>
      </AppContainer>
    );
  }
}

export default App;
