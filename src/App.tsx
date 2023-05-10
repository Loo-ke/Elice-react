import React, { useState } from 'react';
import './App.css';
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
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

console.log(getCurrentTime());

function Counter2() {
  const [times, setTimes] = useState([]);
  console.log('component - times', times);
  function up() {
    const newTimes = [...times];
    newTimes.push(getCurrentTime());
    setTimes(newTimes);
  }
  return (
    <>
      <h1>카운터2</h1>
      <button onClick={up}>+</button>
      <ol></ol>
    </>
  );
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={0}></Counter>
      <Counter2></Counter2>
    </div>
  );
}

export default App;
