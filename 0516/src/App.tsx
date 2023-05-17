import React, { useState, useEffect } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div>
      <h1>Counter</h1>
      <input
        type="text"
        value={step}
        onChange={(e) => {
          setStep(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setCount(count + step);
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
