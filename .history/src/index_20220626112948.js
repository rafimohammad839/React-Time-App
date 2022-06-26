import React from "react";
import ReactDOM from "react-dom/client";
import { TimeProvider } from "./contexts/TimeContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TimeProvider>
      <App />
    </TimeProvider>
  </React.StrictMode>
);
