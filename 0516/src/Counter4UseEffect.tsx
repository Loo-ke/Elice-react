import { Button, ButtonGroup } from "@mui/material";
import React, { useState, useEffect } from "react";

export function Counter4UseEffect() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        // setCount(count + 1);
        setCount((oldCount) => oldCount + 1);
        console.log("count2", count);
      }, 1000);

      return () => {
        console.log("unmount");
        clearInterval(id);
      };
    }
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  return (
    <div className="layout">
      <h1>useEffect, setInterval</h1>

      <p>Count: {count}</p>
      <ButtonGroup style={{ marginLeft: 10 }}>
        <Button variant="contained" onClick={start}>
          Start
        </Button>
        <Button variant="contained" onClick={stop}>
          Stop
        </Button>
      </ButtonGroup>
    </div>
  );
}
