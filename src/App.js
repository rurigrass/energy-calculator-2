import React, { Component } from "react";
import EnergyCalculator from "./components/EnergyCalculator";
import CalculatorResult from "./components/CalculatorResult";

class App extends Component {
  state = {
    result: null
  };

  calculateResult = info => {
    let result;
    if (info.energyType === "electric") {
      const longResult = info.energyAmount * 0.1301;
      result = longResult.toFixed(2);
    } else {
      const byVCF = info.energyAmount * 1.02264 * 40;
      const byCV = byVCF / 3.6;
      const kWHCF = byCV * 0.03678;
      result = kWHCF.toFixed(2);
    }
    this.setState({
      result
    });
  };

  render() {
    let calculatorResult = null;
    if (this.state.result) {
      calculatorResult = <CalculatorResult result={this.state.result} />;
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

