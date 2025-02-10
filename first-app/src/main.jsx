import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// index.html id='root'에 아래의 App.jsx 를 화면표시
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
  // StrictMode 는 없어도 됌?
  // createRoot(document.getElementById("root".reder(<App/>)));
);
