import ReactDOM from "react-dom/client";
import App from "./routes/Routes";
import "./main.scss";
import { AuthContextProvider } from "./context/auth/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
