import React, { useState } from "react";
import "./App.css";

type countItemType = {
  time: string;
  step: number;
};
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState<countItemType[]>([]);
  return (
    <div>
      <h1>Counter</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => {
          setStep(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          const newCountItem: countItemType = {
            time: new Date().toLocaleTimeString(),
            step,
          };
          setCount([...count, newCountItem]);
        }}
      >
        +
      </button>
      0{" "}
      <table>
        <thead>
          <tr>
            <td>time</td>
            <td>step</td>
          </tr>
        </thead>
        <tbody>
          {count.map((value, index) => {
            return (
              <tr>
                <td>{value.time}</td>
                <td>{value.step}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
