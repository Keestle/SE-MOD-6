// Excercise 1: Stateful Counter

import { useState} from "react";

function Counter() {
    const [count, setCount] = useState (0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    }

    return (
        <div>
          <h3>Stateful Counter</h3>
          <p>Current Count: {count}</p>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      );
}

export default Counter;