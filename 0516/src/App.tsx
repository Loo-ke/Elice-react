import React from "react";
import "./App.css";
import { Counter4UseEffect } from "./Counter4UseEffect";
import { Counter } from "./Counter";
import {
  Button,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import { ContextAPI } from "./ContextAPI";
import { MyUseReduce } from "./MyUseReduce";

const darkTheme = createTheme({
  palette: {
    primary: grey,
  },
});
const globalTheme = createTheme({
  spacing: 10,
  palette: {
    primary: red,
  },
});
function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Container maxWidth="md">
        <Button variant="contained" style={{ marginBottom: 10 }}>
          LOGIN
        </Button>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MyUseReduce />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContextAPI />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ThemeProvider theme={darkTheme}>
              <Counter4UseEffect />
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Counter />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
export default App;
