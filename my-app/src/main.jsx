import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GugudanGame from "./GugudanGame.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GugudanGame />
  </StrictMode>
);
