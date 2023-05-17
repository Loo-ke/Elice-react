import React, { useState } from 'react';

type CounterProps = {
  title: string;
  initValue?: number;
};

export function Counter({ title, initValue = 0 }: CounterProps) {
  // const countState = useState(initValue);
  // let count = countState[0];
  // let setCount = countState[1];
  const [count, setCount] = useState(initValue);
  function up() {
    setCount(count + 1);
  }
  return (
    <div className="outline">
      <h1>{title}</h1>
      <button onClick={up}>+</button> {count}
    </div>
  );
}
