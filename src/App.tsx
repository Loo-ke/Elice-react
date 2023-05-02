import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
type CounterProps = {
  title: string;
  initValue?: number;
};
function Counter({ title, initValue = 0 }: CounterProps) {
  // const countState = useState(initValue);
  // let count = countState[0];
  // let setCount = countState[1];
  const [count, setCount] = useState(initValue);
  function up() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>{title}</h1>
      <button onClick={up}>+</button> {count}
    </>
  );
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={0}></Counter>
    </div>
  );
}

export default App;
