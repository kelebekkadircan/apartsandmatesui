import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import Routes from "./routes/Routes";
import "./main.scss";
import { AuthContextProvider } from "./context/auth/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Routes />
  </AuthContextProvider>
);
