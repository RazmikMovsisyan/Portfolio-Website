import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

console.log("Current path:", window.location.pathname);
console.log("Redirect from session:", sessionStorage.getItem("redirect"));

const redirectPath = sessionStorage.getItem("redirect");
if (redirectPath && redirectPath !== window.location.pathname) {
  console.log("Restoring path:", redirectPath);
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirectPath);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
