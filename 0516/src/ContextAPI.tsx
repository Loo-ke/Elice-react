import React from "react";
import { ContextAPISub } from "./ContextAPISub";
import { MyThemeProvider } from "./initTheme";
export function ContextAPI() {
  return (
    <MyThemeProvider
      value={{
        button: {
          border: "10px solid pink",
          backgroundColor: "blue",
          fontSize: 50,
        },
      }}
    >
      <div className="layout">
        <h1>Context api</h1>
        <button>+</button>
        <ContextAPISub />
      </div>
    </MyThemeProvider>
  );
}
