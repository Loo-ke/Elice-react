import React from "react";
import logo from "./logo.svg";
import "./App.css";
type CounterProps = {
  title: string;
  initValue?: Number;
};
function Counter({ title, initValue }: CounterProps) {
  function up() {}
  return (
    <>
      <h1>{title}</h1>
      <button onClick={up}>+</button> {initValue}
    </>
  );
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      <Counter title="고양이 카운터"></Counter>
      <Counter title="Counter"></Counter>
    </div>
  );
}

export default App;
