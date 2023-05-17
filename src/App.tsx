import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Counter() {
  return (
    <div>
      <h1>Counter</h1>
      <button>+</button> 0
      <table>
        <thead>
          <tr>
            <td>time</td>
            <td>step</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
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
