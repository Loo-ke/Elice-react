import React from "react";
import "./App.css";
import { Counter4UseEffect } from "./Counter4UseEffect";
import { Counter } from "./Counter";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Counter4UseEffect />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Counter />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
