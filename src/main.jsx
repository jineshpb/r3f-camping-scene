import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "20px",
          padding: "20px",

          zIndex: 1000,
        }}
      >
        <Header />
      </div>
      <App />
    </div>
  </React.StrictMode>
);
