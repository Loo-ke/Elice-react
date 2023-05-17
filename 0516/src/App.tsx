import React, { useState, useEffect } from "react";
import "./App.css";

function Counter4UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      // setCount(count + 1);
      setCount((oldCount) => oldCount + 1);
      console.log("count2", count);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>useEffect, setInterval</h1>
      {count}
    </div>
  );
}

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
      <Counter4UseEffect />
      <Counter />
    </div>
  );
}

export default App;
