// src/App.js
import React, { useState } from 'react';  // Import React and useState hook
import './App.css';  // Import the styles for the app

function App() {
  // Declare state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter">
        {/* Display the current count */}
        <button onClick={decrement}>Decrement</button>
        <span className="count">{count}</span>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default App;
