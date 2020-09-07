import React, { useState } from "react";

import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  function handleFirstInputChange(event) {
    setFirstNumber(event.target.value);
  }

  function handleSecondInputChange(event) {
    setSecondNumber(event.target.value);
  }

  function handleOperatorChange(event) {
    setOperator(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const toNumber1 = Number(firstNumber);
    const toNumber2 = Number(secondNumber);

    switch (operator) {
      case "+":
        setResult(firstNumber + secondNumber);
        break;
      case "-":
        setResult(toNumber1 - toNumber2);
        break;
      case "*":
        setResult(toNumber1 * toNumber2);
        break;
      case "/":
        setResult(toNumber1 / toNumber2);
        break;
      default:
        return;
    }
  }

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <form action="">
        <input
          value={firstNumber}
          onChange={handleFirstInputChange}
          type="number"
        />

        <select value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <input
          value={secondNumber}
          onChange={handleSecondInputChange}
          type="number"
        />

        <button type="submit" onClick={handleSubmit}>
          Calcular
        </button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
