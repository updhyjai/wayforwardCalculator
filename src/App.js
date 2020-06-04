import React from "react";
import "./App.css";
import CalculatorButton from "./components/CalculatorButton";
import { OPERATOR, OPERATORS, NUMERIC_VALUE } from "./common/constants";
import Display from "./components/Display";
import { getResult } from "./common/utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      operand1: null,
      operand2: null,
      display: "",
      operator: "",
    };
    this.state = { ...this.initialState };
    this.handleClickOnNumeric = this.handleClickOnNumeric.bind(this);
    this.handleClickOnOperator = this.handleClickOnOperator.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.NUMERIC_VALUES = NUMERIC_VALUE.reverse();
    this.OPERATORS = OPERATORS;
  }

  handleClear() {
    this.setState({ ...this.initialState });
  }
  handleClickOnNumeric(numericValue) {
    if (!this.state.operator) {
      let operand1 =
        this.state.operand1 === null
          ? numericValue
          : this.state.operand1 * 10 + numericValue;

      this.setState((prevState) => ({
        operand1,
        display: prevState.display + numericValue,
      }));
    } else {
      let operand2 =
        this.state.operand2 === null
          ? numericValue
          : this.state.operand2 * 10 + numericValue;

      this.setState((prevState) => ({
        operand2,
        display: " " + prevState.display + numericValue,
      }));
    }
  }

  handleClickOnOperator(inputOperator) {
    if (this.state.operand1 === null) {
      return;
    }
    if (this.state.operand2 === null) {
      if (inputOperator === OPERATOR.EQUAL) {
        let display = ` ${this.state.operand1}`;
        this.setState(() => ({
          display,
          operator: "",
        }));
      } else {
        let display = `${this.state.operand1} ${inputOperator} `;
        this.setState(() => ({
          display,
          operator: inputOperator,
        }));
      }
    } else {
      const result = getResult(
        this.state.operand1,
        this.state.operand2,
        this.state.operator
      );
      let display =
        inputOperator === OPERATOR.EQUAL
          ? result
          : `${result} ${inputOperator}`;
      this.setState(
        () => ({
          operand1: result,
          operand2: null,
          operator: inputOperator,
          display,
        }),
        () => {
          console.log(this.state);
        }
      );
    }
  }

  render() {
    const operands = this.NUMERIC_VALUES.map((operand) => {
      return (
        <CalculatorButton
          class_name="button-numeric"
          key={operand}
          value={operand}
          handleClick={this.handleClickOnNumeric}
        />
      );
    });
    const operators = this.OPERATORS.map((operator) => {
      return (
        <CalculatorButton
          class_name="button-operator"
          key={operator}
          value={operator}
          handleClick={this.handleClickOnOperator}
        />
      );
    });
    return (
      <div className="App">
        <div className="container">
          <Display displayValue={`${this.state.display}`} />
          <div className="buttons">
            <div className="left">
              {operands}
              <CalculatorButton
                class_name="button-clear"
                value="C"
                handleClick={this.handleClear}
              />
              <CalculatorButton
                class_name="button-equal"
                value={OPERATOR.EQUAL}
                handleClick={this.handleClickOnOperator}
              />
            </div>
            <div className="right">{operators}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
