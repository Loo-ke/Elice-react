import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div className="layout">
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
