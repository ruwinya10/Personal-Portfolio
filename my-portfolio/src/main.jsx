import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import logo from "./assets/logo.png";
import { setFaviconWithBackground } from "./utils/setFavicon";
import "./index.css";
import App from "./App.jsx";

setFaviconWithBackground(logo);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
