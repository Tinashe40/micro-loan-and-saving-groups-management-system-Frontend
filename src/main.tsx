import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/styles.css"; // Import global styles

// Initialize the root element for your app
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Router is here only */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
