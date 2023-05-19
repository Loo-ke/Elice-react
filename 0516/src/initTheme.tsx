import { createContext } from "react";

const initTheme = {
  button: {
    border: "10px solid red",
    backgroundColor: "green",
    fontSize: 20,
  },
};
export const theme = createContext(initTheme);
export const MyThemeProvider = theme.Provider;
