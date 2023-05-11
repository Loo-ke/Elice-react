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
  const [times, setTimes] = useState<String[]>([]);
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
      <ol>
        {times.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ol>
    </>
  );
}

function Counter3() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  return (
    <>
      <h1>Counter3</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => {
          setStep(Number(e.target.value));
        }}
      ></input>
      <button onClick={() => setCount(count + step)}>+</button>
      {count}
    </>
  );
}

type countType = {
  time: string;
  step: number;
};
function Counter4() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState<countType[]>([]);
  console.log('count', count);
  // let total = 0;
  // for (let i = 0; i < count.length; i++) {
  //   total = total + count[i].step;
  // }

  return (
    <>
      <h1>Counter4</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => {
          setStep(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          const newCount = [...count];
          newCount.push({ time: getCurrentTime(), step: step });
          setCount(newCount);
        }}
      >
        +
      </button>

      <table>
        <tr>총계</tr>
        <td>
          {count.reduce((acc, cur) => {
            console.log(acc, cur);
            return acc + cur.step;
          }, 0)}
        </td>
        {count.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.time}</td>
              <td>{value.step}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={0}></Counter>
      <Counter2></Counter2>
      <Counter3></Counter3>
      <Counter4></Counter4>
    </div>
  );
}

export default App;
