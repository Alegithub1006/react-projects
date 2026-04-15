import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Filteredprovider } from "./context/filters.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Filteredprovider>
      <App />
    </Filteredprovider>
  </StrictMode>,
);
