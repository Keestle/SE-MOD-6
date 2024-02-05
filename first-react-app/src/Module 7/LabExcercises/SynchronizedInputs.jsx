// Excercise 5: 

import React, { useState, useEffect } from "react";

function SynchronizedInputs() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Update the other input field when inputValue changes
    // This effect runs after each render
    document.getElementById("input1").value = inputValue;
    document.getElementById("input2").value = inputValue;
  }, [inputValue]);

  const handleInputChange = (event) => {
    // Update the state when either input field changes
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h3>Synchronized Inputs</h3>

      {/* Input field 1 */}
      <label>
        Input 1:
        <input
          type="text"
          id="input1"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>

      {/* Input field 2 */}
      <label>
        Input 2:
        <input
          type="text"
          id="input2"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}

export default SynchronizedInputs;
