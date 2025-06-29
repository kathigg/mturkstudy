import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import "./index.css";
import App from "./App";

// Create root and render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
