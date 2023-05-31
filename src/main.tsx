import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RoutePath from "./modules/routes/Routes.tsx";
// import dotenv from "dotenv";

// dotenv.config();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutePath />
    </BrowserRouter>
  </React.StrictMode>
);
