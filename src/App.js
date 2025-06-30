import React from "react";

import { useState } from "react"; 
import "./App.css";
function App() {
  const [count, setCount] = useState(0);// Initialize state with a default value of 10

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
    </div>
  );
} 
export default App;