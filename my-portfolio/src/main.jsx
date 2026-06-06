import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import logo from "./assets/logo.jpg";
import "./index.css";
import App from "./App.jsx";

const favicon =
  document.querySelector("link[rel='icon']") ?? document.createElement("link");

favicon.rel = "icon";
favicon.type = "image/jpeg";
favicon.href = logo;

if (!favicon.parentElement) {
  document.head.appendChild(favicon);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
