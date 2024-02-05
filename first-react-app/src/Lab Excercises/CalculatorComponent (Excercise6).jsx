import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

// STATE-SET UP: The calculator component uses "useState" to manage states.
const Calculator = () => {
  const [num1, setNum1] = useState(''); // number1 is a useState because it needs to be re-rendered and needs to be remembered, input numbers for num 1 is stored here.
  const [num2, setNum2] = useState(''); // Same as above.
  const [result, setResult] = useState(''); // We need to store our results here. 
  const [error, setError] = useState(null); // storing any error that may occur during calculation.

  
  const handleCalculate = (operator) => { // takes an operator as an argument performs the corresponding calculation. 
    const number1 = parseFloat(num1); // Parsefloat is used to convert the input strings into numbers. 
    const number2 = parseFloat(num2); // per above. 

    switch (operator) {
      case '+':
        setResult(isNaN(number1 + number2) ? new Error('Invalid input') : (number1 + number2).toString());
        break;
      case '-':
        setResult(isNaN(number1 - number2) ? new Error('Invalid input') : (number1 - number2).toString());
        break;
      case '*':
        setResult(isNaN(number1 * number2) ? new Error('Invalid input') : (number1 * number2).toString());
        break;
      case '/':
        setResult(
          number2 !== 0
            ? isNaN(number1 / number2)
              ? new Error('Invalid input')
              : (number1 / number2).toString()
            : 'Cannot divide by zero'
        );
        break;
      default:
        setResult(new Error('Invalid operator'));
        break;
    }
  };

  // UI SECTION: renders our input form. An onchange event is used to update the corresponding state variables.
  return (
    <div className="calculator">
      <div className="input-form">
        <label>
          Number 1:
          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} /> 
        </label>
        <label>
          Number 2:
          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        </label>
        <button onClick={() => handleCalculate('+')}>+</button>
        <button onClick={() => handleCalculate('-')}>-</button>
        <button onClick={() => handleCalculate('*')}>*</button>
        <button onClick={() => handleCalculate('/')}>/</button>
      </div>
      <div className="result">
        {result && <p>Result: {result}</p>}
      </div>
    </div>
  );
};

export default Calculator;
