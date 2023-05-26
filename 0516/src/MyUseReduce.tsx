import React, { useReducer } from "react";

// export function MyUseReduce() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="layout">
//       <h1>useReduce</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         0
//       </button>
//       {count}
//     </div>
//   );
// }

export function MyUseReduce() {
  // const [count, setCount] = useState(0);
  function countReducer(oldCount: number, action: string): number {
    console.log(oldCount, action);
    if (action === "UP") {
      return oldCount + 1;
    } else if (action === "DOWN") {
      return oldCount - 1;
    } else if (action === "RESET") {
      return 0;
    }
    return oldCount;
  }
  const [count, countDispatch] = useReducer(countReducer, 10);
  return (
    <div className="layout">
      <h1>useReduce</h1>
      <button
        onClick={() => {
          // setCount(count + 1);
          countDispatch("UP");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // setCount(count - 1);
          countDispatch("DOWN");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          // setCount(0);
          countDispatch("RESET");
        }}
      >
        0
      </button>
      {count}
    </div>
  );
}
