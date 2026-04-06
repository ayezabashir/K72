import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import LoadingAnimation from "./components/loading/LoadingAnimation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingAnimation>
        <App />
      </LoadingAnimation>
    </BrowserRouter>
  </StrictMode>,
);
