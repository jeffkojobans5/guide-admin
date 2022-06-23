import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <UserProvider>
      <App />
    </UserProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
