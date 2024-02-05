// Excercise 2: Timed Counter
import { useEffect, useState} from "react";

function TimedCounter() {
    const [count, setCount] = useState (0);
    const [timer, setTimer] = useState (0); // Use state for timer added to keep track of the timer's seconds. 

    useEffect(() => {
        let interval;

        if (count > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000)
        } else {
            setTimer(0); // Reset the timer when the count is zero.
        }

        return () => {
            // Cleanup interval when component unmounts or count is reset
            clearInterval(interval);
          };
      
        }, [count]);
    
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
  
        {count > 0 && (
          <div>
            <p>Elapsed Time: {timer} seconds</p>
          </div>
        )}
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      );
}

export default TimedCounter;