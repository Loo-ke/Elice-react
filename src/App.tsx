import React, { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

type countItemType = {
  time: string;
  step: number;
};
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState<countItemType[]>([]);
  return (
    <div
      style={{
        border: "10px solid" + getRandomColor(),
        margin: "20px 0",
        backgroundColor: getRandomColor(),
        color: getRandomColor(),
      }}
    >
      <h1>Counter</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => {
          setStep(parseInt(e.target.value));
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          const newCountItem: countItemType = {
            time: new Date().toLocaleTimeString(),
            step,
          };
          setCount([...count, newCountItem]);
        }}
      >
        +
      </Button>{" "}
      {count.reduce((prev, curr) => {
        return prev + curr.step;
      }, 0)}
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
              <tr key={index}>
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
function Counter2() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "10px solid black", padding: 20 }}>
      <h1>Counter - Dialog</h1>
      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        Run
      </Button>

      <div style={{ display: open ? "block" : "none" }}>
        <h2>Dialog Counter</h2>
        <button>+</button> 0
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          close
        </Button>
      </div>
    </div>
  );
}
function App() {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Counter2></Counter2>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter></Counter>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Counter></Counter>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
